import React from 'react';
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectPageBanner from './ProjectPageBanner';
import AboutContact from './AboutContact';

function Projects(){
    return(
        <div > 
            <ProjectPageBanner />
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
            <AboutContact />
        </div>
    )
}
export default Projects;