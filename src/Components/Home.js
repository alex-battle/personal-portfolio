import React from 'react';
import HomeSecondBanner from './HomeSecondBanner';
import Languages from './Languages';
import HomeContact from './HomeContact';
import Projects from './Projects';
import HomeMainBanner from './HomeMainBanner';
import Qualifications from './Qualifications';

function Home() {
    return (
        <div>
            
            <HomeMainBanner />
            <HomeSecondBanner />
            <Projects />
            <Qualifications />
            <Languages />
            <HomeContact />
        </div>
    )
}
export default Home;