import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

const AppAccessDocsList = [
  {
    title: translate({message: '音频应用', description: 'App access doc title: Audio apps'}),
    Svg: require('@site/static/img/undraw_audio.svg').default,
    urlName:translate({message: '开发指南', description: 'Link text: Development Guide'}),
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-0000001221752649",
    description: (
      <>
        
      </>
    ),
  },
  {
    title: translate({message: '地图应用', description: 'App access doc title: Map apps'}),
    Svg: require('@site/static/img/undraw_map.svg').default,
    urlName:translate({message: '开发指南', description: 'Link text: Development Guide'}),
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/docs-access-0000001111108710",
    description: (
      <>
        <Translate>非公开，需合作后开放权限。</Translate>
      </>
    ),
  },
  {
    title: translate({message: '其它应用', description: 'App access doc title: Other apps'}),
    Svg: require('@site/static/img/undraw_other.svg').default,
    urlName:translate({message: '开发指南', description: 'Link text: Development Guide'}),
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/docs-access-0000001111108710",
    description: (
      <>
        <Translate>非公开，需合作后开放权限。</Translate>
      </>
    ),
  },

 
];

const DevicesAccessDocsList = [
  {
    title: translate({message: 'UX设计规范', description: 'Device access doc title: UX Design Guide'}),
    Svg: require('@site/static/img/undraw_design.svg').default,
    urlName:translate({message: '设计指南', description: 'Link text: Design Guide'}),
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-0000001176171086",
    description: (
      <>
        
      </>
    ),
  },
  {
    title: translate({message: '集成开发', description: 'Device access doc title: Integration Development'}),
    Svg: require('@site/static/img/undraw_develop.svg').default,
    urlName:translate({message: '开发指南（Android）', description: 'Link text: Development Guide (Android)'}),
    url:"https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-android-0000001176330960",
    description: (
      <>
        <br/><a href='https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/release-note-linux-0000001176490888' target="_blank"><Translate>开发指南（Linux）</Translate></a>
      </>
    ),
  },
  {
    title: translate({message: '认证测试', description: 'Device access doc title: Certification Test'}),
    Svg: require('@site/static/img/undraw_test.svg').default,
    urlName:translate({message: '认证指南', description: 'Link text: Certification Guide'}),
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
          <h2><Translate>应用接入HiCar</Translate></h2>
          <p><Translate>将手机应用接入HiCar，在车机屏幕上使用。</Translate></p>
          <p><a href='https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/app-process-0000001056059155' target="_blank"><Translate>应用接入流程</Translate></a></p>
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
        <h2><Translate>设备接入HiCar</Translate></h2>
        <p><Translate>将HiCar集成进车载设备，例如车机、车载智慧屏、盒子等。</Translate></p>
        <p><a href='https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/device-process-0000001052717625' target="_blank"><Translate>设备接入流程</Translate></a></p>
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
