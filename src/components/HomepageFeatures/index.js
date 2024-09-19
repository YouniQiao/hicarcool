import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'HUAWEI HiCar 文档',
    Svg: require('@site/static/img/undraw_tutorial.svg').default,
    description: (
      <>
        HUAWEI HiCar具体是什么<br/>
        HiCar支持的手机/应用/车型<br/>
        HiCar每个功能详细指导说明<br/>
        文档里都有。您可以访问<a href='/docs/intro'>使用手册</a>直接查看<br/>
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
        <a href='/docs/device'>详情请点击HiCar周边设备</a>
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


const StepList = [
  {
    title: '检查车辆',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        使用前确认您的车支持HiCar<br/>
        或者通过转换盒或其他方式支持HiCar<br/>
        具体说明请参见<a href='/docs/check/car'>检查车辆</a>
      </>
    ),
  },
  {
    title: '检查手机',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        只有部分华为手机以及荣耀手机支持HiCar<br/>
        其他品牌手机并不支持HiCar<br/>
        具体说明请参见<a href='/docs/check/phone'>检查手机</a>
      </>
    ),
  },
  {
    title: '开始连接',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        当车辆和手机都支持HiCar时<br/>
        那就开始连接吧<br/>
        具体连接操作请参见<a href='/docs/guides/connect/wireless'>连接</a>
      </>
    ),
  },
];

const DeviceList = [
  {
    title: '盒子设备',
    Svg: require('@site/static/img/undraw_dongle1.svg').default,
    description: (
      <>
        <a href='/docs/devices/carplay'>CarPlay转HiCar的盒子</a><br/>
        <a href='/docs/devices/carlife'>CarLife转HiCar的盒子</a><br/>
        <a href='/docs/devices/android'>安卓车机盒子</a>
      </>
    ),
  },
  {
    title: '车载智慧屏/后视镜/后装车机',
    Svg: require('@site/static/img/undraw_screen.svg').default,
    description: (
      <>
        <a href='/docs/devices/smart-screen'>车载智慧屏</a><br/>
        <a href='/docs/devices/smart-mirror'>智能后视镜</a><br/>
        <a href='/docs/devices/screen-ddp'>后装车机</a>
      </>
    ),
  },
  {
    title: 'HiCar协同设备',
    Svg: require('@site/static/img/undraw_connect1.svg').default,
    description: (
      <>
        <a href='/docs/devices/aromatherapy'>智能香薰机</a><br/>
        <a href='/docs/devices/vision-glass'>智能观影眼镜</a><br/>
      </>
    ),
  },
];

