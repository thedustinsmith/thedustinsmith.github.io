import React from "react"
import PropTypes from "prop-types"
import Link from 'gatsby-link'

const Bare = ({children}) => (
    <div className="bare">
        {children()}
    </div>
)
export default Bare