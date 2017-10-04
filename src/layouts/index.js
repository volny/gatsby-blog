import React from 'react'
import styled from "styled-components"

import '../styling/prism-theme.css'

import Footer from '../components/Footer'
import Header from '../components/Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 2rem 1rem;
`

export default ({ children, data }) =>
  <Container>
    <Header />
    <div style={{ padding: `0 0 ${data.site.siteMetadata.footerHeight}px 0`}}>
      {children()}
    </div>
    <Footer height={data.site.siteMetadata.footerHeight} />
  </Container>

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        footerHeight
      }
    }
  }
`
