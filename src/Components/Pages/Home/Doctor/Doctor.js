import React from 'react';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { id, dName, expertize, img } = doctor;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3 className="mb-2">{dName}</h3>
            <h4 style={{ color: 'gray' }} className="px-5">{expertize}</h4>
            {/* <Link to={`/booking/${id}`}>
                <button className="btn-warning">book {name.toLowerCase()}</button>
            </Link> */}
        </div>
    );
};

export default Doctor;