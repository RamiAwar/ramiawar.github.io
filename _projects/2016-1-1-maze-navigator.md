---
layout: post
title: Maze Navigating Robot
description: Autonomous mobile robot with simple SLAM
categories: project, finance
image: /assets/images/maze-navigator.jpeg
videos: [f5982fyIUCE]
---

This robot is an Arduino based, 2 wheeled mobile robot with 3 infrared sensors. It navigates a maze by staying centered between both walls using a PID controller which minimizes the deviation in value between the left and right infrared sensors. The front sensor is used to detect dead ends and turns. The robot maps the environment as it moves, creating a virtual map of the maze, and then solving it by discretizing the mapped space and using an A* algorithm. Below is a video of the first phase in building the robot. Actual maze navigation videos were not taken before the robot was destroyed, but the code is still available 😄.