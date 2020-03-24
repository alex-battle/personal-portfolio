import React from 'react';
import HomeSecondBanner from './HomeSecondBanner';
import Languages from './Languages';
import HomeContact from './HomeContact';
import Projects from './Projects';
import HomeMainBanner from './HomeMainBanner';
import ProjectPage from './ProjectPage'
import Nav from './Nav';
import About from './About';
import Contact from './Contact';

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