import React, { Component } from 'react'

import { WebsiteIcon, TwitterIcon, LinkedinIcon, GithubIcon, EmailIcon } from './icons.js'
import './footer.css'

export default class Footer extends Component {
  render() {
    const { height, annoying } = this.props
    const _height = {height: `${height}px`,}
    const _styles = {...height, position: 'fixed', bottom: 0, left: 0,}

    return (
      <footer style={annoying ? _styles : _height}>
        <a className="icon-link" href="https://www.felixvolny.com" target="_blank">
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
        <a className="icon-link" href="mailto:website@felixvolny.com">
          <EmailIcon />
        </a>
      </footer>
    )
  }
}
