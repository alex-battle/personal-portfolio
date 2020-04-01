import React from 'react';

function AboutLanguages(){
    return(
        <div className="aboutLanguages">
        <div className="aboutLanguagesTitle">
            Languages and Frameworks
        </div>
        <div className="aboutLanguagesDescription">
            <div className="aboutLanguagesColumnOne">
            <div data-aos="zoom-in-right">
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap 4</li>
                    <li>Tailwind CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>React</li>
                </ul>
            </div>
            </div>
            <div className="aboutLanguagesColumnTwo">
            <div data-aos="zoom-in-left">
                <ul>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Sequelize</li>
                    <li>Ruby on Rails</li>
                    <li>Github</li>
                    <li>MongoDB</li>
                    {/* <li>Mongoose</li> */}
                </ul>
            </div>
            </div>

        </div>
        </div>
    )
}
export default AboutLanguages;