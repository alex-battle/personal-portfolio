import React from 'react';
import HomeSecondBanner from './HomeSecondBanner';
import Languages from './Languages';
import HomeContact from './HomeContact';
import Projects from './Projects';

function Home(){
    return(
        <div>
            
            <HomeSecondBanner/>
            <Projects />
            <Languages/>
            <HomeContact/>
        </div>
    )
}
export default Home;