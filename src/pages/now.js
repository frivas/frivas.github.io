import React from "react"
import Emoji from "../components/Emoji"
import Layout from "../components/Layout"
import Head from "../components/Head"

const NowPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Now" />
        <h1>What I'm up to</h1>
        <h2>Primary focus</h2>
        <p>
          An NLP-based SaaS product. It is a project for a client, so can't
          disclose much. I will update when it is launched.
        </p>
        <h2>Reviewing books</h2>
        <p>
          On the side, I have been reviewing books for{" "}
          <a href="https://www.manning.com/">Manning Publications</a>.
        </p>
        <h2>Learning ML</h2>
        <p>
          I am taking the course on ML by{" "}
          <a href="https://www.mrdbourke.com/">Daniel Bourke</a> and{" "}
          <a href="https://zerotomastery.io/">Andrei Neagogie</a> in Udemy,{" "}
          <a href="https://links.zerotomastery.io/mlds_academy">
            Complete Machine Learning and Data Science: Zero to Mastery
          </a>{" "}
          . I'm about to finish it. It is a great course, I have learnt a lot.
          It is very comprehensive however you will not get hired after taking
          it nor becoming a master on the topic, ML takes a lot of practice and
          studying to learn. Looking forward to apply it in my next side
          project.
        </p>
        <h2>Intermittent Fasting and Pilates</h2>
        <p>
          I have always been looking for ways to stay in shape and, because of
          my genes and a deep love for food, I have to keep my weight in check
          at all times <Emoji symbol="🙃" />. I have lost around 20kg in 2017,
          kept it all through 2018 and in 2019 I gained a few kgs so I started
          exercising again, eating healthier and started doing Pilates. I am
          extremely happy that my studio recently opened again so I could go
          back to training. I am using{" "}
          <a href="https://www.zerofasting.com/">Zero</a> to track my IF. It is
          just amazing!. My Pilates studio is{" "}
          <a href="https://studio34.es/">Studio34</a>.
        </p>
      </Layout>
    </div>
  )
}

export default NowPage
