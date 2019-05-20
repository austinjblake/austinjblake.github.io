import React from 'react'
import { Link } from 'gatsby'
import pdfImage from './pdf.png'
import githubImage from './github.png'
import mailImage from './mail.png'
import iconsStyles from './icons.module.scss'

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
      <Link to="/resume">
        <img 
          className={iconsStyles.icon} 
          src={pdfImage} 
          alt="resume"
          title="Download a PDF copy of my resume"
        />
      </Link>
      <Link to="/email">
        <img 
          className={iconsStyles.icon} 
          src={mailImage} 
          alt="email"
          title="Get in touch"
        />
      </Link>
    </div>
  )
}

export default Icons