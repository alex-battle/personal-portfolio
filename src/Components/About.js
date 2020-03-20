import React from 'react';
import AboutMeBanner from './AboutMeBanner';
import AboutBannerMain from './AboutBannerMain';
import AboutMeDescription from './AboutMeDescription';
import AboutContact from './AboutContact';
import AboutResume from './AboutResume';


function About(){
    return(
        <div>
            <AboutMeBanner/>
            <AboutBannerMain/>
            <AboutMeDescription />
            <AboutResume/>
            <AboutContact/>
            
        </div>
    )
}
export default About;