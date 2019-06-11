import React from 'react'
import iconsStyles from './icons.module.scss'
import Resume from '../pages/resume.pdf'
import { graphql, useStaticQuery} from 'gatsby'
import Img from "gatsby-image"

const Icons = () => {
  const data = useStaticQuery(graphql`
  query {
    mail: contentfulAsset(id: { eq: "e9fc24fa-edce-5535-875a-45593d22594d" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
      file {
        url
      }
    }
    github: contentfulAsset(id: { eq: "948d0e03-0d10-5216-add7-29ca09d940d9" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
      file {
        url
      }
    }
    linkedin: contentfulAsset(id: { eq: "ec0b7cf4-05cd-5b77-9b1e-350e18683975" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
      file {
        url
      }
    }
    resume: contentfulAsset(id: { eq: "dfb71681-1c12-50dc-87e0-8030b8b90eca" }) {
      fluid {
        ...GatsbyContentfulFluid
      }
      file {
        url
      } 
    }
  }
  `)

  return (
    <div> 
    <div className={iconsStyles.iconList}>
      <a href='https://github.com/austinjblake' target="_blank" rel="noopener noreferrer">
        <Img 
          className={iconsStyles.icon} 
          fluid={data.github.fluid} 
          alt="github"
          title="Checkout my Github profile"
        />
      </a>
      <a href={Resume} target="_blank" rel="noopener noreferrer" type="application/pdf">
      <Img 
        className={iconsStyles.icon} 
        fluid={data.resume.fluid} 
        alt="resume"
        title="View and download a PDF copy of my resume"
      />
      </a>
      <a href="mailto:devjobs@austinjblake.dev">
        <Img 
          className={iconsStyles.icon} 
          fluid={data.mail.fluid} 
          alt="email"
          title="Get in touch"
        />
      </a>
      <a href='https://www.linkedin.com/in/austin-blake-277333186' target="_blank" rel="noopener noreferrer">
        <Img 
          className={iconsStyles.icon} 
          fluid={data.linkedin.fluid} 
          alt="linkedin"
          title="Visit me on LinkedIn"
        />
      </a>
    </div>
    </div>
  )
}

export default Icons