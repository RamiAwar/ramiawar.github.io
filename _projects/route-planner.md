---
layout: blog_post
title: Route Planner C++
date: 2020-02-14T23:00:00.000+00:00
description: Open Street Map C++ Route Planner
categories:
- pathfinding
- algorithms
- a-start
- software
- c++
- project
image: "/assets/images/route_planner/map.wdp"
pdf: 'none'


---
### What is it?

This is an implementation of the route planner project in Udacity's C++ Nanodegree. Using IO2D (C++ graphics library) and OSM (OpenStreetMap) data and pugixml, A* search is implemented on abstracted classes out of the OSM data. Below are the results on some maps.

{% include image.html file="route_planner/map1.wdp" description="Path planning on map of Beirut, Lebanon." %}
<!-- {% include image.html file="route_planner/map.wdp" %} -->


### Challenges

* Parsing OpenStreetMap xml data into C++ classes
* Creating traversable nodes out of OpenStreetMap data
* Implementing A* search algorithm on parsed data

### Solutions

* Using pugixml to parse XML file into several classes. Only a subset of the OSM data was read, as that is what interests us for path finding.
* Used IO2D to render the OSM data in C++
* Implemented A* search algorithm using C++ and integrated it with OSM data