import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const ResumePage = () => (
    <div id="resume">
      <Helmet 
            title="Resume | Dustin Smith"
        />
        <h1><Link to="/">Dustin Smith</Link></h1>

        <div className="contact">
            <div className="email"><a href="mailto:thedustinsmith@gmail.com">thedustinsmith@gmail.com</a></div>
            <div className="phone"><a href="tel:5732272202">573.227.2202</a></div>
        </div>

        <section className="employment">
            <h2 className="gray-header">Employment</h2>
            <div className="entry">
                <h3>Foliotek Inc <span className="dates">2009 - <em>[Present]</em></span></h3>
                <span className="sub-header">Project Lead</span>
                <p className="description">Lead several different projects.  Specialized in front end development using Javascript, jQuery, and Backbone.  Developed on the full stack: C# ASP.NET Webforms & MVC, PHP, NodeJS, and MSSQL.  Also did a considerable amount of server management.</p>
            </div>
        </section>

        <section className="education">
            <h2 className="gray-header">Education</h2>
            <div className="entry">
                <h3>University of Missouri - Columbia <span className="dates">2006 - 2010</span></h3>
                <span className="sub-header">Bachelor of Science in Information Technology</span>
            </div>
        </section>

        <section className="experience">
            <h2 className="gray-header">Experience</h2>

            <div className="skill">
                <label>Javascript</label>
                <div className="bar bar-5 b1">7+ years</div>
            </div>
            <div className="skill">
                <label>C# MVC/WebForms</label>
                <div className="bar bar-5 b2">7+ years</div>
            </div>
            <div className="skill">
                <label>NodeJS</label>
                <div className="bar bar-2 b3">4+ years</div>
            </div>
            <div className="skill">
                <label>Html/CSS</label>
                <div className="bar bar-10 b4">10+ years</div>
            </div>
        </section>

        <section className="awards">
            <h2 className="gray-header">Awards</h2>
            <div className="entry">
                <h3>StaticShowdown 2016 <span className="dates">February 2016</span></h3>
                <span className="sub-header">Best Team Entry</span>
                <p className="description">My teammate and I built a collaborative puzzle game.  
                You could upload your own image, our website would break it into puzzle pieces, 
                and then one or more browsers could connect and assemble the puzzle together.</p>
            </div>
            <div className="entry">
                <h3>NodeKnockout 2014 <span className="dates">November 2014</span></h3>
                <span className="sub-header">Top 20</span>
                <p className="description">My team built a mosaic generator using bleeding edge HTML5 features of javascript, and used Node as our backend to share mosaics, and use other people's images to help create your mosaic.  It's not in current development anymore, but you can find it at <a href="http://www.imgzaic.com" target="_blank">www.imgzaic.com</a>.</p>
                <span className="sub-header">Source:&nbsp;</span>
                <a href="https://github.com/thedustinsmith/nodezaic">Github</a>
            </div>
        </section>
    </div>
)

export default ResumePage