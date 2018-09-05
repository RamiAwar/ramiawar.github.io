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

 <br />
---
<br/>

`env.step(action)` returns four values:

1. Observation: object described previously, basically is the output of the environment, or the states in a sense. 
2. Reward: amount of reward achieved by previous action.
3. Done: boolean indicating if episode is terminated. This should control when we stop issuing actions since they'd be meaningless if issued after `done` was returned `True`.
4. Info: diagnostic information useful for debugging, which should not be used for learning.

These were taken from [**openai gym docs**][gym-docs].

We will use this `done` indicator in our first attempt at solving this environment.

<br/>
---
<br/>

## Solution using Randomness

As discussed above, to consider the episode solved, we need an average reward equal to or greater than 195. Note that if this only guarantees that no termination conditions be met within 200 frames only. The algorithm might fail one frame after that, but it would still be considered a successful solution according to the environment's criteria. You can deduce that succeeding over 200 frames doesn't guarantee that your model will keep the rod up in real life. For that, there are many control systems solutions, such as PIDs, root locus, state space, ... None of these have anything to do with learning though, so they're not intended solutions by OpenAI. 

Our observation vector x has four values, we define a weight vector w:

$ \textbf{x} = [ a\quad b\quad c\quad d ] , \quad \textbf{w} = $
$$\begin{bmatrix}\alpha\\\beta\\\omega\\\zeta \end{bmatrix} $$

What we will try to do is generate a prediction (0 or 1) moving us either left or right, depending on these parameters and the weight vector. To do this, we take the following function:

$$ f(x, w) = 
     \begin{cases}
       0 &\quad\text{if } \textbf{x}\cdot \textbf{w} < 0\\
       1 &\quad\text{if } \textbf{x}\cdot \textbf{w} \geq 0\\
     \end{cases} $$

Given enough trials and errors, there exists several weight vectors $ \textbf{w} $ which would result in the cart balancing the pole for at least 200 frames. We will find these weight vectors by iterating over randomly generated vectors and save one that satisfies our goal.

Trying this out in code, we first define the function $f$:
{% highlight python %}
def f(x, w):
	if np.dot(x, w) > 0:
		return 1
	else:
		return 0
{% endhighlight %}

Then we want to find the average performance (average reward) of a randomly generated 4-valued weight vector fed with $\textbf{x}$ to $f$. We don't expect the first guess to work, so we'll try a hundred guesses with an outer loop. 

{% highlight python %}

import gym
import numpy as np
import time


def f(x, w):
    if np.dot(x, w) > 0:
        return 1
    else:
        return 0

env = gym.make("CartPole-v0")
found = False

final_weights = None 

for _ in range(100):  # Trying 100 guesses of weight vectors

    if found:
        break

    w = np.random.uniform(-1.0, 1.0, 4)  # Generate random weight vector
    reward_vector = []  # Append total rewards per simulation to find average in the end

    # Find average performance of this weight vector
    for i in range(100):

        # reset environment
        done = False
        x = env.reset()
        reward_count = 0

        while not done:  # while we haven't succeeded or a termination condition was reached

            reward_count += 1  # keeping track to check success

            action = f(x, w)  # generate action
            x, reward, done, info = env.step(action)  # take a step

        reward_vector.append(reward_count)

    reward_vector = np.array(reward_vector)
    if reward_vector.mean() >= 195:  # Check success
        print("Passing weight vector is ", w)
        found = True
        final_weights = w

{% endhighlight %}

What remains is seeing the performance of this solution. Appending the following code to our previous segment, we visualize the performance of this weight vector:

{% highlight python %}

x = env.reset()  # Resetting environment conditions
done = False

while not done:  # Take 100 frames

    action = f(x, final_weights)

    x, _, _, _ = env.step(action)

    env.render()  # Visualize environment

    time.sleep(0.02)  # Delay for it not to be too fast

env.close()  # Close visualization window

{% endhighlight %}

What we did is basically a p-controller, with the constants randomly picked.


[wiki-link]: https://github.com/openai/gym/wiki/CartPole-v0
[gym-docs]: https://gym.openai.com/docs/#Observations

