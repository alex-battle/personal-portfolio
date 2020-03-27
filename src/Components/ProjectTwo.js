import React from 'react';

function ProjectTwo(){
    return(
        <div className="project">  
    
        <div className="projectDescription">
            <div className="projectTitle">
                <div data-aos="fade-down">
                    Budget
                </div>
            </div>
            <div data-aos="fade-left">
                This is a replica Budget Car Rental app. By replica I mean new and improved. The is a desktop-first design provided by Ux team. My main goal was to duplicate Budget.com website and add eco-friendly options using Sequelize, Express and React.js. UX/UI Team (Bryn, Greg, Victoria) provided wireframes for me to follow to see to completion within a week.
            </div>
            <div className="projectLinks">
                <div data-aos="fade-up"
                    data-aos-duration="500">
                    <a href='http://budget-boyz.herokuapp.com'target="_blank">View Site</a>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-duration="700">
                    <a href='https://alex-battle.github.io/Budget/' target="_blank">Github</a>
                    </div>
                </div>
            </div>
        <div className="projectTwo">
            ProjectPhoto
        </div>
        </div>
    )
}
export default ProjectTwo;