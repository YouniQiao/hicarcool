import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
    <section className={styles.features}>
      <div className="container">
        <h1>HUAWEI HiCar Apks</h1>
        <p>Download HUAWEI HiCar APK for Android</p><p>
        </p><p></p><p>
        </p>
        <table>
        <thead><tr><th>Updated</th><th>众测版本</th><th>正式版本</th><th>紧跟正式版本的众测版本</th></tr></thead>
        <tbody>
        <tr>
        <td>说明</td>
        <td>新特性的首发测试版本。通过会员中心体验官下载。</td>
        <td>新特性的正式商用版本，会与众测版本有些细微的差别。通过应用市场下载。</td>
        <td>在正式版本之上额外开放花瓣地图以及微信投屏的版本。通过会员中心体验官下载。</td>
        </tr>
        <tr>
        <td>2023.04</td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooGDEtCW2nZHtzOro?e=WFcAQS" target="_blank">13.2.0.435</a></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>2023.03</td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooDwt5BKgGEVkJib0?e=v8yH0z" target="_blank">13.2.0.425</a></td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooELyHnJzCzCi5Zro?e=lGhRQB" target="_blank">13.2.0.430</a></td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooEEzuIRVYa9eBXOY?e=txpoHW" target="_blank">13.2.0.431</a></td>
        </tr>
        <tr>
        <td>2023.02</td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooD_GQiItjOFiWiRP?e=qEv0AR" target="_blank">13.2.0.415</a></td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooD1Nt_E7nHEWTKxz?e=aeILTU" target="_blank">13.2.0.420</a></td>
        <td><a href="https://1drv.ms/u/s!AjNBmOx9zvFooEAakxPR9OwvVCS9?e=F0rNjh" target="_blank">13.2.0.421</a></td>
        </tr>
        </tbody>
        </table>
      </div>
    </section>
    <section>
        <div className="container">
        <div className="text--center padding-horiz--md">
          <p>想尽快用上HUAWEI HiCar？<a href='/box'>点击了解HiCar 周边设备</a></p>
          <p></p><p></p>
          <p>本站非HiCar官方站点，但会随HiCar功能演进持续更新，<a href='/docs/update'>点击了解本站更新说明</a></p>
        </div>
        
      </div>
    </section>
    </section>
  );
}

