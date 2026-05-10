import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const BoxList = [
  {
    title: translate({message: '喵驾（CarPlay/CarLife转HiCar）'}),
    Svg: require('@site/static/img/device/box-miudrive.svg').default,
    urlName: translate({message: '京东链接'}),
    url:"https://hicar.club/sites/323.html",
    description: (
      <>
        <Translate>喵驾的HiCar盒子。</Translate>
      </>
    ),
  },
  {
    title: translate({message: '车连易（CarPlay/CarLife转HiCar）'}),
    Svg: require('@site/static/img/device/box-carlinkit.svg').default,
    urlName: translate({message: '京东链接'}),
    url:"https://hicar.club/sites/322.html",
    description: (
      <>
        <Translate>车连易的HiCar盒子。</Translate>
      </>
    ),
  },
  {
    title: translate({message: '君用（CarPlay/CarLife转HiCar）'}),
    Svg: require('@site/static/img/device/box-junyong.svg').default,
    urlName: translate({message: '京东链接'}),
    url:"https://hicar.club/sites/321.html",
    description: (
      <>
        <Translate>君用的HiCar盒子。</Translate>
      </>
    ),
  },
];


const ExtraDeviceSimpleList = [
  {
    title: translate({message: '盯盯拍车载智慧屏'}),
    Svg: require('@site/static/img/device/smart-screen-ddp.svg').default,
    urlName: translate({message: '已基本停售，可自行搜索'}),
    url:"https://jd.com",
    description: (
      <>
        <Translate>通过粘贴的方式安装在中控台，无线连接使用HiCar，声音可以通过智慧屏发出，也可以通过车载音响发出（需手机连接车载蓝牙）。</Translate>
      </>
    ),
  },
  {
    title: translate({message: '盯盯拍智慧后视镜'}),
    Svg: require('@site/static/img/device/car-mirror-ddp.svg').default,
    urlName: translate({message: '已基本停售，可自行搜索'}),
    url:"https://jd.com",
    description: (
      <>
        <Translate>通过捆绑的方式安装在原车后视镜，无线连接使用HiCar，声音可以通过后视镜发出，也可以通过车载音响发出（需手机连接车载蓝牙）。</Translate>
      </>
    ),
  },
];

const ExtraDeviceComplexList = [
  {
    title: translate({message: '盯盯拍智慧中控屏'}),
    Svg: require('@site/static/img/device/car-screen-ddp.svg').default,
    urlName: translate({message: '京东链接'}),
    url:"https://item.jd.com/10047157979303.html",
    description: (
      <>
        <Translate>盯盯拍推出的智慧中控屏，感觉比较通用，没有实际使用过，具体情况需要咨询客服。</Translate>
      </>
    ),
  },
];

const HiCarConnectDeviceList = [
  {
    title: translate({message: '香百年智能车载香薰'}),
    Svg: require('@site/static/img/device/aromatherapy-carori.svg').default,
    urlName: translate({message: '京东链接'}),
    url:"https://u.jd.com/sqGinJa",
    description: (
      <>
        <Translate>车载香薰需绑定到智慧生活App，连接HiCar后，在HiCar界面显示香薰卡片，可对香薰开关、浓度、开启模式等进行控制。如果要买，建议选择元气风铃香味。<br/><a href='/docs/devices/aromatherapy-hicar'>使用说明</a>。</Translate>
      </>
    ),
  },
  {
    title: translate({message: '360智能儿童安全座椅'}),
    Svg: require('@site/static/img/device/safety-seat-360.svg').default,
    urlName: translate({message: 'Vmall链接'}),
    url:"https://www.vmall.com/product/10086090405144.html#5004010000701",
    description: (
      <>
        <Translate>儿童安全座椅需绑定到智慧生活App，连接HiCar后，在HiCar界面显示儿童安全座椅卡片，可对座椅开关、通风、播放音乐等进行控制。目前HiCar中使用可能不太稳定。</Translate>
      </>
    ),
  },
  {
    title: translate({message: 'HUAWEI Vision Glass 智能观影眼镜'}),
    Svg: require('@site/static/img/device/vision-glass-hw.svg').default,
    urlName: translate({message: '京东链接'}),
    url:"https://u.jd.com/su8oqWf",
    description: (
      <>
        <Translate>有线连接手机使用，如果此时手机同时连接了HiCar，声音可以通过车内的音响发出，车内观影效果如同影院。</Translate>
      </>
    ),
  },
];

function FeatureURL({Svg, title, urlName, url, description}) {
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <a href={url} target="_blank">{urlName}</a> 
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function BoxpageFeatures() {
  return (
    <section>
    <section className={styles.features}>
      <div className="container">
        <div className='text--center'> 
          <hr />
          <h2><Translate>转换盒</Translate></h2>
          <p><Translate>适用于原车有CarPlay、CarLife的车型</Translate></p>
        </div>
        <div className="row">
          {BoxList.map((props, idx) => (
            <FeatureURL key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
    <div className="container">
      <div className='text--center'> 
        <hr />
        <h2><Translate>后装简易屏幕（可自行安装）</Translate></h2>
        <p><Translate>适用于原车无中控屏幕或不计划更换中控的车型</Translate></p>
      </div>
      <div className="row">
        {ExtraDeviceSimpleList.map((props, idx) => (
          <FeatureURL key={idx} {...props} />
        ))}
      </div>
    </div>
    </section>

    <section className={styles.features}>
    <div className="container">
      <div className='text--center'> 
        <hr />
        <h2><Translate>后装中控车机（需专业安装）</Translate></h2>
        <p><Translate>适用于计划更换中控车机的车型</Translate></p>
      </div>
      <div className="row">
        {ExtraDeviceComplexList.map((props, idx) => (
          <FeatureURL key={idx} {...props} />
        ))}
      </div>
    </div>
    </section>

    {/* <section className={styles.features}>
    <div className="container">
      <div className='text--center'> 
        <hr />
        <h2><Translate>HiCar协同设备</Translate></h2>
        <p><Translate>可以与HiCar一同使用的新奇玩意</Translate></p>
      </div>
      <div className="row">
        {HiCarConnectDeviceList.map((props, idx) => (
          <FeatureURL key={idx} {...props} />
        ))}
      </div>
    </div>
    </section> */}

    </section>
    
  );
}
