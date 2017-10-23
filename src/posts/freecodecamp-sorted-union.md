---
title: "Sorted Union - freeCodeCamp using Modern JavaScript #10"
date: "2017-10-22"
summary: "Did someone say unique values? It't time for `Set`! This is an exercise where ES6 can really shine, `Set` is made to store unique values, and that's exactly what we're asked to do here. Let's take it step-by-step."
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

Did someone say unique values? It't time for `Set`! This is an exercise where ES6 can really shine, `Set` is made to store unique values, and that's exactly what we're asked to do here. Let's take it step-by-step.

We're given an arbitrary number of arrays as input, so let's use a [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) to collect them all into a single arguments array that we can work with.

```javascript
const uniteUnique = (...arrays) => {
  // ...
};
```

We need to get the values out of each array that was passing into our function, so now that we've collected them all we need to spread them out again. We will also concatenate them to get a single array containing all the values we are interested in.

```javascript
Array.prototype.concat(...arrays)
```
In the next step we'll use our `Set` trick. By calling `new Set()` on an array we easily and declaratively eliminate duplicates.

Last step is to turn the `Set` back into an array that freeCodeCamp expects as output. We can use `Array.from` to get the solution.

```javascript
const uniteUnique = (...arrays) => {
  const set = new Set(Array.prototype.concat(...arrays));
  return Array.from(set);
};
```

## Advanced solution: flatten arrays recursively

Interestingly freeCodeCamp specifically wants nested arrays in place, as seen in one of their tests:

> uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].

As an advanced exercise though let's write a recursive function that allows us to put in arbitrarily deeply nested arrays.

We `reduce` the input, test if the next element is an array with `Array.isArray()`, and if so recursively `concat` it together.

```javascript
const flatten = array => array
  .reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

const uniteUnique = (...arrays) => Array.from(new Set(flatten(arrays)));
```
