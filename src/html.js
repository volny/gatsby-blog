import React from "react"

import Favicon16 from './static/favicon-16x16.png';
import Favicon32 from './static/favicon-32x32.png';
import AppleTouchIcon from './static/apple-touch-icon.png';

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
          {this.props.headComponents}
          <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
          <meta name="theme-color" content="#2980b9">
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
