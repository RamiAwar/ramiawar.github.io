---
layout: blog_post
title: "Poisson Disk Sampling"
permalink: /blog/poisson-disk-sampling/
description: An implementation based review of poisson disk sampling methods
date:   2020-07-25 01:24:38 +0300
categories: [mathematics, game-dev]
pdf: none
---

## What is poisson disk sampling?

As an explorer of all things procedural, I've come across the need to place objects in a grid in such a way that looks natural. A forest of trees, bushes around those trees, flowers over grasslands, etc. The most common way of modelling such a distribution is what is called Poisson Disk Sampling. Interestingly enough, this also turns out to model the distributions of retinal cells in our eyes (especially the cones) [Yellott 83](https://doi.org/10.1126/science.6867716). The way our brain perceives an image is by sampling (or reducing the continuous signal of light rays we receive into a discrete one) light rays penetrating our eye's lens and transmitting the information from each to the brain. The **way** we sample those light rays is very important, as the accuracy of the reconstructed image from those rays differs widely from one technique to the next. For a more thorough overview of sampling, check my previous write up [on Sampling]({% post_url 2019-12-25-dsp-sampling %}).

## What is it used for?

Some applications of poisson disk sampling that I know of include sampling for ray tracing, which is an imitation of what our retinal cells do, procedural object placement (trees in forests, leaves on trees, fur on animals, etc.), texture generation, mesh algorithms (analysis, generation).



The first think you'd think of would be uniform random sampling. If we have a grid of width w and length l, we could keep sampling points (u, v) where U and V are random variables with uniform distributions over [0, w] and [0, h]. The following is what we would get with such an approach:

<p class="codepen" data-height="408" data-theme-id="light" data-default-tab="js,result" data-user="RamiAwar" data-slug-hash="LYGoVKL" style="height: 424px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Uniform Random Sampling">
  <span>See the Pen <a href="https://codepen.io/RamiAwar/pen/LYGoVKL">
  Uniform Random Sampling</a> by Rami Awar (<a href="https://codepen.io/RamiAwar">@RamiAwar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>




<p class="codepen" data-height="402" data-theme-id="light" data-default-tab="js,result" data-user="RamiAwar" data-slug-hash="vYLMQab" style="height: 402px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Poisson Disk Sampling - Mitchell's Best Candidate">
  <span>See the Pen <a href="https://codepen.io/RamiAwar/pen/vYLMQab">
  Poisson Disk Sampling - Mitchell's Best Candidate</a> by Rami Awar (<a href="https://codepen.io/RamiAwar">@RamiAwar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


