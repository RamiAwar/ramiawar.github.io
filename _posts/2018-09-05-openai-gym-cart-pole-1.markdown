---
title:  "OpenAI Gym: Cart-Pole - Part 1"
date:   2018-09-05 01:24:38 +0300
categories: ai
---

## Introduction to OpenAI's Gym 

As an introduction to openai's gym, I'll be trying to tackle several environments in as many methods I know of, teaching myself reinforcement learning in the process. This first post will start by exploring the cart-pole environment and solving it using randomness. This will make more sense when you understand what 'solving' it means.

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

for _ in range(100): # Take 100 frames
	
	action = env.action_space.sample() # Choose random action from action space (i.e. random binary digit, which is the input to this environment signifying moving the cart right or moving it left.)

	env.step(action) # Apply action on environment and produce next states/observations

	env.render() # Visualize environment

	time.sleep(0.1)

env.close()

{% endhighlight %}


Notice that this produces a warning saying that any steps after the simulation ends are meaningless, and for this we use the return values of `env.step(action)`.

---
<br/>

`env.step(action)` returns four values:

1. Observation: object described previously, basically is the output of the environment, or the states in a sense. 
2. Reward: amount of reward achieved by previous action.
3. Done: boolean indicating if episode is terminated. This should control when we stop issuing actions since they'd be meaningless if issued after `done` was returned `True`.
4. Info: diagnostic information useful for debugging, which should not be used for learning.

These were taken from [**openai gym docs**][gym-docs].



<br/>

---

<br/>


[wiki-link]: https://github.com/openai/gym/wiki/CartPole-v0
[gym-docs]: https://gym.openai.com/docs/#Observations