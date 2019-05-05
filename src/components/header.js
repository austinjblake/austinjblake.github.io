import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return(
    <header>
      <h3>Austin J Blake</h3>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header