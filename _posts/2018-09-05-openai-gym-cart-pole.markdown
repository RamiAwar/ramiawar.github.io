---
title:  "OpenAI Gym: Cart-Pole"
date:   2018-09-01 01:24:38 +0300
categories: ai
---

## Introduction to OpenAI's Gym 

As an introduction to openai's gym, I'll be trying to tackle several environments in as many methods I know of, teaching myself reinforcement learning in the process. This first post will start by exploring the cart-pole environment and solving it using randomness. 

## Cart-Pole 

For every environment, I'll be quickly describing the observations (outputs), the actions (inputs), and reward, while linking the github repo wiki page for that environment for more details.

# [Cart-Pole Wiki][wiki-link]

For cart-pole, we have an observation vector of length 4, containing:

Num | Observation | Min | Max
---|---|---|---
0 | Cart Position | -2.4 | 2.4
1 | Cart Velocity | -Inf | Inf
2 | Pole Angle | ~ -41.8&deg; | ~ 41.8&deg;
3 | Pole Velocity At Tip | -Inf | Inf

<br/>

---

<br/>


[wiki-link]: https://github.com/openai/gym/wiki/CartPole-v0

<!-- 

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].



[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
 -->