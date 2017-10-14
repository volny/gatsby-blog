---
title: "DNA Pairing - freeCodeCamp using Modern JavaScript #6"
date: "2017-10-14"
summary: "This one is actually fairly easy, so this will be a short post. We'll do some basic array manipulation and make a `Map` for the DNA base pairs. This creates a mapping of each of the 4 letters to it's partner."
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

This one is actually fairly easy, so this will be a short post. We'll do some basic array manipulation and make a `Map` for the DNA base pairs. This creates a mapping of each of the 4 letters to it's partner. To see another example of `Map` in action take a look at the [Roman Numeral Converter](https://www.felixvolny.com/posts/freecodecamp-roman-numeral-converter/).

```javascript
const map = new Map([['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'] ]);
```

We can use the built-in `split` method to get an array of letters from a string. Then we'll `map` over that array to complete this exercise.

```javascript
const map = new Map([['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'] ]);
const pairElement = string =>
  string.split('').map(letter => [letter, map.get(letter)]);
```

Easy peasy 😎