import React from 'react';
import Button from 'react-bootstrap/Button'

function Languages() {
    return (
        <div className="languages">
            <div className="techBanner">
                <div className="techBannerTitle">Technical Skills</div>
            </div>
            <div data-aos="fade-right"
                // data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="5"
                data-aos-duration="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
            >
                <div className="languageIcons">
                    <div className="ruby">
                        <img src="https://img.icons8.com/wired/100/000000/ruby-programming-language.png" />
                        RUBY
                    </div>
                    <div className="react">
                        <img src="https://img.icons8.com/wired/100/000000/react.png" />
                        REACT
                    </div>
                    <div className="css">
                        <img src="https://img.icons8.com/ios/100/000000/css.png" />
                        CSS
                    </div>
                    <div className="mysql">
                        <img src="https://img.icons8.com/ios/100/000000/mysql.png" />
                        MYSQL
                    </div>
                    <div className="javascript">
                        <img src="https://img.icons8.com/ios-filled/100/000000/javascript-logo.png" />
                        JAVASCRIPT
                    </div>
                    <div className="html">
                        <img src="https://img.icons8.com/ios/100/000000/html.png" />
                        HTML
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Languages;