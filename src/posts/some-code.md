---
title: Some code
date: "2017-08-21"
summary: |
  This is some beautiful code:
  You can also add line highlighting. It adds a span around lines of code with a special class `.gatsby-highlight-code-line` that you can target with styles. See this readme for more info.
---

This is some beautiful code:

You can also add line highlighting. It adds a span around lines of
code with a special class `.gatsby-highlight-code-line` that you can
target with styles. See this readme for more info.

In the following code snippit, lines 1 and 4 through 6 will get
the line highlighting. The line range parsing is done with
https://www.npmjs.com/package/parse-numeric-range.

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```javascript
console.log('hi')
```

<pre class="language-javascript">
console.log('hi')
function hi (s) {
  return false
}
</pre>
