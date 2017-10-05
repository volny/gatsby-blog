import React from 'react'

import AppleTouchIcon from './static/favicons/apple-touch-icon.png'
import Favicon16 from './static/favicons/favicon-16x16.png'
import Favicon32 from './static/favicons/favicon-32x32.png'
import SafariIcon from './static/favicons/safari-pinned-tab.svg'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="description" content="Web and Mobile Application Development Blog by Felix Volny" />
          <meta name="robots" content="all" />
          <meta name="author" content="Felix Volny" />
          <link rel="canonical" href="https://www.felixvolny.com/" />

          <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
          <link rel="mask-icon" href={SafariIcon} color="#5bbad5" />

          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
