import React from 'react';
import {Link, Redirect} from 'react-router-dom'

function Projects(){
    return(
        <div className="projects">  
            <div className="projectBanner">
                <div className="projectsTitle">
                Projects
                </div>
            </div>
            <div className="featuredProjectDescription">
                <div className="featuredProjectTitle">
                    Estate.ly
                </div>
            Estate.ly is a real estate app allowing users to input, search, and view properties. The goals of this project is to mimic the workflow of local luxury real estate brokerage websites. Features included in this project allow users to input properties and property info into the backend database powered by Ruby based on their status, whether they are for sale or for rent, and category in which the Estate.ly firm has a "contract" on. Another feature included in this application is the ability to search from an external api powered by Zillow to list real time properties for sale.
            <div className='projectlink'>
            <a href="/projects">
            <button type="button">Learn More</button>
            </a>
            </div>
            </div>
            <div className="featuredProject">
                ProjectPhoto
            </div>
        </div>
    )
}
export default Projects;