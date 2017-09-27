import React from 'react'
import Link from 'gatsby-link'

import Container from "../components/container"

export default () =>
  <Container>
    <h1>Hello</h1>
    <p>Paragraph Text</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <p>Paragraph Text</p>
    <br />
    <Link to="/counter/">Counter</Link>
    <span> / </span>
    <Link to="/page-2/"> Page 2 </Link>
  </Container>
