import React from 'react'
import styled from 'styled-components'

import AvatarImage from './avatar.jpg'

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const Avatar = styled.img`
  flex: 0 0 250px;
  width: 250px;
  height: 250px;
  margin: 0;
  @media (max-width: 750px) {
    align-self: flex-start;
  }
`

const Name = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Description = styled.div`
  flex: 1;
  padding: 0 0 0 2rem;
  @media (max-width: 750px) {
    padding: 2rem 0 0 0;
  }
`

export default () =>
  <div style={{margin: `-1.5rem 0 0 0`}}>
    <h1 style={{padding: `0  0 1rem 0`}}>About Me</h1>
    <Container>
      <Avatar src={AvatarImage} alt="Photo of me" />
      <Description>
        <Name>
          Felix Volny
        </Name>
        <p style={{margin: 0}}>
          I'm a Web and Mobile Developer. I write code and design User Interfaces. My favorite tools are modern Javascript and Sketch. I'm open to new ideas, but currently my bet is Web Technologies FTW 🚀
        </p>
      </Description>
    </Container>
    <h2 style={{fontSize: `2rem`}}> Get in Touch</h2>
    <p>
      To connect with me please click on one of the icons below 👇
    </p>
  </div>
