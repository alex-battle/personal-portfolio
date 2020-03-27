import React from 'react';
import {Link} from 'react-router-dom'

function Projects(){
    return(
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="700"
            data-aos-easing="ease-in-out" 
            > 
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
            <div className='projectButton'>
            <a href="/projects" className="button">More Projects</a>
            </div>
            </div>
            <div className="featuredProject">
                ProjectPhoto
            </div>
        </div>
        </div>
    )
}
export default Projects;