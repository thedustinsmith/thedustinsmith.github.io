import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import favicon from './images/favicon.ico'

let css
if (process.env.NODE_ENV === `production`) {
  try {
    css = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
    render() {
        return (
            <html op="news" lang="en">
              <head>
                {this.props.headComponents}
      
                <meta name="referrer" content="origin" />
                <meta charSet="utf-8" />
                <meta
                  name="description"
                  content="Dustin Smith - Web Developer"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
                <title>{this.props.title} - Dustin Smith</title>
                <link href='http://fonts.googleapis.com/css?family=Average+Sans|Fjalla+One' rel='stylesheet' type='text/css' />
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
                <link rel="icon" href={favicon} />
                {css}
              </head>
              <body>
                <div
                  id="___gatsby"
                  dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
                {this.props.postBodyComponents}
              </body>
            </html>
          )
    }
}

Html.propTypes = propTypes;
module.exports = Html;