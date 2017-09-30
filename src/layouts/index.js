import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

// import 'prismjs/themes/prism-solarizedlight.css'
import '../styling/prism-theme.css'

const HeaderLink = styled(Link)`
  background-Image: none;
  &:hover {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #1ca086 1px, #1ca086 2px, rgba(0, 0, 0, 0) 2px);
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: rgba(150, 150, 150, 0.5);
  padding: 0 15%;
  @media (max-width: 700px) {
    padding: 0 5%;
  }
`

const FooterItem = styled.span`
  margin: auto;
  color: #ffffff;
  &:hover {
    color: tomato;
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
    marginBottom: `1.5rem`
  }}>
    <Link to="/" style={{
      textShadow: `none`,
      backgroundImage: `none`,
    }}>
      <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/files/">Files</ListLink>
      <ListLink to="/counter/">Counter</ListLink>
    </ul>
  </header>
  {children()}
  <Footer>
    <FooterItem>HI</FooterItem>
    <FooterItem>HI</FooterItem>
    <FooterItem>HI</FooterItem>
    <FooterItem>HI</FooterItem>
    <FooterItem>HI</FooterItem>
  </Footer>
</div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
