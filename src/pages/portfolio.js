import React from 'react'
import gwf from '../images/gwf.png';
import imgz from '../images/imgz.png';
import Project from '../components/project';
import Helmet from 'react-helmet'

let others = (
    <div>
    <Project title="Compass Church" img={"img/compass.png"} />
    <Project title="Foliotek Presentation" img={"img/foliotek-presentation.png"} />
    </div>
);

const PortfolioPage = () => (
    <div className="projects">
    <Helmet 
        title="Portfolio | Dustin Smith"
    />
        <h2>Projects</h2>
        <div className="projects-container">
            <Project title="Nodezaic" img={imgz} />
            <Project title="Golf With Friends" img={gwf} />
        </div>
    </div>
)

export default PortfolioPage