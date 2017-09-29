import React from 'react'
import Link from 'gatsby-link'

import Container from "../components/container"

export default () =>
  <Container>
    <h1>Hello</h1>
    <p>This is Blog.</p>
    <p>Read <Link to="/post-1/">Blog Post</Link></p>
    <p>Marvel at <Link to="/counter/">Counter</Link></p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <p>
    </p>
  </Container>
