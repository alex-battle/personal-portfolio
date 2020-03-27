import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function HomeSecondBanner() {
    return (
        <div className="homeSecondBanner">
            <div data-aos="fade-up"
            // data-aos="fade-down"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
            >
                <div className="whoAmI">
                    Who is Alex Battle?
                </div>
                <div className="secondBannerDescription">
                    <div className="fadingEffect"></div>
                        Full stack web developer with a passion for
                        learning new technologies and the continual
                        improvement of myself and those around me. I
                        am a motivated young professional with an
                        aptitude for innovation and creative
                        problem-solving. I bring strong skills in
                        critical analysis, teamwork and project management
                        that help companies create an environment that focuses
                        on productivity and positivity. With my history as a
                        real estate agent, I bring an unmatched drive and
                        persistence with me as a self-starter as well as an equal
                        ability to add value as a team member whether it be a
                        large or small role. I am always looking for opportunities
                        to leverage my unique set of experiences, I relish the chance
                        to put them to use in new ways.
                    </div>
                    <div className="aboutMeButton">
                        <a href='/about' className="button">Learn More</a>
                    {/* <a href='/about'><button>Learn more</button></a> */}
                    </div>
                {/* <div className="aboutMeButtonHolder">
                <a href='/about'><button>Learn more</button></a>
                </div> */}
            </div>
        </div>
    )
}
export default HomeSecondBanner;