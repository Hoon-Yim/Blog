---
templateKey: blog-post
id: https://hoony.netlify.app/csharpswitch/
title: "[C#] Switch statement | expression"
slug: /csharpswitch
date: 2021-03-13T16:54:03.125Z
description: Everything about switch in C#
tags:
  - English
  - C#
  - Switch
---

# __Switch__

_Switch_ is a keyword of any programming language.<br />
It helps programmer to select which code block should be executed in some conditions.

Actually, it resembles _if_ keyword.<br />
It takes lots of logical conditions and check if it is adequate to go over the next block.

<hr />

## Switch Statement

Here is the way of using _switch_ statement:

```C#
switch (condition) 
{
  case constant1:
    // code block
    break; 

  case constant2:
    // code block
    break;

  case constant3:
    // code block
    break;

  default: 
    // code block
    break;
}
```

<br />

This code will receive some condition and check from top to down.<br />
When the condition corresponds to a particular constant, then it will go into its code block.<br />
Code will be go down and execute each line of code untill it meets _break_ keyword.<br />
__Break__ keyword helps you to stop the switch statement whenever you intended to.<br />

<br />

> __WARNING__:<br />
> Only _integer_ and _string_ and _data_ type is available for inside of switch statement.<br />
> In case you want to complain about it, only _integer_ is possible to use in C and C++.

Let's see the example of using switch statement:

```C# 
switch (number1)
{
    case 1:
        Console.WriteLine("ONE");
        break;
        
    case 2:
        Console.WriteLine("ONE");
        break;
        
    case 3:
        Console.WriteLine("ONE");
        break;
    
    default:
        Console.WriteLine("number1 is not one of 1, 2, and 3");
        break;
}

Result: "ONE"
```

<br /> 

_String_ in switch statement is literally the same with integer. So I won't tackle that one.

One additional feature of this switch statement from C# 7.0 is that we can use data type to branch the condition.<br />
The following code is example of using data type for branching:

```C#
for (int i = 0; i < 3; ++i)
{
    object obj;
    string input = Console.ReadLine();
    if (int.TryParse(input, out int integer))
        obj = integer;
    else if (float.TryParse(input, out float float_point))
        obj = float_point;
    else
        obj = input;

    switch (obj)
    {
        case int num:
            Console.WriteLine($"{obj} is integer");
            break;
        
        case float f:
            Console.WriteLine($"{obj} is float");
            break;
        
        default: 
            Console.WriteLine($"{obj} is not valid");
            break;
    }
}

Result: 100
        100 is integer
        100.0
        100 is float
        One Hundred
        One Hundred is not valid
```

<br />

You are also able to add another condition using ___when___ keyword.<br />
Its function is exectly the same with if statement inside switch branch.
Let's see how it works:

```C#

// ... the preceding code

switch (obj)
{
  case int num when num >= 0:
      Console.WriteLine($"{obj} is integer and greater than or equal to 0");
      break;

  case int num:
      Console.WriteLine($"{obj} is integer");
      break;

  case float f when f >= 0:
      Console.WriteLine($"{obj} is float and greater than or equal to 0");
      break;
      
  case float f:
      Console.WriteLine($"{obj} is float");
      break;

  default: 
      Console.WriteLine($"{obj} is not valid");
      break;
}
```

<hr />

## Switch Expression 

Switch Expression is kind of magical feature of C# <sup>Java also has</sup>.<br />
The main purpose of switch statement and expression are similar but the situation that is needed is quite different.

Switch expression checks conditions and derive result.<br />
On the other hand, switch statements simply execute specific code blocks, not necessarilly derive values.

Let's just see the code, since a picture paints a thousand words<br />
This code will define your grade according to your score:

```C#
Console.Write("Please enter your score: ");
int score = Int32.Parse(Console.ReadLine());
int assignment = 100;

// to truncate the number of units
string grade = (score / 10 * 10) switch
{
    100 => "A+",
    90 when assignment > 90 => "A",
    80 => "B",
    70 => "C",
    60 => "D",
    _ => "F"
};

Console.WriteLine($"Your Grade: {grade}");
```

[__<sup> </sup>\_<sup> </sup>__] means default in switch statement.<br />
the left side of [__=>__] operator is condition and right side of it is value that we want to assign.

When you need to initialize a value in some conditions, then switch expression is way to go.<br />
However, in case you have a code other than initializing, switch statements are appropriate. 