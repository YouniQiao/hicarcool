import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Translate from '@docusaurus/Translate';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SwiperCarousel from '@site/src/components/HomepageFeatures/SwiperCarousel';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.heroCarousel}>
          <SwiperCarousel />
          <br/>
        </div>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/download">
            <Translate>立即下载</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`HiCar Cool`}
      description="HUAWEI HiCar 中文指南站：HiCar 支持哪些手机、哪些车型、哪些应用，连接方式与常见问题，车型手机互联支持情况一键查询。">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'HUAWEI HiCar',
            alternateName: 'HiCar Cool',
            url: 'https://hicar.cool/',
            inLanguage: 'zh-CN',
            description:
              'HUAWEI HiCar 中文指南站：HiCar 支持的手机、车型与应用，连接方式、版本更新与车型手机互联支持情况查询。',
          })}
        </script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
