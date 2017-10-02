---
title: "I wanna cry - it's line highlighting"
date: "2018-09-10"
excerpt: |
  In the following code snippit, lines 1 and 4 through 6 will get the line highlighting. The line range parsing is done with https://www.npmjs.com/package/parse-numeric-range.
---

You can also add line highlighting. It adds a span around lines of
code with a special class `.gatsby-highlight-code-line` that you can
target with styles. See this readme for more info.

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

