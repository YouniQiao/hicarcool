---
last_update:
  date: 2023-04-28
  author: 油腻樵夫
---

# 在平板上使用HiCar
目前市场上有一种让原车支持HiCar的特殊盒子，它不通过CarPlay或者CarLife转接的方式实现连接HiCar，而是依靠在车机上安装一款软件实现连接HiCar。它对车机的要求就是Android系统并且支持自行安装软件。那么泛化一下，也就是任何运行着Android系统并且支持安装应用的设备，都可以运行HiCar，比如Android平板、Android手机、Android电视等。

## 使用场景

* 原始场景：不支持CarPlay/CarLife的可自行安装软件的Android车机，仍然可以使用HiCar。
* 泛化场景：在手机、平板、电视等Android设备上使用HiCar，进行HiCar软件体验或测试。

## 效果示例

<img
  src={require('./img/box-hicar-pad-1.jpg').default}
  width="800" 
/>

## 准备工作

以车连易的一款盒子为例（在本站点周边菜单可以看到这个盒子），介绍如何在平板上使用HiCar。开始前需要准备：

1. 特定系列型号的车连易盒子，具体系列为CCPM、CCPW、CCPA系列，本文以CPC200-CCPA为例。
2. 可安装软件的Android平板，本文以HUAWEI MatePad Pro为例。
3. Type-C转USB转接头，因为盒子是USB口，平板是Type-C口，所以需要转接一下。
4. 与盒子配套的需要安装到平板的软件，本文盒子配套的软件为AutoKit，可前往车连易[官网下载](https://cn.carlinkit.com/autokit.html)。
5. (可选)USB Type-C数据线一条，可以用来有线连接HiCar。当然，盒子一般都支持无线连接，所以本条为可选。


## 连接并使用

1. 将AutoKit软件安装到Android平板中，并打开AutoKit软件。
2. 将盒子的USB口插入转接头，再将转接头插入平板Type-C接口。连接正常后，将会显示连接二维码。

    <img
        src={require('./img/box-hicar-pad-2.jpg').default}
        width="800" 
    />

3. 使用手机负一屏右上角的扫码按钮扫描AutoKit界面左下角的二维码，或者直接使用USB线连接手机与盒子，通过无线或有线的方式连接HiCar。

    <img
        src={require('./img/box-hicar-pad-3.jpg').default}
        width="800" 
    />

## 竖屏显示

断开HiCar连接，旋转平板，当AutoKit界面已经竖屏显示时，再通过无线或有线方式连接HiCar，即可体验竖屏状态的HiCar。

:::tip
当横屏已连接HiCar时，在保持连接状态下将屏幕切换到竖屏，无法直接将HiCar切换到竖屏状态，必须断开HiCar连接后再操作。

:::

<img
    src={require('./img/box-hicar-pad-4.jpg').default}
    width="600" 
/>


## 调整分辨率

1. 断开HiCar连接。
2. 进入AutoKit界面。
3. 点击左上角的设置图标。
4. 在分辨率设置项修改分辨率，当前支持3种分辨率调节。

<img
    src={require('./img/box-hicar-pad-5.jpg').default}
    width="800" 
/>

## 更多设置

盒子本身还支持帧率、解码方式、连接模式等参数设置，可根据实际需要进行调节。

<img
    src={require('./img/box-hicar-pad-6.jpg').default}
    width="600" 
/>

<img
    src={require('./img/box-hicar-pad-7.jpg').default}
    width="600" 
/>