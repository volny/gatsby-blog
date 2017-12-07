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
      I’m a Frontend Engineer working mostly with React. I love to write code and design User Interfaces.
      Currently interested in real-time data visualization and blockchain technology.
    </Description>
    <a href="https://www.volny.co/#contactForm" target="_blank">
      You can reach me here
    </a>.
  </Container>
)
