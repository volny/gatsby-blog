import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import Logo from './logo.svg'
import LogoHover from './logo_hover.svg'

const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
  width: 750px;
  @media (max-width: 750px) {
    width: 100%;
  }
`

const HeaderLink = styled(Link)`
  background-image: none;
  &:hover {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #2980b9 1px, #2980b9 2px, rgba(0, 0, 0, 0) 2px);
  }
`

const LogoDiv = styled.div`
  background-image: url('${Logo}');
  height: 100px;
  width: 100px;
  &:hover {
    background-image: url('${LogoHover}');
  }
`

const Navigation = styled.ul`
  listStyle: none;
  padding-top: 1rem;

  /*
  float: right;
  padding: 30px 0 0 0;
  @media (max-width: 750px) {
    margin: 0 1rem 0 0;
  }
  */
`

const ListLink = ({ to, children }) =>
  <li style={{
    display: `inline`,
    marginRight: `1rem`,
    fontSize: '110%',
  }}>
    <HeaderLink
      to={to}>
      {children}
    </HeaderLink>
  </li>

export default () => (
  <Header>

    <HeaderContainer>
      <Link style={{backgroundImage: 'None'}} to="/">
        <LogoDiv />
      </Link>


      <Navigation>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </Navigation>
    </HeaderContainer>

  </Header>
)
