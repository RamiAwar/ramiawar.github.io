---
layout: post
title: Night Drive
description: Personal project
categories:
- project
- threejs
- web
- javascript
- game development
image: "/assets/images/nightdrive.jpg"
pdf: ''
videos:
- yp6Cl37HlTg
- 3oYw3vUgXtw

---
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