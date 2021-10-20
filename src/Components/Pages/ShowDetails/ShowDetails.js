import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ShowDetails.css'

const ShowDetails = () => {


    let { serviceId } = useParams()


    const [showDetails, setShowDetails] = useState([]);


    useEffect(() => {
        fetch('/services.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setShowDetails(data)
            });
    }, []);


    const singleService = showDetails.filter(service => service.id === serviceId);



    return (

        <div>
            <div className="container-fluid  mb-1">
                <h1 className="heading mb-5 mt-1">
                    <span className="text-danger"> {singleService[0]?.sName} </span>
                </h1>
                <Row xs={1} md={2} className="g-3 ">
                    <div className="container-fluid">

                        <div className="container" >
                            <Col>
                                <Card className=" mb-5">
                                    <Card.Img variant="top" src={singleService[0]?.img} />
                                    <Card.Body>
                                        <Card.Title>{singleService[0]?.sName}</Card.Title>
                                        <Card.Text>
                                            <h5>
                                                About Service: <small className="pb-3 fs-6 text-start"> {singleService[0]?.description}</small>
                                            </h5>
                                            <p>
                                                {singleService[0]?.description}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to="/services">
                                            <button className="btn btn-outline-primary px-5 border-2 rounded-4 fw-bold ">Book Another Service</button>
                                        </Link>
                                        <Link to="/appointment">
                                            <button className="btn btn-outline-primary ms-3 px-5 border-2 rounded-4 fw-bold ">Confirm Booking</button>
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </Row>
            </div>
        </div>



    );



};

export default ShowDetails;
