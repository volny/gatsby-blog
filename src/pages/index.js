import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const PostTitle = styled.h2`
  font-size: 2em;
  margin-top: 0;
`

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h4 style={{color: '#444444', marginBottom: '5px'}}>{node.frontmatter.date}</h4>
            <PostTitle>{node.frontmatter.title}</PostTitle>
            <p style={{color: 'hsla(0,0%,0%,0.8)'}}>
              {node.excerpt}
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
