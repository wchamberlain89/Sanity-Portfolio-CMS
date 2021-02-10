import { Link } from "gatsby"
import { Image } from 'gatsby-image'
import PropTypes from "prop-types"
import React from "react"

const mainNavigationLinks = [
  {
    title: 'blog',
    path: '/blog'
  },
  {
    title: 'portfolio',
    path: '/portfolio'
  },
  {
    title: 'about',
    path: '/about'
  },
  {
    title: 'contact',
    path: '/contact'
  }
]

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <div>
        <h1>Ward Chamberlain</h1>
        
        <div className='header-links'>
          {mainNavigationLinks.map((link) => (
            <Link to={link.path}>{link.title}</Link>
          ))}
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
