import React from 'react';
import aboutUsOne from '../../../../images/about-us/about-us-2.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className="about-us-heading">
                <h1 >About us</h1>
                <p>We offer physical therapy services since 2014</p>
            </div>
            <div className="about-us-second">
                <div className="about-img-one img-fluid">
                    <img src={aboutUsOne} alt="" />
                </div>
                <div className="caring-for-health">
                    <h1>Caring for health
                        <br />
                        is most important</h1>
                    <p>Diagnosing oral diseases. Promoting oral health and disease prevention. Creating treatment plans to maintain or restore the oral health of their patients. Interpreting x-rays and diagnostic tests.</p>
                    <h3>Teeth is asset for our body.</h3>
                    <p> Dentistry allows you to be your own boss. Dentists can balance their personal and professional lives to meet their individual needs and desires. Dentistry provides opportunities in a variety of private and public settings including private practice.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;