import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: translate({message: 'HUAWEI HiCar 文档', description: 'Homepage feature: HiCar docs title'}),
    Svg: require('@site/static/img/undraw_tutorial.svg').default,
    description: (
      <>
        <Translate>HUAWEI HiCar具体是什么</Translate><br/>
        <Translate>HiCar支持的手机/应用/车型</Translate><br/>
        <Translate>HiCar每个功能详细指导说明</Translate><br/>
        <Translate>请访问</Translate><a href='/docs/intro'><Translate>经典HiCar指南</Translate></a><Translate>或</Translate><a href='/docs/next-intro'><Translate>Next HiCar指南</Translate></a><Translate>直接查看</Translate><br/>
        <Translate>（手机访问本站时请从网站左上角菜单进入）</Translate>
      </>
    ),
  },
  {
    title: translate({message: 'HUAWEI HiCar 设备', description: 'Homepage feature: HiCar devices title'}),
    Svg: require('@site/static/img/undraw_device.svg').default,
    description: (
      <>
        <Translate>HiCar转换盒、车载智慧屏</Translate><br/>
        <Translate>智能后视镜、后装车机</Translate><br/>
        <Translate>车载香薰机、VR眼镜、儿童安全座椅</Translate><br/>
        <Translate>HiCar周边设备一网打尽</Translate><br/>
        <a href='/docs/device'><Translate>详情请点击HiCar周边设备</Translate></a>
      </>
    ),
  },
  {
    title: translate({message: '本站更新说明', description: 'Homepage feature: update notes title'}),
    Svg: require('@site/static/img/undraw_update.svg').default,
    description: (
      <>
        <Translate>本站并非HiCar官方站点</Translate><br/>
        <Translate>由HiCar粉丝搭建并维护</Translate><br/>
        <Translate>随HiCar功能演进持续更新</Translate><br/>
        <a href='/update'><Translate>点击了解本站更新说明</Translate></a>
      </>
    ),
  },
];


const StepList = [
  {
    title: translate({message: '检查车辆', description: 'Homepage step: check vehicle'}),
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        <Translate>使用前确认您的车支持HiCar</Translate><br/>
        <Translate>或者通过转换盒或其他方式支持HiCar</Translate><br/>
        <Translate>具体说明请参见指南中的“检查车辆”章节</Translate>
        {/* <Translate>具体说明请参见</Translate><a href='/docs/check/car'><Translate>检查车辆</Translate></a> */}
      </>
    ),
  },
  {
    title: translate({message: '检查手机', description: 'Homepage step: check phone'}),
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        <Translate>只有部分华为手机以及荣耀手机支持HiCar</Translate><br/>
        <Translate>其他品牌手机并不支持HiCar</Translate><br/>
        <Translate>具体说明请参见指南中的“检查手机”章节</Translate>
        {/* <Translate>具体说明请参见</Translate><a href='/docs/check/phone'><Translate>检查手机</Translate></a> */}
      </>
    ),
  },
  {
    title: translate({message: '开始连接', description: 'Homepage step: start connection'}),
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        <Translate>当车辆和手机都支持HiCar时</Translate><br/>
        <Translate>那就开始连接吧</Translate><br/>
        <Translate>具体连接操作请参见指南中的“连接”章节</Translate>
        {/* <Translate>具体连接操作请参见</Translate><a href='/docs/guides/connect/wireless'><Translate>连接</Translate></a> */}
      </>
    ),
  },
];

