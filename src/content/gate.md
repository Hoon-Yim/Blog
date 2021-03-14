---
templateKey: blog-post
id: https://hoony.netlify.app/gate/
title: "[CA] Gates"
slug: /gate
date: 2021-03-05T23:56:03.125Z
description: The gates that make up the Computer
tags:
  - English
  - CA
  - Gates
---

# **Gates**

---

## introduction 

It is very important to know what ingredients form the Computer as a Programmer.
  
Many people think that Computer Architecture is not worthy to spend many times to study it. <br />
As technology advances rapidly, it is true that deep study of computer hardware has become a choice, not a necessity, and that it seems there is no adequate reason to learn. <br />

Memory Management, which was destined for former programmers, is now obsolete because all those things are performed by "Garbage Collectors" which is almost every modern programming language provide.

And optimization for the better performance of software is not as important as it was about 10 years ago. <br />
Nowadays, ability to optimize _code_ is not that important, but the ability to collaborate with others <br />
like writing code with good readability (obviously understandable code as if junior developers can understand).<br />

However the reason that we should learn how computers work and what things inside in that machine is that <br />
Even though there are many of reasons you do not have to study hardware, there are still many things you can't do if you don't know the machine in many fields such as Graphics, Network, Embeded and so on.. <br /> 

This is the reason why every CS<sup>(__C__omputer __S__ciecne)</sup> program offers CA<sup>(__C__umputer __A__rchitecture)</sup> course in the first semester.

Let's take the first step towards the machine that is indispensable to modern people.

<hr />

Computers are nothing but scrap metal, excepts for gates, compared to the perception that they are complex.<br />
Every calculations are performed by combination of gates and a tiny bit of electricity.<br />

I know that sounds ridiculous..<br />
Let's think about that after reading this writing.

<hr />

## NAND Gate

Let's get to know what is inside in this simple machine with __NAND__ gate.

![NAND Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/NAND_ANSI_Labelled.svg/180px-NAND_ANSI_Labelled.svg.png)

As you can see the little diagram above, that picture shows us how NAND gate looks like.<br />

There are two inputs called A and B and an output Q.<br />
Short lines which connected to all inputs and output are called wires or bits. All bits store two states, on and off.<br />

NAND gate take two inputs and produce an output according to its own function.<br />

At this point, Truth Table will be useful to understand how the various input combinations create the output, like blow:

<img src="https://i.imgur.com/qt53JiP.png" alt="NAND table" style="width: 200px;"></img>
###### <sup>0 stands for off and 1 stands for on.</sup>

The table indicates that the output is off when only both inputs are on. This is how NAND gate sets the output. Some of you guys are probably familiar with &&(AND) which is very useful expression in conditional or repetitive statement in programming language. And as you can realize at this moment, NAND gate performs exactly the opposite function of &&(AND) operator.

<hr />

## NOT Gate

We can make similar but different gate by tying the inputs from __NAND__ gate which called __NOT__ gate, like this:<br />
![NOT Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NOT_from_NAND.svg/180px-NOT_from_NAND.svg.png)
&emsp;__&rightarrow;__&emsp;
![NOT Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/NOT_ANSI_Labelled.svg/180px-NOT_ANSI_Labelled.svg.png)

There are only one ouput unlike __NAND__ gate that we've been looking at. If the A<sup>input</sup> is on, then Q<sup>output</sup> will be off. __NOT__ gate will always print the opposite of the input.

The truth table is down blow:<br />
<img src="https://i.imgur.com/WRESXxL.png" alt="NOT table" style="width: 200px;"></img>

At first glance, you may think this NOT gate is unnecessary, but it plays an important role in making the next gate.

<hr />

## AND Gate

Now it is time to combine those two gates we've come up with.<br />
This combination of gates may seem like magical thing that you have never imagined.

We can take the output that came out from the __NAND__ gate and put that result in __NOT__ gate.<br /> It is available because __NOT__ gate needs only one input to perform their process.<br />
Let's take a look at how this combination is organized:<br />

![AND Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/AND_from_NAND.svg/300px-AND_from_NAND.svg.png)<br />

