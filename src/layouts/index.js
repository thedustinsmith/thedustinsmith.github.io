import React from "react"
import PropTypes from "prop-types"
import Link from 'gatsby-link'

import "../styles/index.scss"

const Layout = ({ children }) => (
  <div className="body-wrapper">
    <header>
      <h1><Link to="/">Dustin Smith</Link></h1>
      <nav id="nav-responsive">
        <Link to="/portfolio">Portfolio</Link>
        {/*<Link to="/contact">Contact</Link> */}
        <Link to="/resume">Resume</Link>
      </nav>
      <nav id="nav-main">
      <Link to="/portfolio">Portfolio</Link>
        {/*<Link to="/contact">Contact</Link> */}
      <Link to="/resume">Resume</Link>
      </nav>
    </header>
    <main>
      <div className="main-wrap">
        {children()}
      </div>
    </main>
    <footer>
        &copy; Dustin Smith <span className="copy-year">{new Date().getUTCFullYear()}</span>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout