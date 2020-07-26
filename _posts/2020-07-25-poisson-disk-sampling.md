---
layout: blog_post
title: "Poisson Disk Sampling"
permalink: /blog/poisson-disk-sampling/
description: An implementation based review of poisson disk sampling methods
date:   2020-07-25 01:24:38 +0300
categories: [mathematics, game-dev]
pdf: none
---

## What is poisson disk sampling for?

As an explorer of all things procedural, I've come across the need to place objects in a grid in such a way that looks natural. The first think you'd think of would be uniform random sampling. If we have a grid of width w and length l, we could keep sampling points (u, v) where U and V are random variables with uniform distributions over [0, w] and [0, h].