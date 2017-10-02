import React from 'react'

import { WebsiteIcon, TwitterIcon, LinkedinIcon, GithubIcon, EmailIcon } from './icons.js'
import './footer.css'

export default ({ height }) => (
  <footer style={{height: `${height}px`}}>
    <a className="icon-link" href="https://www.example.com" target="_blank">
      <WebsiteIcon />
    </a>
    <a className="icon-link" href="https://twitter.com" target="_blank">
      <TwitterIcon />
    </a>
    <a className="icon-link" href="https://www.linkedin.com" target="_blank">
      <LinkedinIcon />
    </a>
    <a className="icon-link" href="https://github.com" target="_blank">
      <GithubIcon />
    </a>
    <a className="icon-link" href="mailto:someguy@gmail.com">
      <EmailIcon />
    </a>
  </footer>
)
