import React from "react"

import Container from "../components/container"
import styles from "./about-css-modules.module.css"

const User = ({ username, avatar, excerpt }) =>
  <div className={styles.user}>
    <img src={avatar} className={styles.avatar} alt={`Avatar for ${username}`} />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {username}
      </h2>
      <p className={styles.excerpt}>
        {excerpt}
      </p>
    </div>
  </div>

export default () =>
  <Container>
    <h1>Who we are</h1>
    <p>
      We are this amazing company in the middle of nowhere. You'd totally like us if you'd know us personally.
    </p>
    <h2>Meet our Team</h2>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
