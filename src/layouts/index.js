import React, { Component } from 'react'
import styled from "styled-components"

import '../styling/prism-theme.css'

import Footer from '../components/Footer'
import Header from '../components/Header'

const Container = styled.div`
  max-width: 750px;
  padding: 0 1rem 2rem 1rem;
`

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default ({ data, children }) => {
  const { annoying} = data.site.siteMetadata.footer
  return (
    <Wrapper>
      <Header />

      <Container style={{flex: 1}}>{children()}</Container>

      <Footer annoying={annoying} style={{}}/>
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
