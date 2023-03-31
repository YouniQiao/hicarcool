import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BoxpageFeatures from '@site/src/components/BoxpageFeatures';

import styles from './box.module.css';

function BoxpageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">周边设备</p>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`HiCar 周边`}
      description="Description will go into a meta tag in <head />">
        <BoxpageHeader />
      <main>
        <BoxpageFeatures />
      </main>
    </Layout>
  );
}
