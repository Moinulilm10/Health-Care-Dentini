import React from 'react';
import './Doctor.css'
import { Form, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, dName, expertize, img } = doctor;


    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="mb-2">{dName}</h3>
            <h4 style={{ color: 'gray' }} className="px-5">{expertize}</h4>
            <Link to="/appointment" style={{ color: "blue", "text-decoration": "none" }}>
                Get Appointment
            </Link>
            {/* <Link to={`/booking/${id}`}>
                <button className="btn-warning">book {name.toLowerCase()}</button>
            </Link> */}
        </div >
    );
};

export default Doctor;