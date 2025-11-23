---
last_update:
  date: 2025-11-15
  author: 油腻樵夫
---


# 快速入门

就让我们用5分钟的时间快速了解一下HUAWEI HiCar（后续为表述方便，我们将其简称为HiCar，为了区分方便，我们把在HarmonyOS 5及以上系统上运行的HiCar称为Next HiCar）。

## 1.Next HiCar是什么
Next HiCar是华为提供的手机、车机互联方案，将手机和车机连接后，可以在车机系统中直接使用手机中的应用，例如导航、音乐等应用。
<img
  src={require('./img/next-hicar.jpg').default}
  width="800" 
/>

## 2.Next HiCar能做什么

### 导航
您可以在车机上直接使用安装在手机中的地图应用，例如高德地图、百度地图、花瓣地图等。
<img
  src={require('./img/next-navigation.jpg').default}
  width="800" 
/>

### 听歌
您可以在车机上直接使用安装在手机中的音频应用，例如汽水音乐、QQ音乐等。
<img
  src={require('./img/next-music.jpg').default}
  width="800" 
/>

### 打电话
您可以在车机上直接使用手机上的电话应用拨打电话。
<img
  src={require('./img/next-call.jpg').default}
  width="800" 
/>

### 看视频
您可以在驾车休息期间在车机上直接使用手机上的视频应用观看喜爱的视频节目。
<img
  src={require('./img/next-video.jpg').default}
  width="800" 
/>

### 语音控制

如果您觉得驾驶期间操作车机屏幕并不方便和安全，那您可以直接通过语音的方式，几乎可以完成上述所有功能。
<img
  src={require('./img/next-voice.jpg').default}
  width="800" 
/>

### 更多功能

更多Next HiCar支持的功能等您亲自探索。

## 3.Next HiCar包含哪些部分

Next HiCar是个比较复杂的软件解决方案，涉及到手机侧和车机侧的应用层和系统层。由于涉及到系统底层的部分能力，所以无论在手机侧还是车机侧，是无法简单通过在手机侧和车机侧安装软件的方式，让原本不支持Next HiCar的手机或车机支持Next HiCar。

<img
  src={require('./img/arts.png').default}
  width="800" 
/>

### 手机侧

首先，在手机侧，我们最直观看到的就是手机上会有一个Next HiCar App。

其次，比较反直觉的一点是，连接Next HiCar后，在车上看到的Next HiCar里面的高德地图、汽水音乐等应用，并不需要安装在车机上，而是安装在手机上。

然后，手机系统的部分，我们往往无法直接感知，Next HiCar正常运行，必须依赖手机底层系统的部分能力。所以，并不是任何手机都可以支持Next HiCar。

### 车机侧

车机侧的存在感比较低，它主要的功能就是在车机侧打通与手机侧连接的通道，为手机提供使用车机屏幕、音响等硬件的方法。


我们后续会在其他章节会较为深入的解释Next HiCar的技术架构，敬请期待。

## 4.如何使用Next HiCar

想使用Next HiCar简单一句话就是：使用支持Next HiCar的手机连上支持HiCar的车使用支持Next HiCar的应用。

这其中有三个条件：

首先，支持Next HiCar的应用，比较好获取，只要了解到是哪些应用支持Next HiCar，前往应用市场下载安装到手机即可。这部分我们在后面的章节也有提到，详情在[获取应用](./next-guides/app/obtain.md)。

其次，支持Next HiCar的手机，这里特指支持HarmonyOS 5以以上系统上的Next HiCar，那只能是华为的机型了，毕竟当前没有其他任何手机厂商能够支持HarmonyOS 5及以上系统，具体如何判断您的手机是否支持Next HiCar，详情在[检查手机](/next-check/phone.md)。

然后，支持HiCar的车型（此处不用区分是否是Next HiCar，也就是说此前已经支持HiCar的车可以用支持Next HiCar的手机去连接），这里相对手机而言会复杂一些，有部分新车原车就支持HiCar，存量的老车可以通过盒子方案使用HiCar，也可以通过后装的车机、车载智慧屏或智能后视镜使用HiCar，这部分的详情在[检查车辆](./next-check/car.md)。


到这里，您应该对Next HiCar有了初步的理解，后续的章节，我们也将会从Next HiCar的各个方面逐一展开，进行更广泛、更深入的介绍和说明。
