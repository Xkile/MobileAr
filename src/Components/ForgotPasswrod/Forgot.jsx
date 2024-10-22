import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Forgot.css'

import Moblar from '../Signup/MoblAR.png';


function Forgot() {
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
          <h2 className="forgot-header"><b>Forgot Password</b></h2>
        </Col>
      </Row>
      <Row>
        <Col className="header-col-center align-items-center justify-content-center">
          <p className="forgot-header text-start mt-4">
            Don't worry, it happens. Please enter the email associated with your account.
          </p>
        </Col>
      </Row>

      
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
          <Form>
         
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>


            <Button className="forgot-button mt-4 w-100 mb-5" variant="success" type="submit">
              Send Code
            </Button>
          </Form>
        </Col>
      </Row>     
    </Container>
  );
}

export default Forgot;
