---
last_update:
  date: 2023-04-08
  author: Greasy Woodcutter
---

# Desktop

The HiCar desktop is the first screen you see when you enter HiCar. HiCar currently has two desktop layouts: Smart Desktop and Card Desktop. More desktop layouts may be added in the future.

## Smart Desktop

In the Smart Desktop layout, the map card is more prominent, displaying more detailed map information directly on the card. You can swipe up and down in the other card area to view more cards.

<img
    src={require('./img/desktop-1.png').default}
    width="800" 
/>

You can customize the left/right position of the map card according to your preference.

<img
    src={require('./img/desktop-2.png').default}
    width="800" 
/>

In some cases, HiCar may not display the Smart Desktop. Factors that determine whether Smart Desktop is shown include:
* Phone-side HiCar app version: 12.2.0.430 or later.
* Phone-side system version: HarmonyOS 2.0.0.230 or later. Version policies may vary by device model; please refer to actual support.
* Head unit screen horizontal width: HiCar determines whether to show Smart Desktop and the map card interaction based on the screen's horizontal width.
    + When the screen horizontal width is less than 5.6 inches, Smart Desktop is not shown; only Card Desktop is displayed.
    + When the screen horizontal width is greater than 5.6 inches but less than 7.5 inches, Smart Desktop is shown, but the map cannot be operated within the card — tapping the map card directly opens the map app.
    + When the screen horizontal width is greater than 7.5 inches, Smart Desktop is shown and the map can be operated directly within the card.

## Card Desktop

<img
    src={require('./img/desktop-3.png').default}
    width="800" 
/>

In the Card Desktop layout, all cards are the same size. You can swipe left and right in the card area to view more cards.

## Switching Desktop Layouts

If Smart Desktop is supported, you can go to "Settings > Desktop > Desktop Layout (Beta)" to select your preferred layout. The change takes effect immediately.

<img
    src={require('./img/desktop-4.png').default}
    width="800" 
/>

:::tip
In earlier versions of HiCar, switching the desktop layout took effect on the next connection.
:::
