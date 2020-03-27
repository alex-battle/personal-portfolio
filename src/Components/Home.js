import React from 'react';
import HomeSecondBanner from './HomeSecondBanner';
import Languages from './Languages';
import HomeContact from './HomeContact';
import Projects from './Projects';
import HomeMainBanner from './HomeMainBanner';

function Home() {
    return (
        <div>
            
            <HomeMainBanner />
            <HomeSecondBanner />
            <Projects />
            <Languages />
            <HomeContact />
        </div>
    )
}
export default Home;