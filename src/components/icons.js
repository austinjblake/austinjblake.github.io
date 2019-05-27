import React from 'react'
import pdfImage from './pdf.png'
import githubImage from './github.jpg'
import mailImage from './mail.png'
import linkedinImage from './linkedin.png'
import iconsStyles from './icons.module.scss'
import Resume from '../pages/resume.pdf'

const Icons = () => {
  return (
    <div className={iconsStyles.iconList}>
      <a href='https://github.com/austinjblake' target="_blank" rel="noopener noreferrer">
        <img 
          className={iconsStyles.icon} 
          src={githubImage} 
          alt="github"
          title="Checkout my Github profile"
        />
      </a>
      <a href={Resume} target="_blank" rel="noopener noreferrer" type="application/pdf">
      <img 
        className={iconsStyles.icon} 
        src={pdfImage} 
        alt="resume"
        title="View and download a PDF copy of my resume"
      />
      </a>
      <a href="mailto:devjobs@austinjblake.dev">
        <img 
          className={iconsStyles.icon} 
          src={mailImage} 
          alt="email"
          title="Get in touch"
        />
      </a>
      <a href='www.linkedin.com/in/austin-blake-277333186' target="_blank" rel="noopener noreferrer">
        <img 
          className={iconsStyles.icon} 
          src={linkedinImage} 
          alt="linkedin"
          title="Visit me on LinkedIn"
        />
      </a>
    </div>
  )
}

export default Icons