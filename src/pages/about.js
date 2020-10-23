import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>Hi! I'm Francisco.</h1>
        <p>Thanks for visiting my personal blog, I hope you enjoyed it.</p>
        Would like to talk? <Link to="/contact">Contact me.</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
