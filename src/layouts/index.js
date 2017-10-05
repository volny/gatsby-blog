import React, { Component } from 'react'
import styled from "styled-components"

import '../styling/prism-theme.css'

import Footer from '../components/Footer'
import Header from '../components/Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 0 1rem 2rem 1rem;
`

export default ({ data, children }) => {
  const { height, annoying} = data.site.siteMetadata.footer
  return (
    <div>
      <Header />

      <Container style={{minHeight: `calc(100vh - ${height}px)`}}>
        <div style={{ padding: `0 0 ${annoying ? height : 0}px 0`}}>
          {children()}
        </div>
      </Container>

      <Footer
        height={height}
        annoying={annoying}
      />
    </div>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        footer {
          height
          annoying
        }
      }
    }
  }
`
