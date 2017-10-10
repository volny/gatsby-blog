---
title: "I wanna cry - it's line highlighting"
date: "2018-09-10"
summary: |
  Hot reload is really great, hugely useful when iterating on your site structure, style, or post contents. Be aware, however, that you will need to restart
---

But really, you probably don’t want your project directory structure dictated by the URLs you’d like to surface to the web. That’s where the path frontmatter property comes in. You can give a file whatever URL you want!

```javascript{10-13}
const port = process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err);
  }

  // Connect to ngrok in dev mode
  if (isDev) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
```

## yes silly, it supports multiple passages

You though we were gonna half-ass this one?

```javascript{1,5-7,12-14}
export default function createRoutes(store) { // eslint-disable-line
  return [
    {
      path: '/',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('HomePage').default);
        }, 'HomePage');
      },
    }, {
      path: '*',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('NotFoundPage').default);
        }, 'NotFoundPage');
      },
    },
  ];
}

```
