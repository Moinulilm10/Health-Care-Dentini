import React from 'react';
import './Booking.css'
import apntPic from '../../../../images/appointment/appointment.jpg'
import { Form, Row, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Booking = () => {

    const history = useHistory()

    const handleFormSubmitBtn = () => {
        history.push('/successfully')
    }

    return (
        <div className="d-flex booking-container">
            <div className="apnt-pic">
                <img src={apntPic} alt="" />
            </div>
            <div>
                <h1 className="card-title fw-bolder mt-5 mb-5">Fill this form<span style={{ color: 'lightblue' }}> for appointment.</span></h1>
                <Form>
                    <Row className="mb-3">
                        <Form.Group className="text-start" as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="text-start" as={Col} controlId="formGridPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="your name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="text-start" as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="your contact number" />
                    </Form.Group>

                    <Form.Group className="mt-3 mb-3 text-start" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group className="text-start" as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label className="text-start">Doctors</Form.Label>
                            <Form.Select defaultValue="">
                                <option>Mike</option>
                                <option>Anderson</option>
                                <option>Peter Siddley</option>
                                <option>Morrison</option>
                                <option>Fletcher</option>
                                <option>John Doe</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button onClick={handleFormSubmitBtn} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Booking;