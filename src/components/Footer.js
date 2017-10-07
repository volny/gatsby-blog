import React, { Component } from 'react'

import { WebsiteIcon, TwitterIcon, LinkedinIcon, GithubIcon, EmailIcon } from './icons.js'
import './footer.css'

export default class Footer extends Component {
  render() {
    const { annoying } = this.props
    const _annoying = {position: 'fixed', bottom: 0, left: 0,}

    return (
      <footer style={annoying ? _annoying : {}}>
      <div className="icon-container">
        <a className="icon-link" href="https://www.volny.co" target="_blank">
          <WebsiteIcon />
        </a>
        <a className="icon-link" href="https://twitter.com/volnyco" target="_blank">
          <TwitterIcon />
        </a>
        <a className="icon-link" href="https://www.linkedin.com/in/felix-volny" target="_blank">
          <LinkedinIcon />
        </a>
        <a className="icon-link" href="https://github.com/volny" target="_blank">
          <GithubIcon />
        </a>
        <a className="icon-link" href="mailto:website@felixvolny.com" target="_blank">
          <EmailIcon />
        </a>
      </div>
      </footer>
    )
  }
}
