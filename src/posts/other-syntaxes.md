---
title: Trying out other Syntaxes
date: "2018-12-21"
excerpt: |
  This is some beautiful code:
  You can also add line highlighting. It adds a span around lines of code with a special class `.gatsby-highlight-code-line` that you can target with styles. See this readme for more info.
---

This is some beautiful code:

You can also add line highlighting. It adds a span around lines of
code with a special class `.gatsby-highlight-code-line` that you can
target with styles. See this readme for more info.

## Swift

```swift{4-5}
names.indexOf("Taylor")
names.index(of: "Taylor")

"Taylor".writeToFile("filename", atomically: true, encoding: NSUTF8StringEncoding)
"Taylor".write(toFile: "somefile", atomically: true, encoding: String.Encoding.utf8)

SKAction.rotateByAngle(CGFloat(M_PI_2), duration: 10)
SKAction.rotate(byAngle: CGFloat(M_PI_2), duration: 10)

UIFont.preferredFontForTextStyle(UIFontTextStyleSubheadline)
UIFont.preferredFont(forTextStyle: UIFontTextStyle.subheadline)

override func numberOfSectionsInTableView(tableView: UITableView) -> Int
override func numberOfSections(in tableView: UITableView) -> Int

func viewForZoomingInScrollView(scrollView: UIScrollView) -> UIView?
func viewForZooming(in scrollView: UIScrollView) -> UIView?

NSTimer.scheduledTimerWithTimeInterval(0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
Timer.scheduledTimer(timeInterval: 0.35, target: self, selector: #selector(createEnemy), userInfo: nil, repeats: true)
```

## Bash

```bash
#!/bin/bash
...
if [[ ! -e $OUT_FILE ]];
then
   echo "grabbing $URL"
   set -x
   curl --fail --noproxy $SERV -s -S $URL -o $OUT_FILE
   set +x
fi
```

# CSS

```css{1}
@keyframes flipOutX {
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  animation-name: flipOutX;
  backface-visibility: visible !important;
}
```

# SASS

```scss
@import "bourbon";

// Variables
$slideCount: 4;
$slideWidth: #{(100 / $slideCount)}#{"%"};
$slideWrapperWidth: #{($slideCount * 100)}#{"%"};

$media :     screen;
$feature :   min-width;

$screen-sm:  768px !default;
$screen-md:  992px !default;
$screen-lg:  1200px !default;

// Mixins

@mixin respond-to($breakpoint) {
  @media only #{$media} and ($feature: #{$breakpoint}) { @content }
}
```
