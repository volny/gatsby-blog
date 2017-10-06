---
title: "freeCodeCamp using Modern JavaScript #1 - Sum All Numbers in a Range"
date: "2017-10-07"
excerpt: "The first intermediate challenge is a bit of a warmup question - we'll write a function that take an array of exactly 2 numbers, and returns the sum of those 2 numbers and all numbers in between."
---

[The first intermediate challenge](https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range) is a bit of a warmup question - we'll write a function that take an array of exactly 2 numbers, and returns the sum of those 2 numbers and all numbers in between.

We'll be using modern JavaScript, meaning we're not afraid of ES6 and beyond features. The goal is this series is not to write code with optimal browser support, but to use all the great features JavaScript has to offer as of 2017.

So let's jump right in and use the spread operator to pass contents of the array into `Math.min` and `Math.max` which will give us the larger and smaller number.

```javascript
  const low = Math.min(...array);
  const high = Math.max(...array);
```

Next we need all number between those two, inclusive. Creating a range of numbers in JavaScript is always a little awkward, since there is no `range()` function that we know from languages like Python.  
The method we'll go for here is a new array filled with it's keys, which are of course a range of numbers starting at 0.

```javascript
[...Array(length).keys()]
```

What should it's length be? The lower number subtracted from the higher number, and we'll add 1 to the higher, because it's in inclusive range including both upper and lower bound.

```javascript
[...Array(maximum + 1 - minimum).keys()]
```

Finally to arrive at our range, let's add the lower number to each element, so that our range doesn't start at 0, but instead starts at the lower number.

```javascript
[...Array(maximum + 1 - minimum).keys()]
  .map(number => number + minimum)
```

That was a long and awkward way to arrive at something simple, but unfortunately that's all JavaScript currently gives us to work with, so we'll take it. The beauty of working with JavaScript is that the language is evolving at such a rapid pace, we're virtually guaranteed a better solution to pop up soon. So - keep patient and closely follow [the forefront of JavaScript's evolution](https://github.com/tc39/proposals).

Almost done. All that's left is to `reduce` our array, adding up all numbers in it.  
Here's the complete function:

```javascript
const sumAll = (array) => {
  const minimum = Math.min(...array);
  const maximum = Math.max(...array);
  return [...Array(maximum + 1 - minimum).keys()]
    .map(number => number + minimum)
    .reduce((prev, curr) => prev + curr);
};
```

If you've made it this after I'd be happy to hear from you - questions, suggestions and comments are welcome - get in touch via the social icons below 📫
