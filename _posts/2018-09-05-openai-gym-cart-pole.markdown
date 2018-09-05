---
title:  "OpenAI Gym: Cart-Pole"
date:   2018-09-05 01:24:38 +0300
categories: ai
---

## Introduction to OpenAI's Gym 

As an introduction to openai's gym, I'll be trying to tackle several environments in as many methods I know of, teaching myself reinforcement learning in the process. This first post will start by exploring the cart-pole environment and solving it using randomness. 

## Cart-Pole 

For every environment, I'll be quickly describing the observations (outputs), the actions (inputs), and reward, while linking the github repo wiki page for that environment for more details.

# [**Cart-Pole Wiki**][wiki-link]

#### Observation

For cart-pole, we have an observation vector of length 4, containing:

Num | Observation | Min | Max
---|---|---|---
0 | Cart Position | -2.4 | 2.4
1 | Cart Velocity | -Inf | Inf
2 | Pole Angle | ~ -41.8&deg; | ~ 41.8&deg;
3 | Pole Velocity At Tip | -Inf | Inf

This observation vector is outputted by the environment at every step/iteration.

To get this observation, we need to feed the environment an action to then perform a step on.
Generating a random action that complies with the type and shape of data needed as an input is as simple as calling the action_space.sample() method on the environment object. I'll provide an [example below](#action-space-sample).

#### Action

Num | Action
--- | ---
0 | Push cart to the left
1 | Push cart to the right

#### Reward

Every step taken generates a reward of one, since we managed to balance the rod for longer.

#### Termination Conditions

1. Pole Angle is more than ±12°
2. Cart Position is more than ±2.4 (center of the cart reaches the edge of the display)
3. Episode length is greater than 200

#### Solved Requirements

The episode is considered solved when the average reward is greater than or equal to 195 over 100 consecutive trials.

These are all taken from the page linked above, for those of you who didn't visit it.
They simply describe the gym environment we chose to work on. 


<p id="action-space-sample">
	To get started, let's run the environment and render it after a random action. 
</p>

{% highlight python %}
import gym
import time 

env = gym.make('CartPole-v0') # This creates our environment 

env.reset() # Resetting environment conditions
action = env.action_space.sample() # Choose random action from action space (i.e. random input vector of dimension ...


{% endhighlight %}







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