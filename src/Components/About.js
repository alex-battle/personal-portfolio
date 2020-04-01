import React from 'react';
import AboutMeBanner from './AboutMeBanner';
import AboutBannerMain from './AboutBannerMain';
import AboutMeDescription from './AboutMeDescription';
import AboutContact from './AboutContact';
import AboutResume from './AboutResume';
import AboutLanguages from './AboutLanguages';


function About(){
    return(
        <div className="about">
            <AboutMeBanner/>
            <AboutBannerMain/>
            <AboutMeDescription />
            <AboutLanguages />
            <AboutResume/>
            <AboutContact/>
            
        </div>
    )
}
export default About;