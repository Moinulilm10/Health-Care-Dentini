import React from 'react';
import './Footer.css'
import footerLogo from '../../../../images/logo/project-logo.png'

const Footer = () => {
    // const facebookIcon = <FontAwesomeIcon icon={ } />
    return (
        <div className="">
            <div className="d-flex justify-content-evenly mt-5 footer">
                <div className="logo-section mt-5">
                    <img src={footerLogo} alt="" />
                    <p className="fw-light mt-4">Best Dental services we provide.</p>
                </div>
                <div className="follow-us-section mt-5">
                    <h4 className="fw-bold">Follow Us</h4>
                    <p className="fw-light mt-3">Follow us on social media.
                        <br />
                        We also done splendid job in
                        <br />
                        social media platform.
                    </p>
                    <div className="icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-instagram-square"></i>
                    </div>
                </div>
                <div className="contact-us-section mt-5">
                    <h4 className="fw-bold">Contact Us</h4>
                    <ul className="fw-light mt-2">
                        <li>Address: Street, City 123</li>
                        <li>Phone: 389 653 4567</li>
                        <li>Email: example@example.com</li>
                        <li>Website: website.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;