import React from 'react';

function ProjectThree() {
    return (
        <div className="project">

            <div className="projectDescription">
                <div className="projectTitle">
                    <div data-aos="fade-down">
                        BarTap
                    </div>
                </div>
                <div data-aos="fade-left">
                 Uses React.js and Foursquare's API to search local bars by category and pull up 5-10 top bars. Sort them by Business name, address, hours on one page. Switching between different routes(Home page, bar type, list, and actual bar page). I built this in 3 days.
                </div>
                <div className="projectLinks">
                    <div data-aos="fade-up"
                    data-aos-duration="500">
                        <a href='https://bartap.surge.sh' target="_blank">View Site</a>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-duration="700">
                    <a href='https://github.com/alex-battle/Bar-Tap' target="_blank">Github</a>
                    </div>
                </div>
            </div>
            <div className="projectThree">
                ProjectPhoto
            </div>
        </div>
    )
}
export default ProjectThree;