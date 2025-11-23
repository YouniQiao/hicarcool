import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './content-updates.module.css';

export default function ContentUpdates() {
  const {siteConfig} = useDocusaurusContext();

  const updates = [
    {
      date: "2025-11-16",
      items: [
        {
          text: "提供Next HiCar单独内容",
          link: "/docs/next/intro",
          category: "NextHiCar"
        },
        
        
      ]
    },
    
    {
      date: "2025-11-15",
      items: [
        {
          text: "新增下载页面",
          link: "/download",
          category: "网站页面"
        },
        {
          text: "新增更新记录，记录网站更新",
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
    "2025-12": "2025年12月",
    "2025-11": "2025年11月",

  };

  return (
    <Layout
      title={`站点更新记录 - ${siteConfig.title}`}
      description="网站内容更新历史记录">
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>站点更新记录</h1>
          <p className={styles.heroSubtitle}>页面及内容更新历史</p>
          <p className={styles.heroDescription}>
            记录网站所有页面及内容的更新情况，帮助您了解最新变化
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
                                  {item.category}
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
              <h3>📊 更新统计</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>{updates.length}</div>
                  <div className={styles.statLabel}>更新天数</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {updates.reduce((total, update) => total + update.items.length, 0)}
                  </div>
                  <div className={styles.statLabel}>内容条目</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {new Set(updates.flatMap(update => update.items.map(item => item.category))).size}
                  </div>
                  <div className={styles.statLabel}>内容分类</div>
                </div>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>🏷️ 内容分类</h3>
              <div className={styles.categoriesList}>
                {Array.from(new Set(updates.flatMap(update => update.items.map(item => item.category)))).map(category => {
                  const count = updates.flatMap(update => update.items).filter(item => item.category === category).length;
                  return (
                    <div key={category} className={styles.categoryItem}>
                      <span className={`${styles.categoryDot} ${styles[category]}`}></span>
                      <span className={styles.categoryName}>{category}</span>
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