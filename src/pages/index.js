import React from 'react'
import Link from 'gatsby-link'

export default () =>
  <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
    <h1>Hello</h1>
    <p>Paragraph Text</p>
    <img src="http://lorempixel.com/400/200/" alt="" />
    <p>Paragraph Text</p>
    <br />
    <Link to="/counter/">Counter</Link>
    <span> / </span>
    <Link to="/page-2/"> Page 2 </Link>

  </div>
