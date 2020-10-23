import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import { formatReadingTime } from "../utils/helpers"
import Head from "../components/Head"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              spoiler
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <ol className={indexStyles.posts}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <li className={indexStyles.post}>
                <Link to={`/blog${node.fields.slug}`}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>— {node.frontmatter.date}</span>
                  </h3>
                  <small>{`${formatReadingTime(node.timeToRead)}`}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler,
                    }}
                  />
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default IndexPage
