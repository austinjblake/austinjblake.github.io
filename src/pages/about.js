import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I am a self taught full stack Web Developer with a focus on Javascript, Node.js, and React. I absolutely love learning new things every day and solving problems</p>
      <h2><Link to='/contact'>Contact Me</Link></h2>
    </Layout>
  )
}

export default AboutPage