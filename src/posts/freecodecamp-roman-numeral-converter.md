---
title: "freeCodeCamp using Modern JavaScript #3 - Roman Numeral Converter"
date: "2017-10-09"
summary: "This could be messy. freeCodeCamp asks us to write a converter for roman numerals. Let's use modern JavaScript to solve the problem elegantly."
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

This could be messy. [freeCodeCamp asks us](https://www.freecodecamp.org/challenges/roman-numeral-converter) to write a converter for roman numerals.

The roman numeral system has this unique rule that it doesn't allow more than 3 repeating digits - instead you move it behind the last one, where it will be subtracted, not added.  
So 9 is `IX`, not `VIIII`, and 44 is `XLIV`, not `XXXXIIII`, as you'd naively think.  **If you attempt to implement this rule in your code it gets complex quickly.**

Instead let's make our lives easy and write a Map. We'll include those special cases in our Map - so you'll find `IV`, `IX` etc treated as separate roman numerals.

```javascript
const map = new Map();
map.set("M", 1000);
map.set("CM", 900);
map.set("D", 500);
map.set("CD", 400);
map.set("C", 100);
map.set("XC", 90);
map.set("L", 50);
map.set("XL", 40);
map.set("X", 10);
map.set("IX", 9);
map.set("V", 5);
map.set("IV", 4);
map.set("I", 1);
```

We use a [JavaScript Map Object](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) introduced in ES6. A map holds elements in insertion order, and allows for a wonderfully readable `for..of` loop, as we'll see shortly.

Let's use a recursive function. For each roman symbol we add to our output we run once through our function. Our base case applies when the input hits zero:

```javascript
const convertToRoman = (number) => {
  if (number === 0) {
    return '';
  }

  // TODO: go through map
  // TODO: recursive call

};
```

Remember that a Map is ordered, and we purposefully inserted our entries in order from biggest to smallest. We'll now go through it with a `for..of` loop top to bottom and see if our number is bigger than the number in our map. The first one where that's the case will map to the roman symbol that we should add to our output. Problem solved.

```javascript
for (const [roman, integer] of map.entries()) {
  if (number >= integer) {
      // ... we found the next roman symbol
  }
}
```

`for..of` loops work great with Maps. We reference the entries as an array `[key, value]` and can name them appropriately for nice, readable code. **Interestingly, since we can no intention of reassigning those values, we can use `const`!**

Almost there. The last thing left now is the recursive call. We call the function again with what we've already processed subtracted, and add it to our output.

```javascript
for (const [roman, integer] of map.entries()) {
  if (number >= integer) {
    return roman + convertToRoman(number - integer);
  }
}
```

Here's our final code:

```javascript
const map = new Map();
map.set('M', 1000);
map.set('CM', 900);
map.set('D', 500);
map.set('CD', 400);
map.set('C', 100);
map.set('XC', 90);
map.set('L', 50);
map.set('XL', 40);
map.set('X', 10);
map.set('IX', 9);
map.set('V', 5);
map.set('IV', 4);
map.set('I', 1);

const convertToRoman = (number) => {
  if (number === 0) {
    return '';
  }

  for (const [roman, integer] of map.entries()) {
    if (number >= integer) {
      return roman + convertToRoman(number - integer);
    }
  }
};
```

If you've made it this after I'd be happy to hear from you - questions, suggestions and comments are welcome - get in touch via the social icons below 📫
