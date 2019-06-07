import React from 'react'
import pdfImage from './pdf.png'
import githubImage from './github.jpg'
import mailImage from './mail.png'
import linkedinImage from './linkedin.png'
import iconsStyles from './icons.module.scss'
import Resume from '../pages/resume.pdf'
import { graphql, useStaticQuery } from 'gatsby'

const Icons = () => {
  const data = useStaticQuery(graphql`
  query {
    mail: contentfulAsset(id: { eq: "e9fc24fa-edce-5535-875a-45593d22594d" }) {
      file {
        url
      }
    }
    github: contentfulAsset(id: { eq: "948d0e03-0d10-5216-add7-29ca09d940d9" }) {
      file {
        url
      }
    }
    linkedin: contentfulAsset(id: { eq: "ec0b7cf4-05cd-5b77-9b1e-350e18683975" }) {
      file {
        url
      }
    }
    resume: contentfulAsset(id: { eq: "dfb71681-1c12-50dc-87e0-8030b8b90eca" }) {
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
        <img 
          className={iconsStyles.icon} 
          src={data.github.file.url} 
          alt="github"
          title="Checkout my Github profile"
        />
      </a>
      <a href={Resume} target="_blank" rel="noopener noreferrer" type="application/pdf">
      <img 
        className={iconsStyles.icon} 
        src={data.resume.file.url} 
        alt="resume"
        title="View and download a PDF copy of my resume"
      />
      </a>
      <a href="mailto:devjobs@austinjblake.dev">
        <img 
          className={iconsStyles.icon} 
          src={data.mail.file.url} 
          alt="email"
          title="Get in touch"
        />
      </a>
      <a href='https://www.linkedin.com/in/austin-blake-277333186' target="_blank" rel="noopener noreferrer">
        <img 
          className={iconsStyles.icon} 
          src={data.linkedin.file.url} 
          alt="linkedin"
          title="Visit me on LinkedIn"
        />
      </a>
    </div>
    </div>
  )
}

export default Icons