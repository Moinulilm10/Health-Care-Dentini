import React from 'react';
import './Process.css'

const Process = () => {
    return (
        <div>
            <h1 className="fw-bolder mt-5">The <span style={{ color: 'lightblue' }}>Procedure</span></h1>
            <div className="process mt-4">
                <div className="process-1">
                    <i className="fas fa-calendar-check text-white"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Book an Appointment</h4>
                    <br />
                    <p className="fw-lighter text-white">Sed consequat vitae imperdiet neque suscipit a. Nunc mattis purus at tincidunt porta. Vivamus posuere tellus venenatis</p>
                </div>
                <div className="process-2">
                    <i className="fas fa-calendar-check text-white"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Conduct Oral Checkup</h4>
                    <br />
                    <p className="fw-lighter text-white">Sed consequat vitae imperdiet neque suscipit a. Nunc mattis purus at tincidunt porta. Vivamus posuere tellus venenatis</p>
                </div>
                <div className="process-3">
                    <i className="fas fa-calendar-check text-white"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Perform Treatment</h4>
                    <br />
                    <p className="fw-lighter text-white">Sed consequat vitae imperdiet neque suscipit a. Nunc mattis purus at tincidunt porta. Vivamus posuere tellus venenatis</p>
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mb-5">
                <button className="btn btn-primary btn-lg rounded-pill" type="button">Take Appointment</button>
            </div>
        </div>

    );
};

export default Process;