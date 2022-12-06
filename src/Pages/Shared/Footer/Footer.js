// import React from 'react';

// const Footer = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     return (
//         <footer className='text-center mt-5'>
//             <p><small>copyright @ {year}</small></p>
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className='row'>
            <Container fluid={true} className="text-center footerSection">
                <Row>
                    <Col lg={2} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Follow Me</h1>
                        <a className="socialLink" target={null} href="www.facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br />
                        <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Address</h1>
                        <p className="serviceDescription" > <FontAwesomeIcon icon={faEnvelope} /> KB Academy@yahoo.com</p>
                        <p className="serviceDescription" > <FontAwesomeIcon icon={faPhone} /> +8801521317664</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Information</h1>
                        <Link className="footerLink" to="/about">About Us</Link><br />
                        <Link className="footerLink" to="/contact">Contact Us</Link>
                    </Col>
                    <Col lg={2} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Legal</h1>
                        <Link className="footerLink" to="/Refund">Refund Policy</Link><br />
                        <Link className="footerLink" to="/Terms">Terms & Condition</Link><br />
                        <Link className="footerLink" to="/Privacy">Privacy Policy</Link >
                    </Col>
                    <Col lg={2} md={6} sm={12} className="p-5 text-justify">
                        <h1 className="serviceName">Feedback</h1>
                        <Link className="footerLink" to="/Feedback">Feedback</Link><br />
                        <Link className="footerLink" to="/Modal">Report</Link >
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="text-center copyrightSection">
                <a className="copyrightLink" href="#">KB Academy &copy; 2020-2021</a>
            </Container>
        </div>
    );
};

export default Footer;






