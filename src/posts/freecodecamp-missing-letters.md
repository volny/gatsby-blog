---
title: "Missing Letters - freeCodeCamp using Modern JavaScript #9"
date: "2017-10-20"
summary: "There are many ways to solve this challenge. Obvious helpers are JavaScript's built-in methods to convert between strings and Unicode values, String.fromCharCode() and charCodeAt()."
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

There are many ways to solve [this challenge](https://www.freecodecamp.org/challenges/missing-letters). Obvious helpers are JavaScript's built-in methods to convert between strings and Unicode values, `String.fromCharCode()` and `charCodeAt()`.

Notice that freeCodeCamp doesn't ask for *all* missing letters from a sequence, but only one, presumably the first one. So for example, the string `'az'` should return just `'b'`, not all letters between.

This seems like an artificial limitation, and I think it's more instructive to write a function that gives us all missing letters. That's also, in my opinion, more akin to a situation you'd encounter in the real world. So let's write a function that returns all missing letters, and then from there it's trivial to just return the first one to fulfill freeCodeCamp's requirements.

## Make an array of letters

The approach we'll take here is first make an array of the letters of the alphabet, in order. We can then compare it to our input string and return the difference.

There are a few ways to produce such an array in JavaScript. The one we'll use here is to first make an array of the correct length, i.e. 26 elements ...

```javascript
const letters = [...Array(26)]
```

We know that the letters a-z that we're looking for have Unicode values from 97 to 122, so let's `map` over the array to fill it with those letters. The array elements have indexes from 0 to 25 (obviously), we'll add 97 to get the correct values and run it through `String.fromCharCode()`.

```javascript
const letters = [...Array(26)].map((e, i) => String.fromCharCode(i + 97));
// -> ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
```

## Get a complete sequence

Next, let's `slice` our `letters` array in the right places to compare it with the input string. We'll use the first and last letter from the input string, `string.charAt(0)` and `string.slice(-1)` respectively as bounds.

Notice that we're using `slice` to get the last character of a string, that's just a handy little trick for convenience, you could also just say `string.charAt(string.length - 1)`

```javascript
const first = letters.indexOf(string.charAt(0));
const last = letters.indexOf(string.slice(-1));
const sequence = letters.slice(first, last + 1);
```

## Putting it all together

Awesome. The last thing to do is check which letters in the sequence are not found in the input string. Those are the missing letters we are looking for.

To accomplish that we'll `filter` the array, using the `includes` method on string, which is part of ES6. Letters that are not included in the string are filtered out.

```javascript
const fearNotLetter = (string) => {    
    const letters = [...Array(26)].map((e, i) => String.fromCharCode(i + 97));
    const first = letters.indexOf(string.charAt(0));
    const last = letters.indexOf(string.slice(-1));
    const sequence = letters.slice(first, last + 1);
    return sequence.filter(letter => !string.includes(letter));
}
```

Oh, but freeCodeCamp is only interested in the first missing letter:

```javascript
const fearNotLetter = (string) => {    
    const letters = [...Array(26)].map((e, i) => String.fromCharCode(i + 97));
    const first = letters.indexOf(string.charAt(0));
    const last = letters.indexOf(string.slice(-1));
    const sequence = letters.slice(first, last + 1);
    const missingLetters = sequence.filter(letter => !string.includes(letter));
    return missingLetters[0];
}
```

And that's it. Obviously we didn't do for the easiest, fastest or most elegant solution here. The aim here is to show off some of modern JavaScript's declarative methods to manipulate data.

I hope you got something out of it and learned a thing or two. Whether you liked it or not, I'd be happy to hear any questions or comments via [Twitter](https://www.twitter.com/volnyco) or [Email](mailto:website@felixvolny.com) 📬