const WebsiteList = [
  {
    title: 'HiCar论坛',
    Svg: require('@site/static/img/undraw_forum.svg').default,
    description: (
      <>
        一个非官方论坛站点<br/>
        为HiCar铁粉和开发者提供交流的角落<br/>
        <a href='https://forum.hicar.cool/' target='_blank'>点击访问HiCar论坛</a>
      </>
    ),
  },
  {
    title: 'HiCar最新消息',
    Svg: require('@site/static/img/undraw_news.svg').default,
    description: (
      <>
        一个微博形式的站点<br/>
        第一时间汇报感知到HiCar最新消息<br/>
        <a href='https://news.hicar.cool/' target='_blank'>点击查看HiCar最新消息</a>
      </>
    ),
  },
  {
    title: '敬请期待',
    Svg: require('@site/static/img/undraw_club.svg').default,
    description: (
      <>
        一个新的HiCar资源站点<br/>
        敬请期待<br/>
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
          <div className={styles.buttons}>
          <Link
            className="button button--secondary "
            to="https://news.hicar.cool/"
            target="_blank">
            一些关于HiCar的最新消息
          </Link>
        </div>
        </div>
        
      </div>
    </section>
    <section className={styles.features}>
      <div className="container">
        <h1>下载手机端HiCar应用</h1>
        <p>以下 APK 仅可安装在已经支持 HiCar 的华为手机上。如果您想下载车机端HiCar，这是不现实的，具体原因可以参考<a href='/docs/vehicle'>HiCar车机版本</a>。</p>
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
        <td>2024.09</td>
        <td><a href="https://hicar.lanzouq.com/iaMDs291tfif" target="_blank">14.2.0.230</a></td>
        <td><a href="https://hicar.lanzouq.com/iN8Qd29w9v3c" target="_blank"><font color="red">14.2.0.235</font></a></td>
        <td></td>
        </tr>
        <tr>
        <td>2024.06~07</td>
        <td><a href="https://hicar.lanzouq.com/i2Uct231ey8d" target="_blank">14.2.0.200</a></td>
        <td><a href="https://hicar.lanzouq.com/idapT2582nxe" target="_blank">14.2.0.205</a></td>
        <td> - </td>
        </tr>
        <tr>
        <td>2024.04~05</td>
        <td><a href="https://hicar.lanzouq.com/icL7E1vegl0j" target="_blank">14.2.0.180</a></td>
        <td><a href="https://hicar.lanzouq.com/is9gh1xiv87e" target="_blank">14.2.0.185</a></td>
        <td> - </td>
        </tr>
        <tr>
        <td>2024.03</td>
        <td><a href="https://hicar.lanzouq.com/idSQI1r0f9xg" target="_blank">14.2.0.171</a></td>
        <td><a href="https://hicar.lanzouq.com/i379I1sx5guj" target="_blank">14.2.0.175</a></td>
        <td> - </td>
        </tr>
        <tr>
        <td>2024.01~02</td>
        <td> - </td>
        <td><a href="https://hicar.lanzouq.com/iSYHB1jqmoud" target="_blank">14.2.0.150</a></td>
        <td> - </td>
        </tr>
        <tr>
        <td>2023.11~12</td>
        <td><a href="https://hicar.lanzouq.com/iE90g1i26ave" target="_blank">14.2.0.146</a><br/><a href="https://hicar.lanzouq.com/ifNnY1fkjcle" target="_blank">14.2.0.132</a></td>
        <td> - </td>
        <td> - </td>
        </tr>
        <tr>
        <td>2023.09~10</td>
        <td><a href="https://hicar.lanzouq.com/i0880192j9gh" target="_blank">14.2.0.115</a></td>
        <td><a href="https://hicar.lanzouq.com/ihTb81db1kna" target="_blank">14.2.0.131</a><br/><a href="https://hicar.lanzouq.com/iyVLx1bh5auf" target="_blank">14.2.0.121</a></td>
        <td> - </td>
        </tr>
        <tr>
        <td>2023.07~08</td>
        <td><a href="https://hicar.lanzouq.com/iauQY13dp9kh" target="_blank">13.2.0.506</a></td>
        <td><a href="https://hicar.lanzouq.com/iTn2g14vrf6f" target="_blank">13.2.0.515</a><br/><a href="https://hicar.lanzouq.com/i5SIJ142yp6d" target="_blank">13.2.0.511</a></td>
        <td> 已取消 </td>
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
      <h1>HiCar如何使用</h1>
      <p>想使用HiCar简单一句话就是：使用支持HiCar的手机连上支持HiCar的车使用支持HiCar的应用。</p>
        <div className="row">
          {StepList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1>HiCar相关设备有哪些</h1>
      <p>通过这些设备可以让不支持HiCar的车也可以用上HiCar，以及在成功连接HiCar后可以使用各类新奇的HiCar协同设备。</p>
        <div className="row">
          {DeviceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1>HiCar.Cool是什么</h1>
      <p>hicar.cool 是 HiCar 非官方站点，由热爱驱动。</p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1>HiCar其他站点</h1>
      <p>一些或许有用或许无用的HiCar站点。</p>
        <div className="row">
          {WebsiteList.map((props, idx) => (
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

