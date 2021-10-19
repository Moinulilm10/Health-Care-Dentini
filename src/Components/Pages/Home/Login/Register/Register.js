import React, { useState } from 'react';
import loginPic from '../../../../../images/login.jpg'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';


const Register = () => {

    const { handleRegButton, handleEmailChange, handlePasswordChange, toggleLogin, handleResetPassword, isLogin } = useAuth()

    const [error, setError] = useState('')




    return (
        <div>
            <div className="card mb-3" style={{ "max-width": "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={loginPic} alt="" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title fw-bolder mt-5">Create a<span style={{ color: 'lightblue' }}> new account here</span></h1>
                            <div>

                                {/* <Form>
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
                                    <br />
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className="fw-dark mt-3">Confirm Password</Form.Label>
                                        <Form.Control type="confirm password" placeholder="Confirm Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form> */}

                                {/* please {isLogin ? 'Login' : 'Register'} */}

                                <Form onSubmit={handleRegButton}>
                                    <h3 className="text-primary text-center mt-3 mb-5">{isLogin ? 'Login' : 'Register'}</h3>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                            Email
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                        <Form.Label column sm={2}>
                                            Password
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group onChange={toggleLogin} as={Row} className="mb-3" controlId="formHorizontalCheck">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Form.Check label="already registerd ?" />
                                        </Col>
                                    </Form.Group>
                                    <div className="row mb-3 text-danger">{error}</div>
                                    <Form.Group as={Row} className="mb-3">
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Button type="submit">{isLogin ? 'Login' : 'Register'}
                                            </Button>
                                            <br />
                                            <br />
                                            <Button className="mr-2" onClick={handleResetPassword} variant="success" size="md">
                                                Reset password
                                            </Button>
                                        </Col>
                                    </Form.Group>
                                </Form>

                            </div>
                            <div className="mt-3">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;