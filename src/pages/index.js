import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const IndexPage = () => (
<div className="">
  <Helmet 
    title="Dustin Smith"
  />
  <h2>Hi</h2>
  <p>
    I'm Dustin.  I'm a web developer based out of Kansas City, Missouri.  
    I'm currently employed at <a href="https://www.foliotek.com">Foliotek</a>.
  </p>
  <p>
    I've had a lot of experience in all aspects of web development: front end; back end; database; 
    infrastructure management; and several others.  While my experience varies, my passion lies in Javascript.
  </p>
  <p>
    This site doesn't see much updating, but every once in a while I'll get bored enough to update it.
  </p>
</div>
)

export default IndexPage