const DeviceList = [
  {
    title: translate({message: '盒子设备', description: 'Homepage device category: adapter boxes'}),
    Svg: require('@site/static/img/undraw_dongle1.svg').default,
    description: (
      <>
        <a href='/docs/devices/carplay'><Translate>CarPlay转HiCar的盒子</Translate></a><br/>
        <a href='/docs/devices/carlife'><Translate>CarLife转HiCar的盒子</Translate></a><br/>
        <a href='/docs/devices/android'><Translate>安卓车机盒子</Translate></a>
      </>
    ),
  },
  {
    title: translate({message: '车载智慧屏/后视镜/后装车机', description: 'Homepage device category: screens/mirrors/head units'}),
    Svg: require('@site/static/img/undraw_screen.svg').default,
    description: (
      <>
        <a href='/docs/devices/smart-screen'><Translate>车载智慧屏</Translate></a><br/>
        <a href='/docs/devices/smart-mirror'><Translate>智能后视镜</Translate></a><br/>
        <a href='/docs/devices/screen-ddp'><Translate>后装车机</Translate></a>
      </>
    ),
  },
  {
    title: translate({message: 'HiCar协同设备', description: 'Homepage device category: collaborative devices'}),
    Svg: require('@site/static/img/undraw_connect1.svg').default,
    description: (
      <>
        <a href='/docs/devices/aromatherapy'><Translate>智能香薰机</Translate></a><br/>
        <a href='/docs/devices/vision-glass'><Translate>智能观影眼镜</Translate></a><br/>
      </>
    ),
  },
];


const BoxList = [
  {
    title: translate({message: '车连易', description: 'Homepage box brand: Carlinkit'}),
    Svg: require('@site/static/img/device/box-carlinkit.svg').default,
    description: (
      <>
        <a href='https://hicar.club/sites/322.html'><Translate>京东店铺</Translate></a><br/>
        <br />
        <p><Translate>直接把车型报给客服</Translate></p>
      </>
    ),
  },
  {
    title: translate({message: '君用', description: 'Homepage box brand: JunYong'}),
    Svg: require('@site/static/img/device/box-junyong.svg').default,
    description: (
      <>
        <a href='https://hicar.club/sites/321.html'><Translate>京东店铺</Translate></a><br/>
        <br />
        <p><Translate>直接把车型报给客服</Translate></p>
      </>
    ),
  },
  {
    title: translate({message: '喵驾', description: 'Homepage box brand: MiaoDrive'}),
    Svg: require('@site/static/img/device/box-miudrive.svg').default,
    description: (
      <>
        <a href='https://hicar.club/sites/323.html'><Translate>京东店铺</Translate></a><br/>
        <br />
        <p><Translate>直接把车型报给客服</Translate></p>
      </>
    ),
  },
];

const WebsiteList = [
  {
    title: translate({message: 'HiCar论坛', description: 'Homepage website link: forum'}),
    Svg: require('@site/static/img/undraw_forum.svg').default,
    description: (
      <>
        <Translate>一个非官方论坛站点</Translate><br/>
        <Translate>为HiCar铁粉和开发者提供交流的角落</Translate><br/>
        <a href='https://forum.hicar.cool/' target='_blank'><Translate>点击访问HiCar论坛</Translate></a>
      </>
    ),
  },
  {
    title: translate({message: 'HiCar最新消息', description: 'Homepage website link: latest news'}),
    Svg: require('@site/static/img/undraw_news.svg').default,
    description: (
      <>
        <Translate>一个简单形式的站点</Translate><br/>
        <Translate>第一时间汇报感知到HiCar最新消息</Translate><br/>
        <a href='https://news.hicar.cool/' target='_blank'><Translate>点击查看HiCar最新消息</Translate></a>
      </>
    ),
  },
  {
    title: translate({message: 'HiCar Club', description: 'Homepage website link: HiCar Club'}),
    Svg: require('@site/static/img/undraw_club.svg').default,
    description: (
      <>
        <Translate>一个新的HiCar资源站点</Translate><br/>
        <Translate>网罗全网所有关于HiCar的资源</Translate><br/>
        <a href='https://hicar.club/' target='_blank'><Translate>点击查看HiCar资源</Translate></a>
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
          <p><Translate>本站点为HiCar粉丝站点，提供HiCar相关的指南、设备信息、APK下载等内容。</Translate></p>
          <p><Translate>欢迎加入HiCar的大家庭，一起享受驾驶的乐趣。</Translate></p>
          {/* <div className={styles.buttons}>
            <Link
              className="button button--secondary "
              to="https://news.hicar.cool/"
              target="_blank">
              <Translate>一些关于HiCar的最新消息</Translate>
            </Link>
          </div> */}
        </div>
        
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1><Translate>HiCar是什么</Translate></h1>
      <p><Translate>HUAWEI HiCar是华为打造的人-车-家全场景智慧互联解决方案，为您提供更便捷、更智能、更安全的出行服务新体验。</Translate></p>
      <p><Translate>按照手机搭载的HarmonyOS系统版本区分，HiCar可以区分为经典HiCar和Next HiCar。</Translate></p>
      <br/>
      <div className={styles.instructionsGrid}>
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>01</div>
            <h3><Translate>经典 HiCar</Translate></h3>
            <ul>
              <li><Translate>支持HarmonyOS 4.X及以下系统</Translate></li>
              <li><Translate>手机上的HiCar应用是APK格式</Translate></li>
            </ul>

            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                <Translate>经典 HiCar 快速入门</Translate>
              </Link>
            </div>
          </div>
          
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>02</div>
            <h3><Translate>Next HiCar</Translate></h3>
            <ul>
              <li><Translate>支持HarmonyOS 5及以上系统</Translate></li>
              <li><Translate>手机上的HiCar应用是HAP格式</Translate></li>
            </ul>

            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/next-intro">
                <Translate>Next HiCar 快速入门</Translate>
              </Link>
            </div>
          </div> 
        </div>

      
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1><Translate>HiCar如何使用</Translate></h1>
      <p><Translate>想使用HiCar简单一句话就是：使用支持HiCar的手机连上支持HiCar的车使用支持HiCar的应用。</Translate></p>

      <div className="text--center padding-horiz--md">
        <video 
        controls 
        width="800"
        //poster="/img/nexthicar.jpg" // 可选：视频封面
        >
          
        <source src="https://consumer.huawei.com/content/dam/huawei-cbg-site/cn/mkt/pdp/phones/hicar/250115/huawei-hicar-theme.mp4" type="video/mp4" />
        <Translate>您的浏览器不支持视频播放。</Translate>
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
        <h1><Translate>下载HiCar应用</Translate></h1>
        <p><Translate>获取最新版本HiCar应用。</Translate></p>
        <br/>
        
        <div className="text--center padding-horiz--md">
          <div className={styles.buttons}>
            <Link
              className={styles.heroBadge}
              to="/download"
              >
              <Translate>立即下载</Translate>
            </Link>
          </div>
        </div>  
        
      </div>
    </section> */}

    <section className={styles.features}>
      <div className="container">
      <h1><Translate>HiCar相关设备有哪些</Translate></h1>
      <p><Translate>通过这些设备可以让不支持HiCar的车也可以用上HiCar，以及在成功连接HiCar后可以使用各类新奇的HiCar协同设备。</Translate></p>
        <div className="row">
          {DeviceList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1><Translate>HiCar转换盒推荐</Translate></h1>
      <p><Translate>推荐一些口碑还不错的转换盒，可以让原本不支持HiCar的车也可以用上HiCar。</Translate></p>
        <div className="row">
          {BoxList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1><Translate>HiCar.Cool是什么</Translate></h1>
      <p><Translate>hicar.cool 是 HiCar 非官方站点，由热爱驱动。</Translate></p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
      <div className="container">
      <h1><Translate>HiCar其他站点</Translate></h1>
      <p><Translate>一些或许有用或许无用的HiCar站点。</Translate></p>
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
          <p><Translate>本站所有内容在Github开源，欢迎各位有能力有意愿的HiCar粉丝共同参与本站内容建设。</Translate></p>
          <p><Translate>参与方式：在文档页面左下角"编辑此页"跳转到Github提交PR。</Translate></p>
          <p><Translate>支持方式：如果本站对您有所帮助，您可以通过以下方式请站长喝杯蜜雪冰城</Translate><a href='https://afdian.com/a/youniqiao' target='_blank'><Translate> 爱发电</Translate></a><Translate>。</Translate></p>
          <p></p>
        </div>
      </div>
    </section>
    </section>
  );
}
