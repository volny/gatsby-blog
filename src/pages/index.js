import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const PostTitle = styled.h2`
  font-size: 2em;
  margin: 0;
  padding: 5px 0;
`

const PostDate = styled.p`
  font-size: 1rem;
  color: #444444;
  margin-bottom: 0;
`

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id} style={{padding: '8px 0'}}>
          <Link to={node.fields.slug}>
            <PostDate>{node.frontmatter.date}</PostDate>
            <PostTitle>{node.frontmatter.title}</PostTitle>
            <p style={{color: 'hsla(0,0%,0%,0.8)'}}>
              {node.frontmatter.excerpt}
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
