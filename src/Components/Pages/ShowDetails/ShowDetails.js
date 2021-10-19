import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ShowDetails.css'

const ShowDetails = () => {

    // let { id } = useParams();

    const { serviceId } = useParams()


    const [showDetails, setShowDetails] = useState([]);

    const [singleDetails, setSingleDetails] = useState({});


    useEffect(() => {
        fetch("/showDetails.json")
            .then((res) => res.json())
            .then((data) => setShowDetails(data.showdetail));
    }, []);

    useEffect(() => {
        const foundDetail = showDetails.find(
            (showdetail) => showdetail.serviceId === serviceId
        );
        setSingleDetails(foundDetail);
    }, [showDetails]);





    return (
        // <div>
        //     <h2>details here: {serviceId}</h2>
        // </div>
        <div>
            <h1>{serviceId}</h1>
            <h2>This is sigle employee {singleDetails?.name}</h2>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={singleDetails?.img} />
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>{singleDetails?.name}</Card.Title>
                                <Card.Text>
                                    <b> Email : {singleDetails?.email}</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default ShowDetails;