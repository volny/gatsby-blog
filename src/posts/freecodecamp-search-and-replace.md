---
title: "Search and Replace - freeCodeCamp using Modern JavaScript #5"
date: "2017-10-12"
summary: "This one looked too easy at first. Replace a substring? This is what String.prototype.replace is for ... but freeCodeCamp added an additional constraint - preserve case"
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

[This one](https://www.freecodecamp.org/challenges/search-and-replace) looked too easy at first. Replace a substring? This is what the `replace` method on `String` is for, so let's just write ...

```javascript
const myReplace = (string, target, replacement) =>
  string.replace(target, replacement);
```

... and we're done, right? Right??

Well no, because freeCodeCamp added an additional constraint - *preserve case*.

Plain JavaScript doesn't offer much help here, even though a number of libraries provide case-preserving string methods.

We'll solve this problem by writing some [functional code](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536). We will some **single-purpose**, **reusable**, and **pure** functions. *Pure* in this case means the output of the functions depends only on it's input. No magic, just a predictable function in the mathematical sense. We will then *compose* them together in a solution that's easy to read and debug.

So here are our building blocks:
1. detect if a string is uppercase or lowercase
2. compare the case of two strings
3. switch the case of a string

With this functionality in place we can solve this challenge! And because those functions are not tied to our particular problem we can reuse them later, or in an entirely different project. We could even make them available for other people, for example by publishing a package on npm.

## Detect a string's case

Let's just return a boolean indicating whether a string's first character is uppercase.

```javascript
const isUpperCase = string => {
  const charCode = string.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
};
```

## Compare two strings' case

```javascript
const isSameCase = (string1, string2) =>
  isUpperCase(string1) === isUpperCase(string2);
```

Notice how we are using the function we have created in the last step - *function composition* in action.

## Switch a string's case

We are using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to return a string, with it's first letter's case switched.

```javascript
const switchCase = string =>
  isUpperCase(string)
    ? `${string.charAt(0).toLowerCase()}${string.slice(1)}`
    : `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
```

## Use the functions

Let's write our case-sensitive replace function. The `replace` method optionally takes a function as it's second parameter. The return value will be what matches are replaced with.

```javascript
const myReplace = (string, target, replacement) =>
  string.replace(target, (match) => isSameCase(target, replacement)
    ? replacement
    : switchCase(replacement));
```

Fairly straight-forward. Do `target` and `replacement` have the same case? If not use `switchCase` on `replacement`.

## Solution

```javascript
const isUpperCase = string => {
  const charCode = string.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
};

const isSameCase = (string1, string2) =>
  isUpperCase(string1) === isUpperCase(string2);

const switchCase = string =>
  isUpperCase(string)
    ? `${string.charAt(0).toLowerCase()}${string.slice(1)}`
    : `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const myReplace = (string, target, replacement) =>
  string.replace(target, (match) => isSameCase(target, replacement)
    ? replacement
    : switchCase(replacement));
```

Thank you for reading, I'd be happy to hear any feedback, comments or question via [Twitter](https://www.twitter.com/volnyco) or [Email](mailto:website@felixvolny.co).