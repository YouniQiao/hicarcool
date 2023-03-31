import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const BoxList = [
  {
    title: '喵驾（CarPlay转HiCar）',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '君用（CarPlay转HiCar）',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: '君用（CarLife转HiCar）',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: '车连易（CarPlay转HiCar）',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '车连易（CarLife转HiCar）',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '忠诚卫士（CarLife转HiCar）',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];


const ExtraDeviceSimpleList = [
  {
    title: '盯盯拍车载智慧屏',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '盯盯拍智慧后视镜',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
];

const ExtraDeviceComplexList = [
  {
    title: '盯盯拍智慧中控屏',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
];

const HiCarConnectDeviceList = [
  {
    title: '车载香薰',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: '智能儿童安全座椅',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'HUAWEI Vision Glass 智能观影眼镜',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    jdurl:"https://www.jd.com",
    tburl:"https://www.taobao.com",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
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

function FeatureURL({Svg, title, jdurl, tburl, description}) {
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <a href={jdurl} target="_blank">京东链接</a> 
        <br />
        <a href={tburl} target="_blank">淘宝链接</a> 
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
