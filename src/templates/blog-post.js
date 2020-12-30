import React from "react"
import styles from "../styles/blogPost.module.css"

import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const slug = post.fields.slug
  const postImg = post.frontmatter.thumbnail.childImageSharp.fluid
  const postImgSrc = postImg.src

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        postImg={postImgSrc}
        slug={slug}
      />
      <section className={styles.nav_bg}/>
      <section className={styles.width_wrapper}>
        <article className={styles.article}>
          <header>
            <h1 className={styles.title}>{post.frontmatter.title}</h1>
            <p className={styles.date}>{post.frontmatter.date}</p>
            <Img
              className={styles.img}
              fluid={postImg}
              alt={`Photo by ${post.frontmatter.thumbnailAuthor}`}
            />
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY", locale: "hr")
        description
        thumbnail {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        thumbnailAuthor
      }
    }
  }
`
