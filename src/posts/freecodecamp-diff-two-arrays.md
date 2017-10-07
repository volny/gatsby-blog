---
title: "freeCodeCamp using Modern JavaScript #2 - Diff Two Arrays"
date: "2017-10-08"
excerpt: "For this freeCodeCamp challenge we'll write a function to compute the symmetric difference between two arrays."
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

[This time](https://www.freecodecamp.org/challenges/diff-two-arrays) we'll write a function to compute the symmetric difference between two arrays.

First let's make sure we understand the question.  
We want the items that are found in one of the two arrays, but not in both. So we will have to go through both arrays, for each item checking if it's found in the other array - if it is, it's a duplicate and we're not interested. If it isn't, it's a part of the symmetric difference and we'll want to add it to the output array.

How do we go through an array and cherrypick items we're interested in? We use the `filter()` function.  
To check if an item is present in an array we have several options. One way is to use `indexOf()`, which returns the index of the item, or `-1` if not found. Since this is a modern JavaScript series though, we will instead use `includes()`, which is built for our use-case exactly and returns a bool whether the items is present or not. Let's put our words into code:

```javascript
array1.filter(item => !array2.includes(item))
```

Great, but that's not enough - we have to go through *both* arrays.

```javascript
array2.filter(item => !array1.includes(item))
```

Now that we've got our unique items for each array, let's join them together using the spread operator to finish up our function computing the symmetric difference between two arrays.

```javascript
const diffArray = (array1, array2) => {
  return [
    ...array1.filter(item => !array2.includes(item)),
    ...array2.filter(item => !array1.includes(item))
  ];
};
```

If you've made it this after I'd be happy to hear from you - questions, suggestions and comments are welcome - get in touch via the social icons below 📫
