---
title: Some more code
date: "2017-09-29"
---
But wait... there's more!

  - *The best test setup:* Automatically guarantee code quality and non-breaking
    changes. (Seen a react app with 99% test coverage before?)
  - *Native web app:* Your app's new home? The home screen of your users' phones.
  - *The fastest fonts:* Say goodbye to vacant text.
  - *Stay fast*: Profile your app's performance from the comfort of your command
    line!
  - *Catch problems:* AppVeyor and TravisCI setups included by default, so your
    tests get run automatically on Windows and Unix.

```javascript
function sleep(duration) {
  return new Promise(function(resolve, reject) {
    setTimeout(()=> { resolve(0) }, duration);
  })
}

async function delayedMessage(message, delay) {
  let remainingTime = await sleep(delay)
  console.log(message, `(remaining time: ${remainingTime})`)
}

delayedMessage("World", 400).then(()=>{ console.log('done') })
delayedMessage("Hello", 200)
```

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- The first thing in any HTML file should be the charset -->
    <meta charset="utf-8">

    <!-- Make the page mobile compatible -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Allow installing the app to the homescreen -->
    <link rel="manifest" href="/manifest.json">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- iOS home screen icons -->
    <meta name="apple-mobile-web-app-title" content="react boilerplate">
    <link rel="apple-touch-icon" sizes="120x120" href="/icon-120x120.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png">
    <link rel="apple-touch-icon" sizes="167x167" href="/icon-167x167.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png">

    <link rel="icon" href="/favicon.ico" />
    <title>React.js Boilerplate</title>
  </head>
  <body>
    <!-- Display a message if JS has been disabled on the browser. -->
    <noscript>If you're seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>, please <strong>enable JS</strong> to make this app work.</noscript>

    <!-- The app hooks into this div -->
    <div id="app"></div>
    <!-- Open Sans Font -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <!-- A lot of magic happens in this file. HtmlWebpackPlugin automatically includes all assets (e.g. bundle.js, main.css) with the correct HTML tags, which is why they are missing in this HTML file. Don't add any assets here! (Check out the webpack config files in internals/webpack for details) -->
  </body>
</html>
```
