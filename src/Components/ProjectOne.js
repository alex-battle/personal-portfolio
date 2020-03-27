import React from 'react';

function Project1(){
    return(
        <div className="project">  
    
            <div className="projectDescription">
                <div className="projectTitle">
                <div data-aos="fade-down">
                    Estate.ly
                    </div>
                </div>
                <div data-aos="fade-left">
                    Estate.ly is a real estate app allowing users to input, search, and view properties. The goals of this project is to mimic the workflow of local luxury real estate brokerage websites. Features included in this project allow users to input properties and property info into the backend database powered by Ruby based on their status, whether they are for sale or for rent, and category in which the Estate.ly firm has a "contract" on. Another feature included in this application is the ability to search from an external api powered by Zillow to list real time properties for sale.
                </div>
                <div className="projectLinks">
                    <div data-aos="fade-up"
                    data-aos-duration="500">
                        <a href='http://budget-boyz.herokuapp.com' target="_blank">View Site</a>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-duration="700">
                        <a href='https://github.com/alex-battle/Estate.ly/' target="_blank">Github</a>
                    </div>
                </div>
                </div>
            <div className="projectOne">
                {/* <img   src='' */}
            </div>
            </div>
    )
}
export default Project1;