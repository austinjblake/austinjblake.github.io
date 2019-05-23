import React from 'react'
//import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         author
  //       }
  //     }
  //   }
  // `)
  return(
    <footer className={footerStyles.footer}>
      <div className={footerStyles.contactContainer}>
        <div className={footerStyles.contactItem}>
          <p>
            <em>Have a vision for a Website or App you want to see brought to life?</em>
            <br></br>
            <a href="mailto:freelance@austinjblake.dev"><strong>Send me a message here</strong></a> and let's talk about creating your next big idea!!
          </p>
        </div>
        <div className={footerStyles.divider}>
        </div>
        <div className={footerStyles.contactItem}>
          <p>
            <em>Looking for a full-time developer to join your team?</em>
            <br></br>
            <a href="mailto:devjobs@austinjblake.dev"><strong>Reach out to me here</strong></a> with the relevent information and I'll get back to you as soon as possible
          </p>
        </div>
      </div>
      <div>
        <p>Created by Austin Blake, ©2019. Powered by <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a></p>
      </div>
    </footer>
  )
}

export default Footer