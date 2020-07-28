---
layout: blog_post
title: Autonomous Vision Based Vehicle
date: 2018-01-26T23:00:00.000+00:00
description: Engineering Design Challenge Entry
categories:
- vision
- python
- raspberry-pi
- arduino
- robotics
- project
image: "/assets/images/autonomous_car/fig5.wdp"
pdf: "/assets/pdfs/auto_car_report.pdf"
videos:
- 5YBKvhzpwfI

---
### What is it?

A mobile robot with differential drive that navigates purely using computer vision.

### Challenges

* Lane following using a live image stream
* Architecture of control system and electronics

### Solutions

* Using a Raspberry-Pi camera fitted with a fish eye lens, an algorithm that processes the images from the video feed was developed which allowed the vehicle to stay centered while navigating. This algorithm is described in the PDF below, but basically tries to equalize the distance between the car's center of vision and both lanes, in the process staying in the center. 
* The architecture chosen was a Raspberry Pi controller that acted as the high level controller and vision processor, which then communicated via serial commands to an Arduino. The Arduino's API provided methods to control the motors, read from sensors, and in the process isolate the RPi from potential power failures. The RPi got it's power from a commercial power bank, while the motors and Arduino were powered from lithium ion battery packs.