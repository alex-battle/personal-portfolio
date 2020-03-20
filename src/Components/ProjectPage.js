import React from 'react';
import ProjectOne from './ProjectOne'
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';
import ProjectPageBanner from './ProjectPageBanner';

function Projects(){
    return(
        <div > 
            <ProjectPageBanner />
            <ProjectOne />
            <ProjectTwo />
            <ProjectThree />
        </div>
    )
}
export default Projects;