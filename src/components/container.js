import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const HeaderLink = styled(Link)`
  background-Image: none;
  &:hover {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px);
  }
`

const ListLink = ({ to, children }) =>
  <li style={{
    display: `inline-block`,
    marginRight: `1rem`,
  }}>
    <HeaderLink
      to={to}>
      {children}
    </HeaderLink>
  </li>

  export default ({ children }) =>
  <div style={{
    margin: `0 auto`,
    maxWidth: 650,
    padding: `1.25rem 1rem`
  }}>
    <header style={{
      marginBottom: `1.5rem`
    }}>
      <Link to="/" style={{
        textShadow: `none`,
        backgroundImage: `none`,
      }}>
        <h3 style={{ display: `inline` }}>Blog</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/counter/">Counter</ListLink>
      </ul>
    </header>
    {children}
  </div>
