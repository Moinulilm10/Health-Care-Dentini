import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, sName, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="mb-2">{sName}</h3>
            <p className="px-5">{description}</p>
            <Link to={`/showdetails/${id}`}>
                <button className="btn btn-primary rounded-pill">show details</button>
            </Link>
        </div>
    );
};

export default Service;