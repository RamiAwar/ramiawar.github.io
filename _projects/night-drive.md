---
layout: post
title: Night Drive
date: 2019-01-11 23:00:00 +0000
description: Personal project
categories:
- project
- threejs
- web
- javascript
- game development
image: "/assets/images/nightdrive.jpg"
pdf: ''
videos: []

---
### What is it?

NightDrive is a threejs experiment and attempt to build a 3D game in the browser. It consists of a procedurally generated car and dynamic lighting, moving alone an endless round road, where procedurally generated trees and collectables spawn randomly and make avoiding trees and collecting objects more difficult as the levels increase.

Mobile performance was severely affected when directed lights were added, but the effect was too beautiful to undo. Check it out at [NightDrive link](https://ramiawar.github.io/NightDrive).

For more of my games, check out my itch.io page: [RamiAwar.itch.io](https://ramiawar.itch.io/)

### Features

* Game framework from scratch, with collision detection and different performance settings
* Procedurally generated clouds, trees, and collectable items
* Basic car model built from primitive threejs elements. Complicated shapes are created using boolean operations on these primitives. No 3D modelling program was used.
* Dynamic lighting which is attached to the car, with its position and orientation updated each frame.
* Easily animatable car with all parts constructed from separate classes.

### Future Work

* More performance improvements by limiting collision checks, making lighting controllable from settings menu, controlling shadows from settings menu, controlling camera settings from settings menu...
* Adding fuel tank collectables
* Adding touch and keyboard controls
* Experimenting with sphere instead of cylinder for a ground, allowing for more freedom in movement and a super-mario galaxy planet movement mechanic.

![](/assets/images/nightdrive_3.jpg)

![](/assets/images/nightdrive_1.jpg)![](/assets/images/nightdrive_2.jpg)