If both inputs are on, then the middle output will be off because left side gate is __NAND__ gate. Then the result becomes an input of the right side gate which is __NOT__ gate, so the result will be on. So the result is on when both inputs are on.

Truth table will help you to understand this gate:

<img src="https://i.imgur.com/vRU0uPC.png" alt="AND table" style="width: 250px;"></img>

We call this combined gate as __AND__ gate. <br />
This __AND__ gate, however, is used so often in computer. So we can built these two gate as a single unit like this: <br />

![AND Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AND_ANSI_Labelled.svg/180px-AND_ANSI_Labelled.svg.png)

The only thing the difference between __NAND__ and __AND__ gate is the little 'O' sign that attached to the BIG 'D' sign. Now it has become obvious that the little 'O' sign represents "opposite".

Then you can have simpler Truth Table:<br />

<img src="https://i.imgur.com/cz3v8vd.png" alt="AND table" style="width: 200px;"></img>

I am sure that you guys already have some programming experience, so this __AND__ gate is the most understandable gate among we've ever dealt with.

<hr />

## OR Gate 

It is time to get familiar with combination of gates and we have two gates left.

This gates is known as __OR__ gate and this one is also very popular with __AND__ gate because we use this a lot for coding. <br />
It requires three gates in total to build the new our friend __OR__ gate.

Let's find out which gates make up the __OR__ gate:

![OR Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/OR_from_NAND.svg/300px-OR_from_NAND.svg.png)

Let's assume that we have two inputs, A is on and B is off. <br />
A and B pass through the __NOT__ gate at the same time, then their value will be the opposite of the value they originally had. <br />
Then the last gate we got will check the value and then it will produce ON as an output because the last gate is __NAND__ gate. <br />
When two inputs are not the same each other, the output of __NAND__ gate will be ON as we already discussed.

To sum up, this __OR__ gate will generate 'off' in case both inputs are off. <br />
Here is the Truth Table that will help you out to understand well this thing:

<img src="https://i.imgur.com/fPk6TVK.png" alt="OR table" style="width: 250px;"></img>

If you look at the diagram above, it can be confusing for no reason, so you can reduce it simply as shown below. <br />
_however this is not the only reason that we should have simple version of the diagram by the way. It would help us to draw enough complex diagram that will be covered later_

![OR Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/OR_ANSI_Labelled.svg/180px-OR_ANSI_Labelled.svg.png)<br />
<img src="https://i.imgur.com/Sjt14OX.png" alt="OR table" style="width: 200px;"></img>

<hr />

## XOR  Gate 

We are finally at the last gate combination which is __XOR__ Gate.<sup>sometimes it is called __EOR__, __EXOR__ and pronounced as __Exclusive OR__</sup> <br />
In fact, it is the most complex gate but it is not difficult or does not require much time to understand.

Let's quickly see what it looks like:

![XOR Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/XOR_from_NAND.svg/450px-XOR_from_NAND.svg.png)

It seems like a monster but do not worry anything. This is quite simple. Trust me.

First of all, let's get to know what this gate does for now.<br />
This gate derives _on_ only when the two inputs are different. And the output is off when the two inputs are the same each other. <br />
It is similar to __OR__ gate but the only difference is that __OR__ gate will generate on when all the inputs are on but __Exclusive OR__ gate does not work like that.

Just Follow the gates according to inputs and you will be able to see intuitively what output comes out. <br />
I wanted to make the Truth Table however I found that it will disturb understanding this process.

As always, let's make it simpler to understand well and use it later in the other diagrams:

![XOR Gate](https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/XOR_ANSI_Labelled.svg/180px-XOR_ANSI_Labelled.svg.png)

<img src="https://i.imgur.com/wLjtOnd.png" alt="XOR table" style="width: 200px;"></img>

<hr />

## Conclusion

So far, we have learned about the various gates used in computers. <br />
Actually, this is not the end. This is very first step to computer. <br />
Computer, however, is nothing but gates. All of the components in computer are made by various combinations of gates. <br />

Please do not afraid going forward to learn Computer Architecture.
It is extremely funny and interseting!