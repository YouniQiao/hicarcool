import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BoxpageFeatures from '@site/src/components/BoxpageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './box.module.css';

function BoxpageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate>周边设备</Translate></p>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({message: 'HiCar 周边'})}
      description="HiCar peripheral devices">
        <BoxpageHeader />
      <main>
        <BoxpageFeatures />
      </main>
    </Layout>
  );
}
