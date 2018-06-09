import React from 'react'
import styled from 'styled-components'

import AvatarImage from './avatar.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  margin: 0;
  border-radius: 125px;
`

const Name = styled.h2`
  padding: 0 0 0.5rem 0;
`
const Description = styled.p`
  max-width: 600px;
  margin-bottom: 0.5rem;
`

export default () => (
  <Container>
    <Avatar src={AvatarImage} alt="Photo of me" />
    <Name>Felix Volny</Name>
    <Description>
      I’m a Frontend & UI Engineer currently living and working in Bangkok.<br/>
      I made this blog to try out <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and play with features like Service Workers and Server-Side Rendering. I never got around to actually blogging much, though that might change soon.
    </Description><br/>
    <a href="mailto:website@felixvolny.co" target="_blank">
      Contact me
    </a>.


  </Container>
)
