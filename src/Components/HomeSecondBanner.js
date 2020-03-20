import React from 'react';
import {Link} from 'react-router-dom'

function HomeSecondBanner(){
    return(
        <div className="homeSecondBanner">
            <div className="whoAmI">
            Who is Alex Battle?
            </div>
            <div className="secondBannerDescription">
            Full stack web developer with a passion for 
            learning new technologies and the continual 
            improvement of myself and those around me. I 
            am a motivated young professional with an 
            aptitude for innovation and creative 
            problem-solving. I bring strong skills in 
            critical analysis, teamwork and project management 
            that help companies create an environment that focuses 
            on productivity and positivity. With my history as a 
            real estate agent, I bring an unchallengeable drive and 
            persistence with me as a self-starter as well as an equal 
            ability to add value as a team member whether it be a 
            large or small role. I am always looking for opportunities 
            to leverage my unique set of experiences, I relish the chance 
            to put them to use in new ways. 
            </div>
            <div className="aboutMeButtonHolder">
            <Link to="/about">
            <button type="button">Learn More</button>
            </Link>
            </div>
        </div>
    )
}
export default HomeSecondBanner;