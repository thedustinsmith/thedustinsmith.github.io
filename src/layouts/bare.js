import React from "react"
import PropTypes from "prop-types"
import Link from 'gatsby-link'

const Bare = ({children}) => (
    <div className="bare body-wrapper">
        {children()}
    </div>
)
export default Bare