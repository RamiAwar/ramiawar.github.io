---
title:  "CPNN Evolution"
date:   2018-09-16 01:24:38 +0300
categories: ai
---

## Introduction to Autoencoders

Many great writeups about autoencoders have already been made, so I'll just reference one of my favorites instead of writing one on my own, since I have nothing to add. Forget about the fact that most of the blogs use Keras, its so simple that it seems like pseudocode, so it shouldn't be hard to understand.

[**Autoencoders in Keras - Keras Blog**][keras-blog]


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




Notice that this produces a warning saying that any steps after the simulation ends are meaningless, and for this we use the return values of `env.step(action)`.

<br/>
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





[keras-blog]: https://blog.keras.io/building-autoencoders-in-keras.html