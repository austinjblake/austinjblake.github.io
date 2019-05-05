import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I am a self taught full stack Web Developer with a focus on Javascript, Node.js, and React. I absolutely love learning new things every day and solving problems</p>
      <h2><Link to='/contact'>Contact Me</Link></h2>
      <Footer />
    </div>
  )
}

export default AboutPage