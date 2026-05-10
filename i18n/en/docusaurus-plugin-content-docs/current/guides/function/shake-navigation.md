---
last_update:
  date: 2023-04-08
  author: Oily Woodcutter
---

# Shake Navigation Transfer

HiCar supports shaking your phone to transfer address information from a phone app to the head unit, initiating navigation directly.

## Supported Scenarios

Currently, the shake navigation transfer feature supports the following apps and scenarios:

* **Meituan:** Some merchant detail pages that include an address.
* **Dianping:** Some merchant detail pages that include an address.
* **WeChat:** The last shared location in a chat conversation (supported briefly in the past, but no longer supported).

## How to Enable

You can enable shake navigation transfer in any of the following ways:

* Go to your phone's **Settings > More Connections > HiCar Smart Connectivity**, tap the connected device under My Devices, and turn on the shake navigation transfer switch.

    <img
        src={require('./img/shake-navigation-1.jpg').default}
        width="400" 
    />

* After connecting to HiCar, go to **Settings > Shake Navigation Transfer** on the head unit side and turn on the shake navigation transfer switch.

    <img
        src={require('./img/shake-navigation-2.png').default}
        width="800" 
    />

## Steps

1. Open an app on your phone that supports shake navigation transfer, select a merchant, and ensure the current page contains an address.

    <img
        src={require('./img/shake-navigation-3.jpg').default}
        width="400" 
    />

2. Shake your phone, and the HiCar head unit will automatically enter the navigation flow.

    <img
        src={require('./img/shake-navigation-4.png').default}
        width="800" 
    />

    * If the merchant's address is easily determined, navigation will start directly.
    * If the merchant's address needs further confirmation, HiCar will provide voice prompts and display a list of candidate addresses. You can tap or use voice to select one, and navigation will then begin.
