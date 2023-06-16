import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const AppAccessDocsList = [
  {
    title: '音频应用',
    Svg: require('@site/static/img/undraw_audio.svg').default,
    urlName:"开发指南",
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-0000001221752649",
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '地图应用',
    Svg: require('@site/static/img/undraw_map.svg').default,
    urlName:"开发指南",
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/docs-access-0000001111108710",
    description: (
      <>
        非公开，需合作后开放权限。
      </>
    ),
  },
  {
    title: '其它应用',
    Svg: require('@site/static/img/undraw_other.svg').default,
    urlName:"开发指南",
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/docs-access-0000001111108710",
    description: (
      <>
        非公开，需合作后开放权限。
      </>
    ),
  },

 
];

const DevicesAccessDocsList = [
  {
    title: 'UX设计规范',
    Svg: require('@site/static/img/undraw_design.svg').default,
    urlName:"设计指南",
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-0000001176171086",
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '集成开发',
    Svg: require('@site/static/img/undraw_develop.svg').default,
    urlName:"开发指南（Android）",
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-android-0000001176330960",
    description: (
      <>
        <br/><a href='https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-linux-0000001176490888' target="_blank">开发指南（Linux）</a>
      </>
    ),
  },
  {
    title: '认证测试',
    Svg: require('@site/static/img/undraw_test.svg').default,
    urlName:"认证指南",
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-0000001589685257",
    description: (
      <>
        
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

export default function DevpageFeatures() {
  return (
    <section>
    <section className={styles.features}>
      <div className="container">
        <div className='text--center'> 
          <hr />
          <h2>应用接入HiCar</h2>
          <p>将手机应用接入HiCar，在车机屏幕上使用。</p>
          <p><a href='https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/app-process-0000001056059155' target="_blank">应用接入流程</a></p>
        </div>
        <div className="row">
          {AppAccessDocsList.map((props, idx) => (
            <FeatureURL key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.features}>
    <div className="container">
      <div className='text--center'> 
        <hr />
        <h2>设备接入HiCar</h2>
        <p>将HiCar集成进车载设备，例如车机、车载智慧屏、盒子等。</p>
        <p><a href='https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/device-process-0000001052717625' target="_blank">设备接入流程</a></p>
      </div>
      <div className="row">
        {DevicesAccessDocsList.map((props, idx) => (
          <FeatureURL key={idx} {...props} />
        ))}
      </div>
    </div>
    </section>

    </section>
    
  );
}
