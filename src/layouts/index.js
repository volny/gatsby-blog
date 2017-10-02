import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import '../styling/prism-theme.css'
import Footer from '../components/Footer'
import Logo from './logo.png'

const HeaderLink = styled(Link)`
  background-Image: none;
  &:hover {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px);
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

export default ({ children, data }) =>
  <div style={{
    margin: `0 auto`,
    maxWidth: 750,
    padding: `2rem 1rem`
  }}>
    <header style={{
      marginBottom: `1.5rem`,
      minHeight: '3rem',
    }}>
      <Link to="/" style={{
        textShadow: `none`,
        backgroundImage: `none`,
      }}>
        <LogoImage src={Logo} alt={data.site.siteMetadata.title} />
      </Link>
      <Navigation>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </Navigation>
    </header>
    <div style={{padding: `0 0 ${data.site.siteMetadata.footerHeight}px 0`}}>{children()}</div>
    <Footer height={data.site.siteMetadata.footerHeight} />
  </div>

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        footerHeight
      }
    }
  }
`
