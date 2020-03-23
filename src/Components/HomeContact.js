import React from 'react';

function HomeContact(){
    return(
        <div className="homeContact">
            <div className="contactTitle">
            Contact Me
            </div>
            <div className="contactLinks">
            <a href="https://twitter.com/alexthedatadawg" target="_blank">
            <img src="https://img.icons8.com/nolan/64/twitter-squared.png"/>
            </a>
            <a href="https://www.linkedin.com/in/alexander--battle/" target="_blank">
            <img src="https://img.icons8.com/nolan/64/linkedin.png"/>
            </a>
            <a href="mailto:alexnder.battle@gmail.com?subject=JobOpportunity" target="_blank">
            <img src="https://img.icons8.com/nolan/64/gmail.png"/>
            </a>
            <a href="https://github.com/alex-battle" target="_blank">
            <img src="https://img.icons8.com/nolan/64/github.png"/>
            </a>
            </div>
        </div>
    )
}
export default HomeContact;