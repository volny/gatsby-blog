import React from 'react'

import { WebsiteIcon, TwitterIcon, LinkedinIcon, GithubIcon, EmailIcon } from './icons.js'
import './footer.css'

export default ({ height }) => (
  <footer style={{height: `${height}px`}}>
    <a className="icon-link" href="https://www.felixvolny.com" target="_blank">
      <WebsiteIcon />
    </a>
    <a className="icon-link" href="https://twitter.com/volnyco" target="_blank">
      <TwitterIcon />
    </a>
    <a className="icon-link" href="https://linkedin.com/felixvolny" target="_blank">
      <LinkedinIcon />
    </a>
    <a className="icon-link" href="https://githbub.com/volny" target="_blank">
      <GithubIcon />
    </a>
    <a className="icon-link" href="mailto:website@felixvolny.com">
      <EmailIcon />
    </a>
  </footer>
)
