---
last_update:
  date: 2023-04-30
  author: 油腻樵夫
---

# HiCar控制车载香薰
目前HiCar支持控制后装的车载设备，其中就有一款车载香薰机设备。在连接HiCar后，HiCar界面中会出现一个香薰控制卡片，可以控制香薰机开关以及发香模式等。

## 效果示例

<img
  src={require('./img/aromatherapy-hicar-1.jpg').default}
  width="600" 
/>

## 准备工作

当前HiCar只支持一款香百年的智能车载香薰机，所以开始前核心准备工作就是：

购买HiCar支持的智能车载香薰机。在本站点上方“周边”菜单中有这款香薰机链接。

:::tip
该款香薰机有多种香味供选择，如果要买的话，建议选择风铃香味。
:::

## 将香薰机绑定到智慧生活App

这款香百年的智能车载香薰机支持HarmonyOS Connect，也就是之前的HiLink。支持HarmonyOS Connect的设备，可以绑定到华为的智慧生活App，在智慧生活App中对绑定的设备进行控制。

HiCar其实是与智慧生活App进行了对接，当然也针对该款香薰机进行了适配，进而可以控制智能车载香薰机。所以为了能够在HiCar中控制香薰机，需要先将香薰机绑定到智慧生活App。

具体绑定步骤在购买的香薰机说明书中有详细介绍。这里只简单介绍其中关键点。

1. 确保手机蓝牙打开，然后打开智能车载香薰机。
2. 首次打开香薰机默认进行配网状态，如果不确认的话，可以长按香薰机开关10秒听到滴声后重新进入配网状态。
3. 打开智慧生活App，如果已发现设备直接按照引导增加设备即可，如果未自动弹框发现设备，则点击右上角 + 号，添加设备，手动扫描设备。
4. 根据智慧生活App的提示一步步将香薰机绑定即可。

  <img
    src={require('./img/aromatherapy-hicar-2.jpg').default}
    width="400" 
  />

:::tip
智慧生活App中绑定设备的体验可能不太好，经常会出现连接失败的情况，如果失败了，请多重试几次。重试时，可以长按香薰机开关10秒以上使其重新进入配网状态。
:::

## 显示IoT控制卡片

HiCar在默认情况下不显示香薰卡片，需要我们自行将该开关打开。操作步骤如下：

1. 连接HiCar，进入“设置 > 桌面 > 卡片管理”。

  <img
    src={require('./img/aromatherapy-hicar-3.png').default}
    width="800" 
  />

2. 将“IOT设备”设置为选中状态。

  <img
    src={require('./img/aromatherapy-hicar-4.png').default}
    width="800" 
  />

  这样就可以在HiCar界面中显示香薰卡片了。


## 在HiCar中控制香薰机

在连接HiCar后，HiCar界面中将会出现智能香薰机的控制卡片。

该卡片中显示当前香薰机的剩余电量和当前浓度设置，并提供一个快捷按钮用于控制香薰机开机/关机。

<img
  src={require('./img/aromatherapy-hicar-5.png').default}
  width="800" 
/>

点击智能香薰机控制卡片后，将会进入到具体的香薰机设置界面。

<img
  src={require('./img/aromatherapy-hicar-6.png').default}
  width="800" 
/>

在该界面中可以设置：

* 香薰机开机/关机。
* 香薰浓度：弱或强。
* 香薰模式：
  * 自控模式：让香薰机自动控制，在发香几分钟后自动关机。
  * 循环模式：设置循环发香几次后自动关机。
  * 持续模式：设置持续发香多少分钟后自动关机。


<img
  src={require('./img/aromatherapy-hicar-7.png').default}
  width="800" 
/>