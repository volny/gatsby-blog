---
title: "Pig Latin - freeCodeCamp using Modern JavaScript #7"
date: "2017-10-16"
summary: "Regex Time! Let's brush up on our Regex skills to solve this challenge. There's an excellent guide by MDN  that explains everything you need to know to solve this exercise simply and elegantly."
tags:
  - "freeCodeCamp"
  - "JavaScript"
---

Regex Time! Let's brush up on our Regex skills to solve [this challenge](https://www.freecodecamp.org/challenges/pig-latin). There's an [excellent guide by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that explains everything you need to know to solve this exercise simply and elegantly.

First thing to notice is that our procedure changes depending on whether the string starts with a vowel. We can test for that using a *character set*. `[aeiou]` matches vowels, and the *negated character set* `[^aeiou]` matches all non-vowels.

The next puzzle piece are [*capturing parentheses*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_parenthesized_substring_matches). Also known as *substring matches*, regular expressions in parentheses are 'remembered for later'.

So let's write our first Regex. It will match strings that begin with a vowel:

```javascript
  const startsWithVowel = /^([aeiou])(.*)/;
```

A couple of things to note here: We are looking for the beginning of a string (`^`), match a vowel in the first position and remember it. Then we match the rest of the string with `.*` and remember that too.

Next, our Regex for strings that don't start with a vowel. freeCodeCamp talks about 'consonant clusters', so we need to match a sequence of consonants up to the first vowel with `+`.

```javascript
  const startsWithConsonant = /^([^aeiou]+)(.*)/;
```

Notice the use of a *negated character set* matching everything that is not enclosed in the brackets. That's our consonat cluster, and we remember it.

## Replacing the string

JavaScript's `replace` method is quite versatile. [MDN tells us](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) the syntax is

```
str.replace(regexp|substr, newSubstr|function)
```

So it takes a new substring **or a function** to replace the match. And guess what the function takes as arguments ... the substring matches we remembered with our capturing parentheses.

[Actually it takes a few more arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter), including the match, it's position and the string we tested on. Click the link to see exactly what arguments it takes, and in what order. We will use [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) to collect them all into an array.

## Solution

```javascript
const translatePigLatin = string => {
  const startsWithVowel = /^([aeiou])(.*)/;
  const startsWithConsonant = /^([^aeiou]+)(.*)/;
  return string
    .replace(startsWithVowel, (...args) => `${args[1]}${args[2]}way`)
    .replace(startsWithConsonant, (...args) => `${args[2]}${args[1]}ay`);
};
```

... or more concisely ...

```javascript
const translatePigLatin = string => string
  .replace(/^([aeiou])(.*)/, (...args) => `${args[1]}${args[2]}way`)
  .replace(/^([^aeiou]+)(.*)/, (...args) => `${args[2]}${args[1]}ay`);
```

As you can see the `args` array holds all function arguments, including our substring matches in position 1 and 2. We use [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to put them back together in the way freeCodeCamp specified. Done 👍