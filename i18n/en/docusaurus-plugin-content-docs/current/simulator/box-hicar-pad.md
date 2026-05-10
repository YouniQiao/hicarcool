---
last_update:
  date: 2023-04-28
  author: Oily Woodcutter
---

# Simulator 1: Using HiCar on a Tablet

There is currently a special box on the market that enables HiCar on vehicles without using CarPlay or CarLife conversion. Instead, it connects HiCar by installing an app on the vehicle's infotainment system. The only requirement is that the vehicle runs Android and supports installing apps. By extension, any device running Android that supports app installation can run HiCar — such as Android tablets, Android phones, Android TVs, etc.

## Usage Scenarios

* Original scenario: Android-based vehicle infotainment systems that don't support CarPlay/CarLife but allow app installation can still use HiCar.
* Extended scenario: Use HiCar on Android devices like phones, tablets, and TVs for HiCar software experience or testing.

## Demonstration

<img
  src={require('./img/box-hicar-pad-1.jpg').default}
  width="800" 
/>

## Preparation

Using a Carlinkit box as an example (you can find this box in the "Accessories" menu on this site), here's how to use HiCar on a tablet. Before starting, you'll need:

1. A specific series of Carlinkit box, specifically the CCPM, CCPW, and CCPA series. This article uses the CPC200-CCPA as an example.
2. An Android tablet that supports app installation. This article uses the HUAWEI MatePad Pro as an example.
3. A Type-C to USB adapter. Since the box has a USB port and the tablet has a Type-C port, an adapter is needed.
4. The companion app that needs to be installed on the tablet for the box. The companion app for the box used in this article is AutoKit, which can be downloaded from the Carlinkit [official website](https://cn.carlinkit.com/autokit.html).
5. (Optional) A USB Type-C data cable, which can be used for a wired HiCar connection. However, boxes generally support wireless connections, so this is optional.

## Connecting and Using

1. Install the AutoKit app on the Android tablet and open it.
2. Insert the box's USB port into the adapter, then plug the adapter into the tablet's Type-C port. When connected properly, a QR code will be displayed.

    <img
        src={require('./img/box-hicar-pad-2.jpg').default}
        width="800" 
    />

3. Use the scan button in the top right corner of your phone's negative one screen to scan the QR code in the bottom left corner of the AutoKit interface. Alternatively, connect the phone and box directly with a USB cable. Connect to HiCar wirelessly or via cable.

    <img
        src={require('./img/box-hicar-pad-3.jpg').default}
        width="800" 
    />

## Portrait Mode Display

Disconnect HiCar, rotate the tablet. When the AutoKit interface is already in portrait mode, reconnect HiCar wirelessly or via cable to experience HiCar in portrait mode.

:::tip
When HiCar is already connected in landscape mode, switching the screen to portrait while maintaining the connection will not switch HiCar to portrait mode. You must disconnect HiCar first before switching.
:::

<img
    src={require('./img/box-hicar-pad-4.jpg').default}
    width="600" 
/>

## Adjusting Resolution

1. Disconnect HiCar.
2. Enter the AutoKit interface.
3. Tap the settings icon in the top left corner.
4. Modify the resolution in the resolution settings. Currently supports 3 resolution options.

<img
    src={require('./img/box-hicar-pad-5.jpg').default}
    width="800" 
/>

## More Settings

The box itself also supports parameter settings such as frame rate, decoding method, and connection mode, which can be adjusted as needed.

<img
    src={require('./img/box-hicar-pad-6.jpg').default}
    width="600" 
/>

<img
    src={require('./img/box-hicar-pad-7.jpg').default}
    width="600" 
/>
