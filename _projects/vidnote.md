---
layout: blog_post
date: 2018-10-09 08:33:00 +0000
title: VidNote
description: Software Architecture Course Project
categories: 
- project
- electron
- software
- nodejs
- web
image: "/assets/images/vidnote/vidnote_logo.png"
pdf: 'none'
images:
- "/assets/images/"

---

VidNote is a video annotation cross-platform application. Annotations can be audio, text, or even video annotations. Work in progress.

## How it works

First, you import a video by choosing a file. After confirming the video choice, a new window appears, enclosing a video player with volume and seeking features, and basic controls. On the right, you have the annotations list. To add a new annotation at a specific frame of the video, press the add annotation button when the video is at that specific moment. You can do that while the video is playing or paused for more accuracy. When a new annotation is added, a .anot file gets created in the same directory as the video that was imported, which allows future importing of these annotations. A thumbnail of the frame is also saved in the .anot file, along with other needed metadata. To view the annotations at a later time, simply load the video back into the application and the .anot file will automatically be imported if it exists in the same directory.

## Usage Instructions
Refer to the github repository for more details, source code, and issue and milestone tracking. [Github Repo](github.com/RamiAwar/VidNote).


{% include image.html file="vidnote/vidnote1.jpg" description="Choose video" %}

{% include image.html file="vidnote/vidnote2.wdp" description="Main screen" %}

{% include image.html file="vidnote/vidnote3.jpg" description="Annotation creation" %}

{% include image.html file="vidnote/vidnote_logo.png" description="Logo" %}
