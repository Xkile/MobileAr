import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './signup.css';
import Moblar from './MoblAR.png';
import Gmail from './Gmail.png';
import Facebook from './Facebook.png';
import In from './In.png';

function SignUp() {
  return (
    <Container>
      {/* Header */}
      <Row className="header-row">
        <Col xs="auto" className="header-col-left p-0 ">
          <img src={Moblar} alt="Logo" height="150" />
        </Col>
      </Row>
      <Row>
        <Col className="header-col-center align-items-center justify-content-center">
          <h2 className="signup-header"><b>SIGN UP</b></h2>
        </Col>
      </Row>

      {/* Sign-Up Form */}
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formNewsletter">
              <Form.Check type="checkbox" label="I accept the terms and privacy policy" />
            </Form.Group>

            <Button className="signup-button mt-4 w-100" variant="success" type="submit">
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Forgot Password */}
      <Row className="justify-content-center mt-1">
        <Col className="forgotPassword text-center" id="forgotPassword">
          <Link to="forgot">Forgot your password?</Link>
        </Col>
      </Row>

      {/* Or Register With */}
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col xs="auto">
          <hr />
        </Col>
        <Col xs="auto">
          <p className="mb-0">Or register with</p>
        </Col>
        <Col xs="auto">
          <hr />
        </Col>
      </Row>

      {/* Social Media Sign-Up Buttons */}
      <Row className="justify-content-center mt-4">
        <Col className="d-flex justify-content-end">
          <img src={Gmail} alt="Gmail" height="30" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img src={Facebook} alt="Facebook" height="30" />
        </Col>
        <Col className="d-flex justify-content-start">
          <img src={In} alt="LinkedIn" height="30" />
        </Col>
      </Row>

      <Row className="text-center mt-3 pb-5">
        <p id="LoginLink">
          Already have an account? <Link to="login"><b>Login</b></Link>
        </p>
      </Row>
    </Container>
  );
}

export default SignUp;
