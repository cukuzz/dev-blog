import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '@components/layout';

export default ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, comment, siteUrl, author, sponsor } = metaData
  const { title: postTitle, date } = post.frontmatter

  return (
    <Layout>
      <div>{postTitle}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 280)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

