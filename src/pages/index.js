import React from 'react'
import { Link } from 'gatsby'
import layoutStyles from '../components/layout.module.scss'
import Head from '../components/head'
import Footer from '../components/footer'
import headerStyles from '../components/header.module.scss'
import Icons from '../components/icons'
import SkillsBox from '../components/skills'
import contentStyles from '../components/content.module.scss'
import Fade from 'react-reveal/Fade'

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
        <h2>I'm Austin, a full stack Web Developer living in the Quad Cites</h2>
          <div className={contentStyles.about}>
            <h2><em><i>Self taught dev...</i></em></h2>
            <Fade bottom delay='1000'>
            <h4>Making beautiful and responsive websites</h4>
            <h4>Fast and smart webapps</h4>
            <h4>With a strong focus on Javascript</h4>
            <h4>And a problem-solving oriented approach</h4>
            </Fade>
          </div>
          
        <SkillsBox />
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage