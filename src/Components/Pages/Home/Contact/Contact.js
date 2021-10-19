import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css'

const Contact = () => {

    const history = useHistory()

    const handleFormSubmitBtn = () => {
        history.push('/home')
    }

    return (
        <div>
            <div className="heading">
                <h1 className="fw-bolder mt-5">Contact</h1>
                <p style={{ color: 'gray' }}>Are easy to find, so a visitor can quickly get in touch should visitor need it.</p>
            </div>

            <div className="contact-form">
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="First Name">
                            <Form.Control type="name" placeholder="your first name" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                            <Form.Control type="name" placeholder="your last name" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingInputGrid" label="Your Number">
                            <Form.Control type="number" placeholder="your phone name" />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="choose your service">
                            <Form.Select aria-label="Floating label select example">
                                <option>Open this select service</option>
                                <option value="1">Pediatric Density</option>
                                <option value="2">Root cannel</option>
                                <option value="3">Dental Implants</option>
                                <option value="4">Teeth Whitening</option>
                                <option value="5">Orthodontics</option>
                                <option value="6">Free Consultation</option>
                            </Form.Select>
                        </FloatingLabel>
                        <br />
                        <FloatingLabel controlId="floatingTextarea2" label="Messages">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <button onClick={handleFormSubmitBtn} class="mt-4 btn btn-primary" type="submit">Submit</button>
            </div>

            <div className="second-part">
                <div>
                    <h4>Location</h4>
                    <p>Therefore, Enate HQ 24 Fifth st., Los Angeles, USA</p>
                    <br />
                    <h4>Email</h4>
                    <p>example@gmail.com</p>
                    <br />
                    <h4>Phone</h4>
                    <p>+123 1234 1234</p>
                    <br />
                </div>
                <div className="icon">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
        </div>


    );
};

export default Contact;