---
layout: post
date: 2018-10-09 08:33:00 +0000
title: VidNote
description: Software Architecture Course Project
categories: 
- project
- electron
- software
- nodejs
- web
image: "/assets/images/vidnote_logo.png"
pdf: ''
images:
- "/assets/images/"

---
PumpkinBox is an online game platform which hosts multiplayer games, and allows players to befriend each other and send game requests to each other, as well as track match statistics. This project was done as part of a first year course on computer networks.

The platform was built in Java using JavaFX for the GUI, along with the jphoenix library for stylized UI components. The backend consists of a manually written web server which processes TCP requests and sends TCP responses which are then processed in the app itself. The java server was hosted on an AWS instance. The java client would then contact this instance through an assigned static IP and exposed port, and all traffic would go through that port. 

Communication from and to the server is encrypted using temporary generated tokens. Security was considered but was not of utmost importance, so no advanced cryptography was applied as that wasn't the focus of the platform. The messaging API between the client and server is described in more detail in the build report. Below are some screenshots of the application. 

<!-- {% include image.html file="pumpkinbox/login_screen.png" description="Login Window" %}

{% include image.html file="pumpkinbox/home_screen.png" description="Home Screen" %}

{% include image.html file="pumpkinbox/chat_screen.png" description="Chat Window" %}

{% include image.html file="pumpkinbox/game_screen_2.png" description="Game Screen" %}

{% include image.html file="pumpkinbox/request_screen.png" description="Request Screen" %} -->