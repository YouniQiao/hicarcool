import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './hicar-download.module.css';

export default function HiCarDownload() {
  const {siteConfig} = useDocusaurusContext();

  
  return (
    <Layout
      title={`HiCar下载 - ${siteConfig.title}`}
      description="下载华为HiCar智能车载互联系统，体验智慧出行">
      
      {/* Hero区域 */}
      <div className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              HUAWEI <span className={styles.highlight}>HiCar</span>
            </h1>
            <p className={styles.heroSubtitle}>
              智能车载互联系统
            </p>
            <div className={styles.heroBadge}>
              <span>最新版本 14.2.0.355</span> 
            </div>
             &nbsp;&nbsp;&nbsp;
            <div className={styles.heroBadge}>
              <span>更新日期：2025.11.07</span> 
            </div>
          </div> 
        </div> 
      </div>

      {/* 表格下载区域 */}
      <div className={styles.downloadSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>下载<span className={styles.highlight}>手机端HiCar</span>应用</h2>
            <p className={styles.sectionSubtitle}>当前仅支持下载经典HiCar应用。</p>
            <p className={styles.sectionSubtitle}>Next HiCar跟随HarmonyOS系统升级，无单独应用。</p>
            <p className={styles.sectionSubtitle}>经典HiCar仅支持部分华为手机，不支持小米、OPPO、VIVO等</p>
          </div>
          
          <div className={styles.tableContainer}>
            <div className="container">
              <p>以下 APK 仅可安装在已经支持 HiCar 的华为手机上（不包括HarmonyOS 5及以上版本的HarmonyOS NEXT系统）。</p>
              <p>如果需要密码：<font color="red"><b>hicar</b></font></p>
              <table>
              <thead><tr><th>Updated</th><th>众测版本</th><th>正式版本</th><th>紧跟正式版本的众测版本</th></tr></thead>
              <tbody>
              <tr>
              <td>说明</td>
              <td>新特性的首发测试版本。通过会员中心体验官下载。</td>
              <td>新特性的正式商用版本，会与众测版本有些细微的差别。通过应用市场下载。</td>
              <td>在正式版本之上额外开放花瓣地图以及微信投屏的版本。通过会员中心体验官下载。<br/>注意：23年7月已取消该类型版本</td>
              </tr>
              <tr>
              <td>2025.09~11</td>
              <td><a href="https://hicar.lanzouq.com/iZrdH39p9vud" target="_blank">14.2.0.350</a></td>
              <td><a href="https://hicar.lanzouq.com/ic51f3azga4j" target="_blank"><font color="red">14.2.0.355</font></a></td>
              <td> - </td>
              </tr>
              <tr>
              <td>2025.08</td>
              <td><a href="https://hicar.lanzouq.com/ifVPY33kb0zi" target="_blank">14.2.0.335</a><br/><a href="https://hicar.lanzouq.com/ihp4R32rn83c" target="_blank">14.2.0.330</a></td>
              <td><a href="https://hicar.lanzouq.com/i1EFJ35pkldi" target="_blank">14.2.0.340</a></td>
              <td> - </td>
              </tr>
              <tr>
              <td>2025.03~07</td>
              <td><a href="https://hicar.lanzouq.com/i6uEO2wz9bbg" target="_blank">14.2.0.320</a><br/><a href="https://hicar.lanzouq.com/i3MXw2tw0svi" target="_blank">14.2.0.310</a></td>
              <td><a href="https://hicar.lanzouq.com/iFVzL2zhiluj" target="_blank">14.2.0.325</a></td>
              <td> - </td>
              </tr>
              <tr>
              <td>2025.01~02</td>
              <td><a href="https://hicar.lanzouq.com/ibzuK2k8nrmd" target="_blank">14.2.0.295</a></td>
              <td><a href="https://hicar.lanzouq.com/i2yHV2n6v90h" target="_blank">14.2.0.300</a></td>
              <td> - </td>
              </tr>
              <tr>
              <td>2024.10～11</td>
              <td><a href="https://hicar.lanzouq.com/iLHOq2cv18ej" target="_blank">14.2.0.245</a></td>
              <td><a href="https://hicar.lanzouq.com/isdn22edsbva" target="_blank">14.2.0.255</a></td>
              <td> - </td>
              </tr>
              <tr>
              <td>2024.09</td>
              <td><a href="https://hicar.lanzouq.com/iaMDs291tfif" target="_blank">14.2.0.230</a></td>
              <td><a href="https://hicar.lanzouq.com/iN8Qd29w9v3c" target="_blank">14.2.0.235</a></td>
              <td> - </td>
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
          </div>
        </div>
      </div>

      <div className={styles.instructionsSection}>
        <div className="container">
          <div className={styles.instructionsContent}>
            <h2 className={styles.instructionsTitle}>下载<span className={styles.highlight}>车机端HiCar</span>应用</h2>
            
            
            
            <div className={styles.supportInfo}>
              <h3>说明</h3>
              <p>
                如果您想下载车机端HiCar，这是不现实的，具体原因可以参考<a href='/docs/vehicle' className={styles.supportLink}>HiCar车机版本</a>。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}