---
layout: blog_post
title: PumpkinBox Engine
date: 2020-05-25 23:00:00 +0000
description: Personal project
categories:
- project
- opengl
- c++
- game engine
- game development
image: "/assets/images/PumpkinBox.png"
pdf: 'none'
videos: []

---
### What is it?

A personal project I've been working on for 2 months during this quarantine. It is a desktop application development framework that allows for the development of C++ applications with a GUI and Renderer (Only OpenGL backend supported so far, but architecture leaves room for Vulkan, Metal, or DirectX extensions).

### Features

* Custom type-agnostic Entity Component System that utilizes virtual memory and custom allocators
* Dockable ImGui based GUI with custom components
* Profiling classes (Adapted to chrome tracing, and built with a live graph viewer)
* 2D Custom batch renderer
* Custom shader library (GLSL)
* Orthographic camera + controller
* Minimal dependencies on other libraries

### Future Work

The engine is still far from usable to create games. Work in progress.
* Functional game example
* Visual game creation capabilities
* Scripting language
* Game exporting
* Update linux, macosx support (one month late)

![](/assets/images/game_engine/engine_01.jpg)

