import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return(
    <Layout>
      <Head title="Contact" />
      <h1>Get in Touch</h1>
      <h2>contact@austinjblake.dev</h2>
      <p>Check out my work! <a href='https://github.com/austinjblake' target="_blank" rel="noopener noreferrer">Github</a></p>
    </Layout>
  )
}

export default ContactPage