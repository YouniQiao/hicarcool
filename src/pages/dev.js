import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import DevpageFeatures from '@site/src/components/DevpageFeatures';

import styles from './dev.module.css';

function DevpageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">开发指南</p>
        <p >本页面仅罗列应用/设备接入HiCar的文档链接，至于所需的SDK及相关工具官方并未开放，如需要请按照合作流程向官方申请。</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`HiCar开发指导`}
      description="HiCar开发指导文档">
        <DevpageHeader />
      <main>
        <DevpageFeatures />
      </main>
    </Layout>
  );
}
