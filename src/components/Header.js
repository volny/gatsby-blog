import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import Logo from './logo.png'

const HeaderLink = styled(Link)`
  background-Image: none;
  &:hover {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #2980b9 1px, #2980b9 2px, rgba(0, 0, 0, 0) 2px);
  }
`

const LogoImage = styled.img`
  display: inline;
  width: 100px;
  @media (max-width: 750px) {
    margin: 0 0 0 1rem;
  }
`

const Navigation = styled.ul`
  listStyle: none;
  float: right;
  padding: 30px 0 0 0;
  @media (max-width: 750px) {
    margin: 0 1rem 0 0;
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

export default () => (
  <header>
    <Link to="/" style={{
      textShadow: `none`,
      backgroundImage: `none`,
    }}>
      <LogoImage src={Logo} alt="Logo for Felix Volny" />
    </Link>
    <Navigation>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
    </Navigation>
  </header>
)
