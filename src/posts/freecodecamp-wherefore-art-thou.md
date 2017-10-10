---
title: "Wherefore art thou - freeCodeCamp using Modern JavaScript #4"
date: "2017-10-10"
summary: "For this challenge we are passed an array of objects, and a source object. We should check if all the key-value pairs of the source are found in an object of the array, and if so return it."
tags:
  - freeCodeCamp
  - JavaScript
---

The [4th intermediate freeCodeCamp algorithm challenge](https://www.freecodecamp.org/challenges/wherefore-art-thou) - this one is all about comparing objects.

Checking if two objects are the same in JavaScript can be a tricky issue.
You'd think that `{'a': 1} === {'a': 1}` return `true` but that is not so - we are comparing if they are the **same object**, not if they contain the same key-value pairs.

For this challenge we are passed an array of objects, and a source object. We should check if all the key-value pairs of the source are found in an object of the array, and if so return it.

Ok, so the first thing to realize is that we are given an array, and will return a *subset* of it. That's what [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) is for, so let's use it

```javascript
function whatisinaname(collection, source) {
  return collection.filter((object) => {
    // ...
  });
};
```

Now we are down to a simpler Problem - checking if any object in the collection is a *superset* of the source object. If so, it will not be filtered out and we'll return it. Various JavaScript libraries provide that functionality, but we'll do it from scratch. So as we've seen at the beginning we can't just compare objects using `===`, but we can compare it's keys. `Object.keys()` gives us an array of an object's keys.

```javascript
function whatisinaname(collection, source) {
  return collection.filter((object) => {
    return Object.keys(source) // ...
    // we'll compare that the keys we find in the collection
  });
};
```

Once we have a key we can do `object[key] === source[key]` to do two things - check if the object has the key, and check if it's associated value is the same as the source's.  
That works for all cases except when the key is literally assigned to `undefined`, in which case we can't distinguish it from a missing key, but we'll leave this aside for simplicity's sake.

Almost done! Last thing is to chain the pieces together using the ES6 [`every` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) that checks if all elements in an array pass a test. That way it'll work even if the source object has multiple key-value pairs.

## Solution

```javascript
function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    return Object.keys(source).every(key => obj[key] === source[key]);
  });
};
```

One more cool thing about ES6 arrow functions: if we intend to return the whole body of a function we can wrap it in parens instead of curly braces and get rid of the `return` keyword 😎

```javascript
function whatIsInAName(collection, source) (
  collection.filter((obj) => (
    Object.keys(source).every(key => obj[key] === source[key]))
  )
);
```

Thank you for reading, I'd be happy to hear any feedback, comments or question via [Twitter](https://www.twitter.com/volnyco) or [Email](mailto:website@felixvolny.co).

You're also welcome to join the discussion at [Reddit](https://www.reddit.com/r/FreeCodeCamp/comments/751mle/using_es6_to_solve_freecodecamp_challenges_roman/?st=j8llkkkx&sh=2d9faea5) or the [FreeCodeCamp Forum](https://forum.freecodecamp.org/t/im-starting-a-blog-about-solving-freecodecamp-challenges-using-es6-what-do-you-think/152062).
