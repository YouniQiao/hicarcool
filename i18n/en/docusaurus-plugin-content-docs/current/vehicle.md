---
last_update:
  date: 2023-05-28
  author: Oily Woodcutter
---

# HiCar Vehicle Version

If you want to download the HiCar vehicle-side software and install it in your car to enable HiCar support, please read the following carefully.

## What Does HiCar Consist Of

We covered this in the Quick Start section earlier. Let's recap.

HiCar is a relatively complex software solution involving the application layer and system layer on both the phone side and the vehicle side. Because it involves underlying system capabilities, on both the phone side and the vehicle side, it is not possible to simply install software to make a phone or vehicle that does not originally support HiCar become HiCar-compatible.

<img
  src={require('./img/arts.png').default}
  width="800" 
/>

### Phone Side

First, on the phone side, the most直观 thing we see is the HiCar App on the phone, which is the APKs we download directly from the homepage of this website.

Second, somewhat counterintuitively, after connecting HiCar, the apps you see on the vehicle — such as Amap, NetEase Cloud Music — do not need to be installed on the vehicle. They are installed on the phone.

Third, the system-level parts of the phone are often imperceptible to us. HiCar's normal operation must rely on certain underlying system capabilities of the phone. Therefore, not every phone can support HiCar.

### Vehicle Side

We did not go into detail about the vehicle side in the Quick Start section. Let us provide a more detailed explanation here.

<img
  src={require('./img/sdk.png').default}
  width="800" 
/>

The diagram above shows the HiCar SDK provided by Huawei. From this diagram, we can see that when a car manufacturer integrates HiCar into a vehicle, two major components are required:

1. Develop a HiCar application on the vehicle side — also known as the HMI application — which is the app you are hoping to download. This application is mainly used to display HiCar-related interfaces, such as the connection code screen, connection failure screen, and the main HiCar interface after successful connection (displaying the HiCar home screen, navigation, music, etc.).

2. Perform adaptation work at the system level of the vehicle head unit. At a minimum, modifications to Bluetooth and Wi-Fi related code are required to ensure that the vehicle and phone can perform HiCar connection authentication and establish a transmission channel. These code modifications are made within the vehicle's system and can only be provided through a vehicle system update, not simply by installing an application.

## Conclusion

The HiCar vehicle-side software is custom and deeply tied to specific vehicle models. You can essentially assume that the HiCar vehicle-side software for Model A, even if you obtain it and install it on Model B, will not work because the underlying system adaptations differ between the two vehicles.

Even if you successfully install the application on the vehicle, you will not be able to view the connection code or use USB connection properly, as it was not developed for your vehicle model.

You can refer to this site's [HiCar Usage Conditions - Check Vehicle](check/car.md) to find various ways to use HiCar.


