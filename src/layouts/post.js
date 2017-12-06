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
    <title>{post.frontmatter.title}</title>

    {/* Google  */}
    <meta name="title" content={post.frontmatter.title} />
    <meta name="description" content={post.frontmatter.summary} />
    <link rel="canonical" href={`https://www.felixvolny.com${post.fields.slug}`} />

    {/* Open Graph */}
    <meta property="og:title" content={post.frontmatter.title} />
    <meta property="og:description" content={post.frontmatter.summary} />
    <meta property="og:url" content={`https://www.felixvolny.com${post.fields.slug}`} />

    {/* Twitter Cards */}
    <meta name="twitter:title" content={post.frontmatter.title} />
    <meta name="twitter:description" content={post.frontmatter.summary} />
  </Helmet>
)

export default ({ data }) => {
  const post = data.markdownRemark
  const { showDates } = data.site.siteMetadata
  return (
    <div>
      <PostHeadElements post={post} />
      <div style={{padding: `8px 0 25px 0`}}>
        {showDates && <PostDate>{post.frontmatter.date}</PostDate>}
        <PostTitle>{post.frontmatter.title}</PostTitle>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql `
  query PostLayoutQuery($slug: String) {
    site {
      siteMetadata {
        showDates
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        summary
      }
    }
  }
`
