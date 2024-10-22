import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Confirmation.css'; 
import MoblAr from "../Signup/MoblAR.png"


function Confirmation() {
  // Replace this mock data with actual order details
  const orderDetails = {
    orderNumber: '#BE123456',
    timePlaced: '17/02/2020 12:45 CEST',
    recipientName: 'Banu Elson',
    email: 'orders@banuelson.com',
    phone: '+49 179 111 1010',
    address: 'Leibnizstraße 16, Wohnheim 6, No: BX, Clausthal-Zellerfeld, Germany',
  };

  return (
    <Container className="confirmation-page mt-4">
      {/* Header */}
      <Row className="header-section mb-4">
        <Col xs={4}>
          <img src={MoblAr} alt="Logo" height="120" /> {/* Replace with logo */}
        </Col>
        <Col xs={8} className="text-start mt-5">
          <h5>Order Confirmation</h5>
          <p>2 items - Total $147.45</p>
        </Col>
      </Row>

      {/* Confirmation Message */}
      <Row className="mb-4">
        <Col xs="auto">
          <img src="#" alt="Success" className="checkmark-icon" /> {/* Checkmark icon */}
        </Col>
        <Col className="text-start">
          <h5>Thank you!</h5>
          <p>Your order {orderDetails.orderNumber} has been placed.</p>
         
        </Col>
        <Row className="mt-3 text-start">
        <p>
            We sent an email to <b>{orderDetails.email}</b> with your order confirmation and bill.
          </p>
        </Row>
        <Row className="mt-3 text-start">
        <p>Time placed: {orderDetails.timePlaced}</p>
        </Row>
      </Row>

      {/* Shipping Information */}
      <Row className='text-start mt-2'>
        <h6>Shipping</h6>
      </Row>
      <Card className="mb-3 text-start mt-2 ms-2">
        <Card.Body>
       
          <p>{orderDetails.recipientName}</p>
          <p>{orderDetails.email}</p>
          <p>{orderDetails.phone}</p>
          <p>{orderDetails.address}</p>
        </Card.Body>
      </Card>

      {/* Billing Information */}
      <Row className='text-start mt-2'>
          <h6>Billing</h6>
      </Row>
      <Card className="mb-4 text-start mt-2 ms-2">
        <Card.Body>
         
          <p>{orderDetails.recipientName}</p>
          <p>{orderDetails.email}</p>
          <p>{orderDetails.phone}</p>
          <p>{orderDetails.address}</p>
        </Card.Body>
      </Card>

      {/* Continue Button */}
      <Row>
        <Col>
          <Button variant="primary" className="continue-button">
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Confirmation;
