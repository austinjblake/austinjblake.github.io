import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout >
      <Head title="Home"/>
      <h1> Hello,</h1>
      <h2>I'm Austin, a full stack Web Developer living in Iowa</h2>
      <p>Need a developer? <Link to="/contact">Get in touch</Link></p>
    </Layout>
  )
}

export default IndexPage