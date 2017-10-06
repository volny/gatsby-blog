import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const PostTitle = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: 5px 0;
`

const PostDate = styled.p`
  font-size: 1rem;
  color: #444444;
  margin-bottom: 0;
`

// overriding global components/HeadElements.js
const PostHeadElements = ({post}) => (
  <Helmet>
    <title>{post.frontmatter.title} - Felix Volny Blog</title>

    <meta name="description" content={post.frontmatter.excerpt} />
    <meta name="title" content={post.frontmatter.title} />

  </Helmet>
)

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <PostHeadElements post={post} />
      <div style={{padding: `8px 0 25px 0`}}>
        <PostDate>{post.frontmatter.date}</PostDate>
        <PostTitle>{post.frontmatter.title}</PostTitle>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query PostLayoutQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
`
