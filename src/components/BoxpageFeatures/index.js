import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const BoxList = [
  {
    title: '喵驾（CarPlay/CarLife转HiCar）',
    Svg: require('@site/static/img/device/box-miudrive.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/s8G0ywz",
    description: (
      <>
        喵驾的HiCar盒子。
      </>
    ),
  },
  {
    title: '车连易（CarPlay/CarLife转HiCar）',
    Svg: require('@site/static/img/device/box-carlinkit.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/suGj1Ec",
    description: (
      <>
        车连易的HiCar盒子。
      </>
    ),
  },
  {
    title: '车连易（Android系统车机）',
    Svg: require('@site/static/img/device/box-carlinkit-android.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/qQvRj9M",
    description: (
      <>
        车连易适用于Android车机的盒子（需支持自行安装软件）。也就是可以在平板上使用HiCar的盒子。<br/><a href='/docs/devices/box-hicar-pad'>使用说明</a>。
      </>
    ),
  },
  {
    title: '君用（CarPlay/CarLife转HiCar）',
    Svg: require('@site/static/img/device/box-junyong.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/qqvRkeM",
    description: (
      <>
        君用的HiCar盒子。
      </>
    ),
  },

 
];


const ExtraDeviceSimpleList = [
  {
    title: '盯盯拍车载智慧屏',
    Svg: require('@site/static/img/device/smart-screen-ddp.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/sQGy7oO",
    description: (
      <>
        通过粘贴的方式安装在中控台，无线连接使用HiCar，声音可以通过智慧屏发出，也可以通过车载音响发出（需手机连接车载蓝牙）。
      </>
    ),
  },
  {
    title: '盯盯拍智慧后视镜',
    Svg: require('@site/static/img/device/car-mirror-ddp.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/siG3MLq",
    description: (
      <>
        通过捆绑的方式安装在原车后视镜，无线连接使用HiCar，声音可以通过后视镜发出，也可以通过车载音响发出（需手机连接车载蓝牙）。
      </>
    ),
  },
];

const ExtraDeviceComplexList = [
  {
    title: '盯盯拍智慧中控屏',
    Svg: require('@site/static/img/device/car-screen-ddp.svg').default,
    urlName:"京东链接",
    url:"https://item.jd.com/10047157979303.html",
    description: (
      <>
        盯盯拍推出的智慧中控屏，感觉比较通用，没有实际使用过，具体情况需要咨询客服。
      </>
    ),
  },
];

const HiCarConnectDeviceList = [
  {
    title: '香百年智能车载香薰',
    Svg: require('@site/static/img/device/aromatherapy-carori.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/sqGinJa",
    description: (
      <>
        车载香薰需绑定到智慧生活App，连接HiCar后，在HiCar界面显示香薰卡片，可对香薰开关、浓度、开启模式等进行控制。如果要买，建议选择元气风铃香味。<br/><a href='/docs/devices/aromatherapy-hicar'>使用说明</a>。
      </>
    ),
  },
  {
    title: '360智能儿童安全座椅',
    Svg: require('@site/static/img/device/safety-seat-360.svg').default,
    urlName:"Vmall链接",
    url:"https://www.vmall.com/product/10086090405144.html#5004010000701",
    description: (
      <>
        儿童安全座椅需绑定到智慧生活App，连接HiCar后，在HiCar界面显示儿童安全座椅卡片，可对座椅开关、通风、播放音乐等进行控制。目前HiCar中使用可能不太稳定。
      </>
    ),
  },
  {
    title: 'HUAWEI Vision Glass 智能观影眼镜',
    Svg: require('@site/static/img/device/vision-glass-hw.svg').default,
    urlName:"京东链接",
    url:"https://u.jd.com/su8oqWf",
    description: (
      <>
        有线连接手机使用，如果此时手机同时连接了HiCar，声音可以通过车内的音响发出，车内观影效果如同影院。
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
          <h2>转换盒</h2>
          <p>适用于原车有CarPlay、CarLife的车型</p>
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
        <h2>后装简易屏幕（可自行安装）</h2>
        <p>适用于原车无中控屏幕或不计划更换中控的车型</p>
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
        <h2>后装中控车机（需专业安装）</h2>
        <p>适用于计划更换中控车机的车型</p>
      </div>
      <div className="row">
        {ExtraDeviceComplexList.map((props, idx) => (
          <FeatureURL key={idx} {...props} />
        ))}
      </div>
    </div>
    </section>

    <section className={styles.features}>
    <div className="container">
      <div className='text--center'> 
        <hr />
        <h2>HiCar协同设备</h2>
        <p>可以与HiCar一同使用的新奇玩意</p>
      </div>
      <div className="row">
        {HiCarConnectDeviceList.map((props, idx) => (
          <FeatureURL key={idx} {...props} />
        ))}
      </div>
    </div>
    </section>

    </section>
    
  );
}
