import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HUAWEI HiCar 文档',
    Svg: require('@site/static/img/undraw_tutorial.svg').default,
    description: (
      <>
        HUAWEI HiCar具体是什么<br/>
        HiCar支持的手机/应用/车型<br/>
        HiCar每个功能详细指导说明<br/>
        文档里都有。您可以访问<a href='/docs/intro'>用户手册</a>直接查看<br/>
        （手机访问本站时请从网站左上角菜单进入）
      </>
    ),
  },
  {
    title: 'HUAWEI HiCar 设备',
    Svg: require('@site/static/img/undraw_device.svg').default,
    description: (
      <>
        HiCar转换盒、车载智慧屏<br/>
        智能后视镜、后装车机<br/>
        车载香薰机、VR眼镜、儿童安全座椅<br/>
        HiCar周边设备一网打尽<br/>
        <a href='/box'>详情请点击HiCar周边设备</a>
      </>
    ),
  },
  {
    title: '本站更新说明',
    Svg: require('@site/static/img/undraw_update.svg').default,
    description: (
      <>
        本站并非HiCar官方站点<br/>
        由HiCar粉丝搭建并维护<br/>
        随HiCar功能演进持续更新<br/>
        <a href='/docs/update'>点击了解本站更新说明</a>
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
      <section>
        <div className="container">
        <div className="text--center padding-horiz--md">
          <p></p>
          <p>HUAWEI HiCar是由华为提供的人车家互联解决方案。本站点为HiCar粉丝站点，提供HiCar相关的文档、设备信息、APK下载等内容。</p>
          <p>欢迎加入HiCar的大家庭，一起享受驾驶的乐趣。</p>
        </div>
      </div>
    </section>
    <section className={styles.features}>
      <div className="container">
        <h1>HiCar Apks Download</h1>
        <p>以下 APK 仅可安装在已经支持 HiCar 的华为手机上。</p>
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
        <td>2023.09~10</td>
        <td><a href="https://hicar.lanzouq.com/i0880192j9gh" target="_blank"><font color="red">14.2.0.115</font></a></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td>2023.07~08</td>
        <td><a href="https://hicar.lanzouq.com/iauQY13dp9kh" target="_blank">13.2.0.506</a></td>
        <td><a href="https://hicar.lanzouq.com/iTn2g14vrf6f" target="_blank"><font color="red">13.2.0.515</font></a><br/><a href="https://hicar.lanzouq.com/i5SIJ142yp6d" target="_blank">13.2.0.511</a></td>
        <td></td>
        </tr>
        <tr>
        <td>2023.06</td>
        <td><a href="https://hicar.lanzoum.com/ir0tA0ypsfve" target="_blank">13.2.0.500</a><br/><a href="https://hicar.lanzoum.com/iWP8n0ygtahc" target="_blank">13.2.0.457</a></td>
        <td><a href="https://hicar.lanzoum.com/iN1jz0z2xmha" target="_blank">13.2.0.501</a></td>
        <td><a href="https://hicar.lanzoum.com/iLB9C0z41b9g" target="_blank">13.2.0.502</a></td>
        </tr>
        <tr>
        <td>2023.04~05</td>
        <td><a href="https://hicar.lanzoum.com/iZ4ZR0vpw2ri" target="_blank">13.2.0.450</a><br /><a href="https://hicar.lanzoum.com/iyhD20v6mvja" target="_blank">13.2.0.435</a></td>
        <td><a href="https://hicar.lanzoum.com/iAXU80whbl6d" target="_blank">13.2.0.451</a></td>
        <td><a href="https://hicar.lanzoum.com/iC60G0whyykd" target="_blank">13.2.0.455</a></td>
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
      <h1>HiCar.Cool Overview</h1>
      <p>hicar.cool 为 HiCar 非官方站点，由热爱驱动。</p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section>
        <div className="container">
        <div className="text--center padding-horiz--md">
          <p>本站所有内容在Github开源，欢迎各位有能力有意愿的HiCar粉丝共同参与本站内容建设。</p>
          <p>参与方式：在文档页面左下角“编辑此页”跳转到Github提交PR。</p>
          <p></p>
        </div>
      </div>
    </section>
    </section>
  );
}

