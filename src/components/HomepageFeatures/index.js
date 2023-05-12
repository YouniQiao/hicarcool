import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HUAWEI HiCar教程',
    Svg: require('@site/static/img/undraw_tutorial.svg').default,
    description: (
      <>
        从HiCar是什么，到HiCar支持哪些手机、应用和车型，再到HiCar每个功能怎么用又有哪些注意事项，
        教程里都有。您可以访问<a href='/docs/intro'>本站教程菜单</a>直接查看（手机访问本站时请从网站左上角菜单进入）。
      </>
    ),
  },
  {
    title: 'HUAWEI HiCar设备',
    Svg: require('@site/static/img/undraw_device.svg').default,
    description: (
      <>
        从各种转换盒，到车载智慧屏/智能后视镜，到后装车机，再到车载香薰机等跟HiCar相关的周边设备，
        一网打尽。想尽快用上HUAWEI HiCar？<a href='/box'>请点击了解HiCar周边设备</a>。
      </>
    ),
  },
  {
    title: '本站更新说明',
    Svg: require('@site/static/img/undraw_update.svg').default,
    description: (
      <>
        本站并非HiCar官方站点，由HiCar粉丝搭建并维护，会随HiCar功能演进持续更新，<a href='/docs/update'>点击了解本站更新说明</a>。
        同时欢迎各位有能力有意愿的各位HiCar粉丝共同参与本站内容建设，参与方式：在教程页面左下角“编辑此页”跳转到Github提交PR。
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
        <p>Download HUAWEI HiCar APK for Android</p>
        <p>各文件下载密码：<font color="red"><b>hicar</b></font></p><p>
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
        <td>2023.04~05</td>
        <td><a href="https://hicar.lanzoum.com/iZ4ZR0vpw2ri" target="_blank"><font color="red">13.2.0.450</font></a><br /><a href="https://hicar.lanzoum.com/iyhD20v6mvja" target="_blank">13.2.0.435</a></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>2023.03</td>
        <td><a href="https://hicar.lanzoum.com/ir1HC0v6o78h" target="_blank">13.2.0.425</a></td>
        <td><a href="https://hicar.lanzoum.com/ii7P80v6muje" target="_blank">13.2.0.430</a></td>
        <td><a href="https://hicar.lanzoum.com/iMy5m0v6mv2d" target="_blank">13.2.0.431</a></td>
        </tr>
        <tr>
        <td>2023.02</td>
        <td><a href="https://hicar.lanzoum.com/iJIu90v6mx0d" target="_blank">13.2.0.415</a></td>
        <td><a href="https://hicar.lanzoum.com/iiQN50v6mvvc" target="_blank">13.2.0.420</a></td>
        <td><a href="https://hicar.lanzoum.com/iuRtW0v6mwcj" target="_blank">13.2.0.421</a></td>
        </tr>
        </tbody>
        </table>
      </div>
    </section>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </section>
  );
}

