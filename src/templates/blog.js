import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { formatReadingTime } from "../utils/helpers"
import Head from "../components/Head"

import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
      timeToRead
    }
  }
`

// ToDO: Fix how the post looks like.
const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h1 className={blogStyles.titleMargin}>
        {props.data.markdownRemark.frontmatter.title}
      </h1>
      <p className={blogStyles.pStyle}>
        {props.data.markdownRemark.frontmatter.date} ·{" "}
        {`${formatReadingTime(props.data.markdownRemark.timeToRead)}`}
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

export default Blog
