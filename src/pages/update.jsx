import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './content-updates.module.css';

export default function ContentUpdates() {
  const {siteConfig} = useDocusaurusContext();

  const categoryLabels = {
    "版本更新": translate({message: "版本更新"}),
    "NextHiCar": translate({message: "NextHiCar"}),
    "经典HiCar": translate({message: "经典HiCar"}),
    "网站页面": translate({message: "网站页面"}),
  };

  const updates = [
    {
      date: "2026-04-16",
      items: [
        {
          text: translate({message: "Next HiCar正式版本更新，更新至6.1.33.203正式版本"}),
          link: "/download",
          category: "版本更新"
        },
        
        
      ]
    },
    {
      date: "2026-03-05",
      items: [
        {
          text: translate({message: "Next HiCar尝鲜版本更新，更新至6.0.96.21尝鲜版本"}),
          link: "/download",
          category: "版本更新"
        },
        
        
      ]
    },
    {
      date: "2026-02-08",
      items: [
        {
          text: translate({message: "Next HiCar众测版本更新，更新至6.0.96.16测试版本"}),
          link: "/download",
          category: "版本更新"
        },
        
        
      ]
    },
    {
      date: "2026-01-28",
      items: [
        {
          text: translate({message: "Next HiCar版本首次独立更新，更新至6.0.95.120测试版本"}),
          link: "/download",
          category: "版本更新"
        },
        
        
      ]
    },
    {
      date: "2026-01-24",
      items: [
        {
          text: translate({message: "经典HiCar版本更新至14.2.0.365测试版本"}),
          link: "/download",
          category: "版本更新"
        },
        
        
      ]
    },

    {
      date: "2025-12-04",
      items: [
        {
          text: translate({message: "增加Next HiCar应用分屏功能说明"}),
          link: "/docs/next-guides/ui/screen-split",
          category: "NextHiCar"
        },
        {
          text: translate({message: "增加Next HiCar DOCK区域支持滑动、播放播放时隐藏的说明"}),
          link: "/docs/next-guides/ui/dock",
          category: "NextHiCar"
        },
        {
          text: translate({message: "增加HiCar熄屏显示功能说明"}),
          link: "/docs/guides/ui/always-display",
          category: "经典HiCar"
        },
        {
          text: translate({message: "增加HiCar DOCK区域支持滑动、播放播放时隐藏的说明"}),
          link: "/docs/guides/ui/dock",
          category: "经典HiCar"
        },
      ]
    },
    {
      date: "2025-11-23",
      items: [
        {
          text: translate({message: "增加设备列表页面"}),
          link: "/box",
          category: "网站页面"
        },
      ]
    },

    {
      date: "2025-11-16",
      items: [
        {
          text: translate({message: "提供Next HiCar单独内容"}),
          link: "/docs/next-intro",
          category: "NextHiCar"
        },
        
        
      ]
    },
    
    {
      date: "2025-11-15",
      items: [
        {
          text: translate({message: "新增下载页面"}),
          link: "/download",
          category: "网站页面"
        },
        {
          text: translate({message: "新增更新记录，记录网站更新"}),
          link: "/update",
          category: "网站页面"
        },
        
        
      ]
    },
   
  ];

  // 按日期分组，并转换为按月份分组
  const groupedUpdates = updates.reduce((acc, update) => {
    const month = update.date.substring(0, 7); // 获取年月 "2024-12"
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(update);
    return acc;
  }, {});

  const monthNames = {
    "2026-12": translate({message: "2026年12月"}),
    "2026-11": translate({message: "2026年11月"}),
    "2026-10": translate({message: "2026年10月"}),
    "2026-09": translate({message: "2026年09月"}),
    "2026-08": translate({message: "2026年08月"}),
    "2026-07": translate({message: "2026年07月"}),
    "2026-06": translate({message: "2026年06月"}),
    "2026-05": translate({message: "2026年05月"}),
    "2026-04": translate({message: "2026年04月"}),
    "2026-03": translate({message: "2026年03月"}),
    "2026-02": translate({message: "2026年02月"}),
    "2026-01": translate({message: "2026年01月"}),
    "2025-12": translate({message: "2025年12月"}),
    "2025-11": translate({message: "2025年11月"}),

  };

  return (
    <Layout
      title={`${translate({message: '站点更新记录'})} - ${siteConfig.title}`}
      description={translate({message: '网站内容更新历史记录'})}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}><Translate>站点更新记录</Translate></h1>
          <p className={styles.heroSubtitle}><Translate>页面及内容更新历史</Translate></p>
          <p className={styles.heroDescription}>
            <Translate>记录网站所有页面及内容的更新情况，帮助您了解最新变化</Translate>
          </p>
        </div>
        <div className={styles.heroBackground}></div>
      </div>

      <main className={styles.mainContent}>
        <div className={styles.updatesContainer}>
          <div className={styles.updatesTimeline}>
            {Object.entries(groupedUpdates).map(([month, monthUpdates]) => (
              <div key={month} className={styles.monthSection}>
                <h2 className={styles.monthTitle}>{monthNames[month] || month}</h2>
                <div className={styles.timeline}>
                  {monthUpdates.map((update, updateIndex) => (
                    <div key={updateIndex} className={styles.timelineItem}>
                      <div className={styles.timelineDate}>
                        <div className={styles.dateCircle}></div>
                        <span className={styles.dateText}>{update.date}</span>
                      </div>
                      <div className={styles.timelineContent}>
                        <div className={styles.updateCards}>
                          {update.items.map((item, itemIndex) => (
                            <div key={itemIndex} className={styles.updateCard}>
                              <div className={styles.cardHeader}>
                                <span className={`${styles.categoryTag} ${styles[item.category]}`}>
                                  {categoryLabels[item.category] || item.category}
                                </span>
                              </div>
                              <div className={styles.cardContent}>
                                <a href={item.link} className={styles.updateLink}>
                                  {item.text}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3><Translate>📊 更新统计</Translate></h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{updates.length}</div>
                  <div className={styles.statLabel}><Translate>更新天数</Translate></div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {updates.reduce((total, update) => total + update.items.length, 0)}
                  </div>
                  <div className={styles.statLabel}><Translate>内容条目</Translate></div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {new Set(updates.flatMap(update => update.items.map(item => item.category))).size}
                  </div>
                  <div className={styles.statLabel}><Translate>内容分类</Translate></div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3><Translate>🏷️ 内容分类</Translate></h3>
              <div className={styles.categoriesList}>
                {Array.from(new Set(updates.flatMap(update => update.items.map(item => item.category)))).map(category => {
                  const count = updates.flatMap(update => update.items).filter(item => item.category === category).length;
                  return (
                    <div key={category} className={styles.categoryItem}>
                      <span className={`${styles.categoryDot} ${styles[category]}`}></span>
                      <span className={styles.categoryName}>{categoryLabels[category] || category}</span>
                      <span className={styles.categoryCount}>({count})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
