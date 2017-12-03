import React from 'react'

const Project = (props) => (
    <div className="project">
        <h3>{props.title}</h3>
        <div className="proj-img">
        <img src={props.img} />
        </div>
    </div>
)

export default Project