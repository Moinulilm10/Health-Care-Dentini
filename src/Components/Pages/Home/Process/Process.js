import React from 'react';
import { useHistory } from 'react-router';
import './Process.css'

const Process = () => {

    const history = useHistory()

    const handleAppointmentButton = () => {
        history.push('/appointment')
    }

    return (
        <div>
            <h1 className="fw-bolder mt-5">The <span style={{ color: 'lightblue' }}>Procedure</span></h1>
            <div className="process mt-4">
                <div className="process-1">
                    <i className="fas fa-calendar-check text-white"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Book an Appointment</h4>
                    <br />
                    <p className="fw-lighter text-white">Take serial treatment.</p>
                </div>
                <div className="process-2">
                    <i className="fas fa-calendar-check text-white"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Conduct Oral Checkup</h4>
                    <br />
                    <p className="fw-lighter text-white">Waiting for doctor appointment.</p>
                </div>
                <div className="process-3">
                    <i className="fas fa-calendar-check text-white"></i>
                    <br />
                    <h4 className="fw-lighter text-white fw-bold">Perform Treatment</h4>
                    <br />
                    <p className="fw-lighter text-white">Heal your teeth and take care of teeth</p>
                </div>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto mb-5">
                <button onClick={handleAppointmentButton} className="btn btn-primary btn-lg rounded-pill" type="button">Take Appointment</button>
            </div>
        </div>

    );
};

export default Process;