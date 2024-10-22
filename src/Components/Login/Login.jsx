import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Login.css';
import Gmail from '../Signup/Gmail.png';
import Facebook from '../Signup/Facebook.png';
import In from '../Signup/In.png';
import MoblAR from '../Signup/MoblAR.png';
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      {/* Header */}
      <Row className="header-row">
        <Col xs="auto" className="header-col-left p-0">
          <img src={MoblAR} alt="Logo" height="150" />
        </Col>
      </Row>
      <Row>
      <Col className="header-col-center align-items-center justify-content-center">
          <h2 className="login-header"><b>Log In</b></h2>
        </Col>
      </Row>

      

      {/* Login Form */}
      
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="login-button mt-4" variant="success" type="submit" block>
              LOGIN
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Forgot Password */}
      <Row className="justify-content-center mt-3">
        <Col className="forgotPasswordLogin text-center" id="forgotPasswordLogin">
          <Link to="/forgot">Forgot your password</Link>
        </Col>
      </Row>

      <Row className="mt-5 d-flex align-items-center justify-content-center">
        
        <Col xs="">
          <hr/>
        </Col>
        <Col xs="">
          <p className="mb-0">Or login with</p>
        </Col>
        <Col xs="">
          <hr />
        </Col>
      </Row>

      {/* Social Media Login Buttons */}
      <Row className="justify-content-center mt-3 pb-5">
        <Col className="d-flex justify-content-end">
          <img src={Gmail} alt="Gmail" height="30" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={Facebook} alt="Facebook" height="30" />
        </Col>
        <Col className="d-flex justify-content-start">
          <img src={In} alt="Linkedin" height="30" />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
