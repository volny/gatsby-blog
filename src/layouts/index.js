import React from 'react'
import styled from "styled-components"

import '../styling/prism-theme.css'

import Footer from '../components/Footer'
import Header from '../components/Header'
import HeadElements from '../components/HeadElements'

const Container = styled.div`
  max-width: 750px;
  padding: 0 1rem 2rem 1rem;
  flex: 1;
  /* weird hack because margin auto and align-items produce overflow issues */
  @media (min-width: 750px) {
    margin: 0 auto;
  }

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

export default ({ data, children }) => {
  const { annoying} = data.site.siteMetadata.footer
  return (
    <Wrapper>
      <HeadElements />
      <Header />
      <Container>{children()}</Container>
      {/* <Footer annoying={annoying} style={{}}/> */}
    </Wrapper>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        footer {
          annoying
        }
      }
    }
  }
`
