import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './support.module.css';

/**
 * 车型查询 —— 数据来自 HiCar 数据服务 https://api.hicar.club/v1/
 *  · 前端一次拉 search.json（约 1.8MB，nginx 自动 gzip 后 ~240KB），本地搜索/筛选，无需后端
 *  · 支持：关键词搜索（车型/车系/品牌）+ 品牌 → 车系 → 车型 三级浏览 + 协议筛选
 *  · 口径：未提及 = 汽车之家未填写（≠ 不支持）；「仅原厂互联/映射」计为不支持
 *  · 调试：在地址后加 ?api=http://localhost:8099 可切到本地数据副本
 */

const DEFAULT_API = 'https://api.hicar.club';
const RESULT_STEP = 100;

async function fetchSearch(api, ver) {
  // 数据版本做 URL 指纹：每月新版自动是新 URL（可放心长缓存），旧版不会被 force-cache 卡住
  const q = ver ? '?v=' + encodeURIComponent(ver) : '';
  // 优先明文（nginx 会 gzip），旧版本数据只有 .gz 时用 DecompressionStream 解
  try {
    const r = await fetch(api + '/v1/search.json' + q);
    if (r.ok) return await r.json();
  } catch (e) {
    /* fallthrough */
  }
  const r2 = await fetch(api + '/v1/search.json.gz' + q);
  if (!r2.ok) throw new Error('search index unavailable');
  if (typeof DecompressionStream === 'undefined') {
    throw new Error('browser does not support gzip decompression');
  }
  const stream = r2.body.pipeThrough(new DecompressionStream('gzip'));
  const buf = await new Response(stream).arrayBuffer();
  return JSON.parse(new TextDecoder('utf-8').decode(buf));
}

/** 位掩码 → 协议 code 数组（掩码第 i 位对应 protocols[i]） */
function maskToCodes(mask, protos) {
  const out = [];
  protos.forEach((p, i) => {
    if (mask & (1 << i)) out.push(p.code);
  });
  return out;
}

function norm(s) {
  return String(s || '').toLowerCase().replace(/\s+/g, '');
}

