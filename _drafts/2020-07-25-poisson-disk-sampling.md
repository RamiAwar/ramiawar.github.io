---
layout: blog_post
title: "Poisson Disk Sampling"
permalink: /blog/poisson-disk-sampling/
description: An implementation based review of poisson disk sampling methods
date:   2020-07-25 01:24:38 +0300
categories: [Mathematics, Game Dev]
pdf: none
---

## What is poisson disk sampling?

As an explorer of all things procedural, I've come across the need to place objects in a grid in such a way that looks natural. A forest of trees, bushes around those trees, flowers over grasslands, etc. The most common way of modelling such a distribution is what is called Poisson Disk Sampling. Interestingly enough, this also turns out to model the distributions of retinal cells in our eyes (especially the cones) [Yellott 83](https://doi.org/10.1126/science.6867716). The way our brain perceives an image is by sampling (or reducing the continuous signal of light rays we receive into a discrete one) light rays penetrating our eye's lens and transmitting the information from each to the brain. The **way** we sample those light rays is very important, as the accuracy of the reconstructed image from those rays differs widely from one technique to the next. For a more thorough overview of sampling, check my previous write up [on Sampling]({% post_url 2019-12-25-dsp-sampling %}).

## What is it used for?

Some applications of poisson disk sampling that I know of include sampling for ray tracing, which is an imitation of what our retinal cells do, procedural object placement (trees in forests, leaves on trees, fur on animals, etc.), texture generation, mesh algorithms (analysis, generation).

## Stochastic Sampling Techniques

In stochastic sampling, any point has a finite probability of being chosen. This is powerful as the visual system is much more sensitive to aliasing than noise, and this lack of structure due to randomness more robustly prevents aliasing. For more information on what our retina looks like and uniform vs non-uniform sampling effects, check the [last section on blue noise](#blue).

### Uniform Patterns
The first thing that comes to mind when you think 'random' would be uniform random sampling. If we have a continuous space of width w and length l, we could keep sampling points (u, v) where U and V are random variables with uniform distributions over [0, w] and [0, h]. The following is what we would get with such an approach:

<p class="codepen" data-height="408" data-theme-id="light" data-default-tab="js,result" data-user="RamiAwar" data-slug-hash="LYGoVKL" style="height: 424px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Uniform Random Sampling">
  <span>See the Pen <a href="https://codepen.io/RamiAwar/pen/LYGoVKL">
  Uniform Random Sampling</a> by Rami Awar (<a href="https://codepen.io/RamiAwar">@RamiAwar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

It is obvious that the distribution of points is not isotropic (identical in any direction), and does not look like a good way to sample an image for example. It also doesn't look like a distribution of trees in a forest, as the placement is too random with overlap.

This can also be thought of from a surveying perspective, the origin of statistics. If we were to survey a population, we would not randomly pick individuals from the population, as the sampled individuals would not be truly representative of the population given a realistic case study. Techniques such as stratified sampling were developed to solve this problem, thus choosing a more representative sample. 

### Non-Uniform Patterns

The dual of stratified sampling exists in computer graphics, and is a non-uniform sampling pattern called Jittered Sampling. Poisson disk sampling may also be thought of as another way to achieve this representative population. The fact that nature and evolution have come to this same conclusion shows the power of such a distribution in sampling n-dimensional spaces (More on n-dimensional space sampling later, for now we'll just stick to 2 dimensions for simplicity).

#### Jittered Sampling

This sampling technique is a direct derivative of uniform sampling. Split the space you are sampling into a grid of small cells, and then sample from a uniform random distribution inside each cell. This simple technique is very simple to implement and parallelize, which has made it a popular sampling method in computer graphics and other fields. Jittering approximates poisson disk distributions but with a very small disk radius (i.e. elements may be much closer to each other). This is expected as 2 elements may turn out to be nearly overlapping when random uniform samples are selected from adjacent cells. Below is an example implementation:


<p class="codepen" data-height="444" data-theme-id="light" data-default-tab="js,result" data-user="RamiAwar" data-slug-hash="XWXLaVZ" style="height: 444px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="XWXLaVZ">
  <span>See the Pen <a href="https://codepen.io/RamiAwar/pen/XWXLaVZ">
  XWXLaVZ</a> by Rami Awar (<a href="https://codepen.io/RamiAwar">@RamiAwar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Note that the disks surrounding the points are simply there to show that they're much smaller than poisson disk sampling which is shown later. In reality, the disk sizes are not configurable and stochastic, and might be very close to zero, resulting in points nearly overlapping.

<p class="codepen" data-height="402" data-theme-id="light" data-default-tab="js,result" data-user="RamiAwar" data-slug-hash="vYLMQab" style="height: 402px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Poisson Disk Sampling - Mitchell's Best Candidate">
  <span>See the Pen <a href="https://codepen.io/RamiAwar/pen/vYLMQab">
  Poisson Disk Sampling - Mitchell's Best Candidate</a> by Rami Awar (<a href="https://codepen.io/RamiAwar">@RamiAwar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<p id="blue">
</p>

## On Blue Noise
The term blue noise refers to an even, isotropic, yet unstructured (non-uniform) distribution of points. This means that in any direction considered, the distribution of points is identical, although it has no structure. The abscence of structure prevents aliasing, and that is intuitively understandable by looking at [Moiré patterns](http://clearlyexplained.com/moire-patterns/index.html). In the example below, two structured patterns interfere to form visible artifacts. 

{% include image.html file="poisson_disk_sampling/moire_patterns.png" description="Moiré Patterns - clearlyexplained.com/moire-patterns/" %}

As a matter of fact, the human eye contains an array of non-uniformly distributed photoreceptors, and that is the only reason that the eye does not produce its own aliasing effects. Photoreceptor cells in the fovea are tightly packed and the lens acts as an antialiasing filter. The region outside the fovea shows a much lower density of cells which are also non-uniformly distributed (The fovea is a tiny pit in the retina that provides the clearest vision of all). The image below shows the distribution of cones in the retina (photoreceptors responsible for seeing color in well-lit environments):

{% include image.html file="poisson_disk_sampling/cone_distribution.jpg" description="Cone Distribution in the Retina - askabiologist.asu.edu/rods-and-cones" %}

More information on how our visual perception works can be [found here](https://askabiologist.asu.edu/rods-and-cones). 

As you can see, the distribution of cones seems like a poisson disk distribution. Taking an even closer look makes it seem like rods and cones are distributed similar to a forest of mysterious plants!

{% include image.html file="poisson_disk_sampling/microscopic_retina.jpg" description="Rods and Cones in the Retina - fineartamerica.com/featured/7-rods-and-cones-in-retina-omikron.html" %}

They are tightly packed but with a minimum distance between each so as to take up space and not affect the performance of surrounding rods and cones, just as trees need a minimum distance between each other so as to have access to sunlight and not block each other (Plants in nature help each other out by communicating via myccorhizal networks!).

<script src="/assets/js/fourier.js" type="text/javascript"></script>
<script type="text/javascript">
out = []

</script>

