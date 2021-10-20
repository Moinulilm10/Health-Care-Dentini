import React from 'react';
import './Login.css'
import loginPic from '../../../../../images/login.jpg'
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'
    console.log('came form', location.state?.from)

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }


    return (
        <div>
            <div className="card mb-3" style={{ "max-width": "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={loginPic} alt="" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fw-bolder mt-5">Sign With <span style={{ color: 'lightblue' }}>Google here</span></h1>
                            {/* <div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="fw-dark mt-3">Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="fw-dark mt-3">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div> */}
                            <div className="mt-3">
                                <p>new to Dentino? <Link to="/register">Create Account</Link></p>
                            </div>
                            <button onClick={handleGoogleLogin} className="btn btn-warning mt-3"> <i style={{ color: 'white', fontSize: '15px' }} className="fab fa-google"><span> Google sign in</span></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;