export default function SupportPage() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const isEn = !!(i18n && i18n.currentLocale === 'en');
  const [api, setApi] = useState(DEFAULT_API);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [meta, setMeta] = useState(null);
  const [protos, setProtos] = useState([]);
  const [items, setItems] = useState([]);
  const [indexReady, setIndexReady] = useState(false);
  const [indexError, setIndexError] = useState('');
  const [brands, setBrands] = useState([]);

  const [q, setQ] = useState('');
  const [brandId, setBrandId] = useState('');
  const [seriesId, setSeriesId] = useState('');
  const [filters, setFilters] = useState([]);
  const [showOther, setShowOther] = useState(false);
  const [limit, setLimit] = useState(RESULT_STEP);

  // ---------- 数据加载 ----------
  useEffect(() => {
    let params = null;
    try {
      params = new URLSearchParams(window.location.search);
    } catch (e) {
      params = null;
    }
    const base = (() => {
      if (params && params.get('api')) return params.get('api').replace(/\/$/, '');
      const cf = siteConfig && siteConfig.customFields;
      return ((cf && cf.hicarApiBase) || DEFAULT_API).replace(/\/$/, '');
    })();
    setApi(base);
    let alive = true;
    (async () => {
      try {
        // 第一步：品牌树 + 元信息（小，约 200KB gzip）——先让页面和品牌/车系选择可用
        const [m, b] = await Promise.all([
          fetch(base + '/v1/meta.json').then((r) => r.json()),
          fetch(base + '/v1/brands.json').then((r) => r.json()),
        ]);
        if (!alive) return;
        setMeta(m);
        setProtos((m.protocols || []).filter((p) => p.code));
        setBrands(b.brands || []);
        setLoading(false);
        // 可分享/可收藏的深链：?q=关键词 / ?brand=品牌id / ?series=车系id
        if (params) {
          const qs = params.get('q');
          const bid = params.get('brand');
          const sid = params.get('series');
          const pr = params.get('proto');
          if (qs) setQ(qs);
          if (bid) setBrandId(bid);
          if (sid) {
            setSeriesId(sid);
            const bt = (b.brands || []).find((x) => x.series.some((y) => String(y.id) === sid));
            if (bt) setBrandId(bt.brand_id);
          }
          if (pr) setFilters(pr.split(',').filter(Boolean));
        }
        // 第二步：车型索引后台加载（收录停售年款后 5 万+ 条、gzip 约 1MB）——
        // 不阻塞首屏；加载完成前车型列表/搜索区显示「车型索引加载中」
        try {
          const s = await fetchSearch(base, m.data_version);
          if (!alive) return;
          setItems(s.items || []);
          setIndexReady(true);
        } catch (e2) {
          if (!alive) return;
          setIndexError(String((e2 && e2.message) || e2));
        }
      } catch (e) {
        if (!alive) return;
        setError(String((e && e.message) || e));
        setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [siteConfig]);

  const mainProtos = useMemo(() => protos.filter((p) => p.main), [protos]);
  const otherProtos = useMemo(() => protos.filter((p) => !p.main), [protos]);
  const filterMask = useMemo(
    () => filters.reduce((m, c) => m | (1 << protos.findIndex((p) => p.code === c)), 0),
    [filters, protos],
  );

  const curBrand = useMemo(() => brands.find((b) => b.brand_id === brandId), [brands, brandId]);
  const curSeries = useMemo(
    () => (curBrand ? curBrand.series.find((s) => String(s.id) === seriesId) : null),
    [curBrand, seriesId],
  );

  // ---------- 结果集 ----------
  const brandSeriesIds = useMemo(
    () => (curBrand ? new Set(curBrand.series.map((s) => String(s.id))) : null),
    [curBrand],
  );

  // 搜索用的归一化文本（收录停售年款后条目到 5 万+，预先算好，避免每次输入都重算）
  const hayStack = useMemo(
    () => items.map((it) => norm(it[0]) + '|' + norm(it[1]) + '|' + norm(it[2])),
    [items],
  );

  const result = useMemo(() => {
    if (!items.length) return [];
    const kws = q.trim() ? q.trim().split(/\s+/).map(norm).filter(Boolean) : [];
    const rows = [];
    for (let i = 0; i < items.length; i += 1) {
      const it = items[i];
      if (kws.length) {
        const hay = hayStack[i];
        let ok = true;
        for (let k = 0; k < kws.length; k += 1) {
          if (hay.indexOf(kws[k]) === -1) {
            ok = false;
            break;
          }
        }
        if (!ok) continue;
      } else if (seriesId) {
        if (String(it[4]) !== seriesId) continue;
      } else if (brandSeriesIds) {
        if (!brandSeriesIds.has(String(it[4]))) continue;
      }
      if (filterMask && (it[6] & filterMask) !== filterMask) continue;
      rows.push(it);
    }
    return rows;
  }, [items, hayStack, q, seriesId, filterMask, brandSeriesIds]);

  const grouped = useMemo(() => {
    const map = new Map();
    const shown = result.slice(0, limit);
    for (let i = 0; i < shown.length; i += 1) {
      const it = shown[i];
      const key = it[4];
      if (!map.has(key)) map.set(key, {id: key, name: it[1], brand: it[2], rows: []});
      map.get(key).rows.push(it);
    }
    return Array.from(map.values());
  }, [result, limit]);

  const toggleFilter = useCallback((code) => {
    setFilters((f) => (f.indexOf(code) === -1 ? f.concat([code]) : f.filter((x) => x !== code)));
    setLimit(RESULT_STEP);
  }, []);

  const onSearch = useCallback((v) => {
    setQ(v);
    setLimit(RESULT_STEP);
    if (v) {
      setSeriesId('');
      setBrandId('');
    }
  }, []);

  const badges = (mask) => {
    const codes = maskToCodes(mask, protos);
    const main = codes.filter((c) => mainProtos.some((p) => p.code === c));
    const other = codes.filter((c) => !mainProtos.some((p) => p.code === c));
    const label = (c) => {
      const p = protos.find((x) => x.code === c);
      return p ? (isEn && p.name_en ? p.name_en : p.name) : c;
    };
    return (
      <>
        {main.map((c) => (
          <span key={c} className={styles.badge + ' ' + styles['badge_' + c]}>
            {label(c)}
          </span>
        ))}
        {/* 长尾协议也逐个显示，不再折叠成 +N（老板 2026-10-01 要求） */}
        {other.map((c) => (
          <span key={c} className={styles.badge + ' ' + styles.badge_other} title={label(c)}>
            {label(c)}
          </span>
        ))}
        {codes.length === 0 && (
          <span className={styles.badgeNone}>{translate({message: '未提及'})}</span>
        )}
      </>
    );
  };

  const [brandFilter, setBrandFilter] = useState('');
  const brandList = useMemo(() => {
    const k = norm(brandFilter);
    return brands.filter((b) => (k ? norm(b.brand).indexOf(k) !== -1 : true));
  }, [brands, brandFilter]);

  // 选中车系后仍显示该品牌全部车系（选中的高亮并滚动到可见处），方便随时切换（老板 2026-10-01）
  const liveSeries = useMemo(() => (curBrand ? curBrand.series : []), [curBrand]);
  const seriesListRef = useRef(null);
  useEffect(() => {
    if (!seriesId || !seriesListRef.current) return;
    const el = seriesListRef.current.querySelector('[data-selected="1"]');
    if (el && el.scrollIntoView) el.scrollIntoView({block: 'nearest'});
  }, [seriesId, liveSeries]);

  const counts = meta ? meta.counts || {} : {};

  // 车系 -> {停售年款: 年款页 id}：让每行「原文」跳到该车型所属年款的参配页
  const yearMap = useMemo(() => {
    const m = {};
    brands.forEach((b) => (b.series || []).forEach((s) => {
      if (s.years) m[s.id] = s.years;
    }));
    return m;
  }, [brands]);

  // 结果列表视图：搜索中，或只勾了协议筛选（未选具体车系）
  const listMode = !!q || (!seriesId && filters.length > 0);

  return (
    <Layout
      title={translate({message: '车型查询'}) + ' - ' + siteConfig.title}
      description={translate({
        message: '查询车型的手机互联支持情况：HUAWEI HiCar、CarPlay、CarLife、Android Auto 等',
      })}>
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            <Translate>车型查询</Translate>
          </h1>
          <p className={styles.heroDesc}>
            {translate({
              message:
                '查询任意车型的手机互联支持情况 —— HUAWEI HiCar、CarPlay、CarLife、Android Auto 与厂商自有互联',
            })}
          </p>
          <div className={styles.stats}>
            {meta ? (
              <>
                <span>
                  <b>{counts.brands}</b> <Translate>个品牌</Translate>
                </span>
                <span>
                  <b>{counts.series}</b> <Translate>个车系</Translate>
                </span>
                <span>
                  <b>{counts.trims}</b> <Translate>款车型</Translate>
                  {counts.trims_stopped ? (
                    <em className={styles.statsSub}>
                      {translate({message: '（在售'})}
                      {counts.trims_onsale}
                      {translate({message: '· 停售年款'})}
                      {counts.trims_stopped}
                      {translate({message: '）'})}
                    </em>
                  ) : null}
                </span>
                <span>
                  <Translate>支持 HiCar</Translate> <b>{counts.hicar_yes}</b> <Translate>款</Translate>
                </span>
                <span className={styles.statsVersion}>
                  {translate({message: '数据版本'})} {meta.data_version} ·{' '}
                  {translate({message: '更新于'})} {String(meta.generated_at).slice(0, 16)}
                </span>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className="container">
          {loading && (
            <div className={styles.notice}>
              <Translate>数据加载中…</Translate>
            </div>
          )}
          {error && (
            <div className={styles.noticeErr}>
              <Translate>数据加载失败：</Translate>
              {error}
              <div className={styles.noticeHint}>
                <Translate>接口地址</Translate>: {api}
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              {/* 搜索 + 协议筛选 */}
              <div className={styles.searchBar}>
                <input
                  className={styles.searchInput}
                  type="search"
                  value={q}
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder={translate({
                    message: '输入车型 / 车系 / 品牌，如：问界M7、卡罗拉 2024',
                  })}
                />
                {q && (
                  <button className={styles.clearBtn} onClick={() => onSearch('')}>
                    <Translate>清空</Translate>
                  </button>
                )}
              </div>

              <div className={styles.filters}>
                <span className={styles.filtersLabel}>
                  <Translate>按互联协议筛选</Translate>
                </span>
                {mainProtos.map((p) => (
                  <button
                    key={p.code}
                    className={
                      filters.indexOf(p.code) === -1
                        ? styles.chip
                        : styles.chip + ' ' + styles.chipOn
                    }
                    onClick={() => toggleFilter(p.code)}>
                    {isEn && p.name_en ? p.name_en : p.name}
                  </button>
                ))}
                {otherProtos.length > 0 && (
                  <button
                    className={styles.chipMore}
                    onClick={() => setShowOther((v) => !v)}>
                    {showOther
                      ? translate({message: '收起其他协议'})
                      : translate({message: '其他协议'}) + ' +' + otherProtos.length}
                  </button>
                )}
              </div>
              {showOther && (
                <div className={styles.filters + ' ' + styles.filtersSub}>
                  {otherProtos.map((p) => (
                    <button
                      key={p.code}
                      className={
                        filters.indexOf(p.code) === -1
                          ? styles.chip
                          : styles.chip + ' ' + styles.chipOn
                      }
                      onClick={() => toggleFilter(p.code)}>
                      {isEn && p.name_en ? p.name_en : p.name}
                    </button>
                  ))}
                </div>
              )}

              {/* 车型索引（5 万+ 条，gzip ~1MB）后台加载中：品牌/车系选择已可用，车型列表稍等 */}
              {!indexReady && !indexError && (
                <div className={styles.notice}>
                  <Translate>车型索引加载中…</Translate>
                  <span className={styles.noticeHint}>
                    <Translate>收录车型较多，首次约 1MB，之后走浏览器缓存</Translate>
                  </span>
                </div>
              )}
              {indexError && (
                <div className={styles.noticeErr}>
                  <Translate>车型索引加载失败：</Translate>
                  {indexError}
                  <div className={styles.noticeHint}>
                    <Translate>品牌/车系仍可浏览，刷新页面重试</Translate>
                  </div>
                </div>
              )}

              {/* 结果区 */}
              {listMode ? (
                <section className={styles.section}>
                  <div className={styles.sectionHead}>
                    {q ? <Translate>搜索结果</Translate> : <Translate>筛选结果</Translate>}
                    <span className={styles.sectionCount}>
                      {result.length} <Translate>款车型</Translate>
                    </span>
                  </div>
                  {grouped.length === 0 && (
                    <div className={styles.notice}>
                      <Translate>没有匹配的车型，试试更短的关键词</Translate>
                    </div>
                  )}
                  {grouped.map((g) => (
                    <div key={g.id} className={styles.seriesCard}>
                      <div className={styles.seriesHead}>
                        <span className={styles.seriesBrand}>{g.brand}</span>
                        <span className={styles.seriesName}>{g.name}</span>
                      </div>
                      <table className={styles.trimTable}>
                        <tbody>
                          {g.rows.map((r) => (
                            <TrimRow
                              key={r[3]}
                              it={r}
                              badges={badges}
                              yearMap={yearMap}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                  {result.length > limit && (
                    <button className={styles.moreBtn} onClick={() => setLimit(limit + 200)}>
                      <Translate>显示更多</Translate>（{limit} / {result.length}）
                    </button>
                  )}
                </section>
              ) : (
                <section className={styles.section}>
                  <div className={styles.sectionHead}>
                    <Translate>按品牌查找</Translate>
                  </div>
                  <div className={styles.cascade}>
                    <div className={styles.panel}>
                      <div className={styles.panelHead}>
                        <Translate>品牌</Translate>
                      </div>
                      <input
                        className={styles.panelSearch}
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                        placeholder={translate({message: '筛选品牌'})}
                      />
                      <div className={styles.panelList}>
                        {brandList.map((b) => (
                          <button
                            key={b.brand_id}
                            className={
                              b.brand_id === brandId
                                ? styles.item + ' ' + styles.itemOn
                                : styles.item
                            }
                            onClick={() => {
                              setBrandId(b.brand_id);
                              setSeriesId('');
                              setLimit(RESULT_STEP);
                            }}>
                            <span className={styles.itemName}>
                              {b.letter ? <em className={styles.letterTag}>{b.letter}</em> : null}
                              {b.brand}
                            </span>
                            <span className={styles.itemCount}>{b.n_series}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.panel}>
                      <div className={styles.panelHead}>
                        <Translate>车系</Translate>
                      </div>
                      <div className={styles.panelList} ref={seriesListRef}>
                        {!curBrand && (
                          <div className={styles.panelHint}>
                            {translate({message: '← 先选品牌'})}
                          </div>
                        )}
                        {liveSeries.map((s) => (
                          <button
                            key={s.id}
                            data-selected={String(s.id) === seriesId ? '1' : undefined}
                            className={
                              String(s.id) === seriesId
                                ? styles.item + ' ' + styles.itemOn
                                : styles.item
                            }
                            onClick={() => {
                              setSeriesId(String(s.id));
                              setLimit(RESULT_STEP);
                            }}>
                            <span className={styles.itemName}>
                              {s.name}
                              {s.status !== '在售' && (
                                <em className={styles.stopTag}>{s.status}</em>
                              )}
                            </span>
                            <span className={styles.itemCount}>{s.n_trim || '—'}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.panelWide}>
                      <div className={styles.panelHead}>
                        <Translate>车型</Translate>
                        {curBrand && (
                          <span className={styles.panelHeadSub}>
                            {curBrand.brand}
                            {curSeries ? ' · ' + curSeries.name : ''}
                          </span>
                        )}
                      </div>
                      {!seriesId && (
                        <div className={styles.panelHint}>
                          <Translate>← 再选车系，即可看到该车系下每款车型的互联支持</Translate>
                        </div>
                      )}
                      {seriesId && (
                        <table className={styles.trimTable}>
                          <tbody>
                            {result.map((r) => (
                              <TrimRow
                                key={r[3]}
                                it={r}
                                protos={protos}
                                badges={badges}
                                yearMap={yearMap}
                              />
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>

                  </div>
                </section>
              )}

              <div className={styles.legend}>
                <div className={styles.legendTitle}>
                  <Translate>数据口径</Translate>
                </div>
                <ul>
                  <li>
                    {translate({
                      message:
                        '数据来自汽车之家车型参配表「互联/智能化 → 手机互联/映射」，每月更新一次；点每行的「原文」可看到原始取值并跳转核对',
                    })}
                  </li>
                  <li>
                    <b>
                      <Translate>未提及</Translate>
                    </b>
                    {translate({
                      message:
                        '表示汽车之家该格未填写，不代表不支持；「仅原厂互联/映射」按本站口径计为不支持',
                    })}
                  </li>
                  <li>
                    <Translate>停售车系多数没有参配数据，因此其车型多为「未提及」</Translate>
                  </li>
                  <li>
                    {translate({
                      message:
                        '已停售年款（老款车型）也已收录，行上标浅灰「停售」；在售车型看当年在售的年款',
                    })}
                  </li>
                  {counts.official_trims ? (
                    <li>
                      {translate({message: '汽车之家官方车型总数（含全部年款）'})}
                      {counts.official_trims}
                      {translate({message: '款，本库收录'})}
                      {counts.trims}
                      {translate({
                        message:
                          '款；差额主要是汽车之家本身没有参配表的老车系（无法取得数据）',
                      })}
                    </li>
                  ) : null}
                </ul>
              </div>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}

function TrimRow({it, badges, yearMap}) {
  const name = it[0];
  const seriesId = it[4];
  const evidence = it[8] || '';
  const seriesOn = it[7] !== 0;                                  // 车系在售
  const trimOn = it[9] === undefined ? seriesOn : it[9] !== 0;    // 该年款在售（老接口没这个字段）
  const stopTitle = seriesOn ? '该年款已停售' : '该车系已停售';
  // 「原文」= 直接跳汽车之家参配页；停售年款跳到**该年款**的参配页，
  // 否则会落在车系页默认的在售年款上、看不到自己那年（老板 2026-10-01 指出）
  const ym = (yearMap && yearMap[seriesId]) || {};
  const y = (String(name).match(/(\d{4})款/) || [])[1];
  const yearid = y ? ym[y] : null;   // years 的键是纯年份（'2024'）
  const srcUrl = yearid
    ? 'https://car.autohome.com.cn/config/series/' + seriesId + '-' + yearid + '.html'
    : 'https://car.autohome.com.cn/config/series/' + seriesId + '.html';
  return (
    <tr className={styles.trimRow}>
      <td className={styles.trimName}>
        {name}
        {!trimOn && (
          <em className={styles.stopTag} title={translate({message: stopTitle})}>
            {translate({message: '停售'})}
          </em>
        )}
      </td>
      <td className={styles.trimProto}>{badges(it[6])}</td>
      <td className={styles.trimOps}>
        <a
          className={styles.linkBtn}
          href={srcUrl}
          target="_blank"
          rel="noreferrer"
          title={
            (isEnSafe() ? 'Source on Autohome' : '汽车之家原文') +
            (evidence ? '：' + evidence : '')
          }>
          {translate({message: '原文'})}
        </a>
      </td>
    </tr>
  );
}

/** 语言判断（TrimRow 是独立组件，拿不到上层闭包） */
function isEnSafe() {
  try {
    return typeof window !== 'undefined' &&
      (window.location.pathname.startsWith('/en/') || window.location.pathname === '/en');
  } catch (e) {
    return false;
  }
}
