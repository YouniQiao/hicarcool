# 无线连接

HiCar支持无线连接，并强烈建议所有接入HiCar的设备都能够支持无线连接的方式使用HiCar，但由于部分硬件上的原因，部分手机和车型存在无法无线连接HiCar的情况。

## 前提条件

1. 您的手机支持HiCar，并且支持无线连接。仅有少数的手机不支持HiCar无线连接，仅支持有线连接。手机相关的支持情况，您可以在这里查询[HiCar支持的手机](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/available-phones-0000001227954439)。

2. 您的车型支持HiCar，并且支持无线连接。绝大多数支持HiCar的设备都支持无线连接，仅有少数的原装车和后装车机仅支持有线连接。
   * 原装车和后装车机的支持情况，您可以在这里查询[HiCar支持的车型](https://developer.huawei.com/consumer/cn/doc/development/HiCar-Guides/available-models-0000001226230373)。
   * 盒子方案的支持情况，您可以通过盒子的售卖详情页获取。目前看到的所有盒子方案几乎全部支持无线连接，而且多数盒子方案支持通过扫描的方式实现无线连接。

## PIN码连接操作步骤

此步骤适用于绝大多数原车支持HiCar的场景。

1. 从手机屏幕顶部下滑出控制中心（如果手机运行 HarmonyOS 系统，请在屏幕顶部右侧下滑），打开蓝牙开关。

2. 点击车机屏幕上的HUAWEI HiCar图标或者长按方向盘上的语音按键。

   <img
      src={require('./img/wireless-1.png').default}
      width="800" 
   />

   :::tip

   部分车型不支持长按语音按键，请以实际支持情况为准。

   :::

3. 将手机靠近中控屏幕，在弹框中选择“连接”。
   <img
      src={require('./img/wireless-2.png').default}
      width="400" 
   />

4. 在手机侧输入连接码后，点击“确定”。

5. 在弹出的“允许自动连接 HiCar 智行”，建议选择“允许”。
   <img
      src={require('./img/wireless-3.png').default}
      width="400" 
   />

## 扫码连接操作步骤

此步骤适用于绝大多数盒子方案使用HiCar的场景。

1. 点击车机屏幕上的CarPlay或CarLife图标（取决于您盒子的类型）或者长按方向盘上的语音按键。
   此时正常情况下，车机屏幕上将会显示二维码。
2. 切换到手机负一屏，选择扫码图标，并扫描车机屏幕上显示的二维码。
   
   <img
      src={require('./img/wireless-4.jpg').default}
      width="400" 
   />

3. 在弹框中选择“连接”。
   <img
      src={require('./img/wireless-2.png').default}
      width="400" 
   />

4. 在弹出的“允许自动连接 HiCar 智行”，建议选择“允许”。
   <img
      src={require('./img/wireless-3.png').default}
      width="400" 
   />