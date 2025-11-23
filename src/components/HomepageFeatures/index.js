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
        请访问<a href='/docs/intro'>经典HiCar指南</a>或<a href='/docs/next-intro'>Next HiCar指南</a>直接查看<br/>
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
        <a href='/update'>点击了解本站更新说明</a>
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
        具体说明请参见指南中的“检查车辆”章节
        {/* 具体说明请参见<a href='/docs/check/car'>检查车辆</a> */}
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
        具体说明请参见指南中的“检查手机”章节
        {/* 具体说明请参见<a href='/docs/check/phone'>检查手机</a> */}
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
        具体连接操作请参见指南中的“连接”章节
        {/* 具体连接操作请参见<a href='/docs/guides/connect/wireless'>连接</a> */}
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


const BoxList = [
  {
    title: '车连易',
    Svg: require('@site/static/img/device/box-carlinkit.svg').default,
    description: (
      <>
        <a href='https://hicar.club/sites/322.html'>京东店铺</a><br/>
        <br />
        <p>直接把车型报给客服</p>
      </>
    ),
  },
  {
    title: '君用',
    Svg: require('@site/static/img/device/box-junyong.svg').default,
    description: (
      <>
        <a href='https://hicar.club/sites/321.html'>京东店铺</a><br/>
        <br />
        <p>直接把车型报给客服</p>
      </>
    ),
  },
  {
    title: '喵驾',
    Svg: require('@site/static/img/device/box-miudrive.svg').default,
    description: (
      <>
        <a href='https://hicar.club/sites/323.html'>京东店铺</a><br/>
        <br />
        <p>直接把车型报给客服</p>
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
        一个简单形式的站点<br/>
        第一时间汇报感知到HiCar最新消息<br/>
        <a href='https://news.hicar.cool/' target='_blank'>点击查看HiCar最新消息</a>
      </>
    ),
  },
  {
    title: 'HiCar Club',
    Svg: require('@site/static/img/undraw_club.svg').default,
    description: (
      <>
        一个新的HiCar资源站点<br/>
        网罗全网所有关于HiCar的资源<br/>
        <a href='https://hicar.club/' target='_blank'>点击查看HiCar资源</a>
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
          <p>本站点为HiCar粉丝站点，提供HiCar相关的指南、设备信息、APK下载等内容。</p>
          <p>欢迎加入HiCar的大家庭，一起享受驾驶的乐趣。</p>
          {/* <div className={styles.buttons}>
            <Link
              className="button button--secondary "
              to="https://news.hicar.cool/"
              target="_blank">
              一些关于HiCar的最新消息
            </Link>
          </div> */}
        </div>
        
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1>HiCar是什么</h1>
      <p>HUAWEI HiCar是华为打造的人-车-家全场景智慧互联解决方案，为您提供更便捷、更智能、更安全的出行服务新体⁠⁠验。</p>
      <p>按照手机搭载的HarmonyOS系统版本区分，HiCar可以区分为经典HiCar和Next HiCar。</p>
      <br/>
      <div className={styles.instructionsGrid}>
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>01</div>
            <h3>经典 HiCar</h3>
            <ul>
              <li>支持HarmonyOS 4.X及以下系统</li>
              <li>手机上的HiCar应用是APK格式</li>
            </ul>

            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                经典 HiCar 快速入门
              </Link>
            </div>
          </div>
          
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>02</div>
            <h3>Next HiCar</h3>
            <ul>
              <li>支持HarmonyOS 5及以上系统</li>
              <li>手机上的HiCar应用是HAP格式</li>
            </ul>

            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/next-intro">
                Next HiCar 快速入门
              </Link>
            </div>
          </div> 
        </div>

      
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1>HiCar如何使用</h1>
      <p>想使用HiCar简单一句话就是：使用支持HiCar的手机连上支持HiCar的车使用支持HiCar的应用。</p>

      <div className="text--center padding-horiz--md">
        <video 
        controls 
        width="800"
        //poster="/img/nexthicar.jpg" // 可选：视频封面
        >
          
        <source src="https://consumer.huawei.com/content/dam/huawei-cbg-site/cn/mkt/pdp/phones/hicar/250115/huawei-hicar-theme.mp4" type="video/mp4" />
        您的浏览器不支持视频播放。
        </video>
      </div>

        <div className="row">
          {StepList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    {/* <section className={styles.features}>
      <div className="container">
        <h1>下载HiCar应用</h1>
        <p>获取最新版本HiCar应用。</p>
        <br/>
        
        <div className="text--center padding-horiz--md">
          <div className={styles.buttons}>
            <Link
              className={styles.heroBadge}
              to="/download"
              >
              立即下载 
            </Link>
          </div>
        </div>  
        
      </div>
    </section> */}

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
      <h1>HiCar转换盒推荐</h1>
      <p>推荐一些口碑还不错的转换盒，可以让原本不支持HiCar的车也可以用上HiCar。</p>
        <div className="row">
          {BoxList.map((props, idx) => (
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
          <p>支持方式：如果本站对您有所帮助，您可以通过以下方式请站长喝杯蜜雪冰城<a href='https://afdian.com/a/youniqiao' target='_blank'> 爱发电</a>。</p>
          <p></p>
        </div>
      </div>
    </section>
    </section>
  );
}

