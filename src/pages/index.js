import React from 'react'
import Link from 'gatsby-link'

export default () =>
  <div style={{ color: 'salmon' }}>
    <h1>Hello</h1>
    <p>Everyone</p>
    <Link to="/counter/">Counter</Link>
    <br /> <br />
    <img src="http://lorempixel.com/400/200/" alt="" />
    <br /> <br />
    <Link to="/page-2/"> Page 2 </Link>

  </div>
