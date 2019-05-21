import React from 'react'
import { Link } from 'gatsby'
import layoutStyles from '../components/layout.module.scss'
import Head from '../components/head'
import Footer from '../components/footer'
import headerStyles from '../components/header.module.scss'
import Icons from '../components/icons'

const IndexPage = () => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Head title="Home"/>
        <h1 className={headerStyles.header}>
          <Link className={headerStyles.title} to='/'>
            Austin J Blake
          </Link>
        </h1>
        <Icons />
        <h1> Hello,</h1>
        <h2>I'm Austin, a full stack Web Developer living in Iowa</h2>
        <p>Need a developer? <Link to="/contact">Get in touch</Link></p>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage