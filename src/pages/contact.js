import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>franciscojrivash [at] gmail [dot] com</p>
        <h2>You can also reach out in</h2>
        <p>
          Twitter:{" "}
          <a href="https://www.twitter.com/franciscorivash">@franciscorivash</a>
        </p>
        <p>
          GH: <a href="https://www.github.com/frivas">@frivas</a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
