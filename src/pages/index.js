import React from 'react'
import { Link } from 'gatsby'
import layoutStyles from '../components/layout.module.scss'
import Head from '../components/head'
import Footer from '../components/footer'
import headerStyles from '../components/header.module.scss'
import Icons from '../components/icons'
import SkillsBox from '../components/skills'
import DemoCarousel from '../components/carousel'
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
        <h2>I'm Austin, a self-taught Full Stack Web Developer living in the Quad Cites</h2>
          <div className={contentStyles.about}>
            <Fade bottom delay='1000'>
            <p>Making beautiful and responsive websites</p>
            <p>Fast and smart webapps</p>
            <p>With a strong focus on Javascript</p>
            <p>And a problem-solving oriented approach</p>
            </Fade>
          </div>
          
        <SkillsBox />
        <DemoCarousel />
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage