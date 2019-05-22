import React from 'react'
import pdfImage from './pdf.png'
import githubImage from './github.png'
import mailImage from './mail.png'
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
        title="Download a PDF copy of my resume"
      />
      </a>
      <a href="mailto:contact@austinjblake.dev">
        <img 
          className={iconsStyles.icon} 
          src={mailImage} 
          alt="email"
          title="Get in touch"
        />
      </a>
    </div>
  )
}

export default Icons