import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './Payment.css'; // Custom CSS
import Moblar from '../Signup/MoblAR.png'

// Mock Product Data
const mockProducts = [
    {
      id: 1,
      name: "NikeCourt Lite 2",
      description: "Women's Hard Court Tennis Shoe",
      color: "Blue",
      size: "38 EU",
      price: 67.00,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      id: 2,
      name: "Wilson Hammer 5.3",
      description: "Adult Tennis Racket",
      color: "Black",
      size: "2-1/4",
      price: 80.45,
      oldPrice: 89.95,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ];

function Payment() {
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    securityCode: '',
  });
  const [products, setProducts] = useState(mockProducts);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here
    console.log('Payment Details:', cardDetails);
  };

    // Calculate total price
    const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <Container className="payment-page">
        {/*header section*/}
        <Row className=" align-items-center">
        <Col xs="auto">
          <img src={Moblar} alt="Logo" height="110
          " /> {/* Placeholder for logo */}
        </Col>
        <Col className="text-start mt-3">
          <h5>Shopping Cart</h5>
          <p>{products.length} items - Total {totalPrice.toFixed(2)}</p>
        </Col>
      </Row>
      {/* Shipping Section */}
      <Row className="shipping-section">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-start">Shipping</Card.Title>
              <Button variant="outline-primary" className="add-address-button">
                Add Address
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Payment Section */}
      <Row className="text-start" id="labelpayment">
        <p>
           <b>Payment</b> 
        </p>
       </Row>
      <Row className="payment-section mt-">
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handlePaymentSubmit}>
                <Form.Group className="mb-3 text-start">
                  <Form.Label className="ms-3">Add Credit / Debit Card</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardHolderName"
                    value={cardDetails.cardHolderName}
                    onChange={handleInputChange}
                    placeholder="Enter card holder's name"
                  />
                </Form.Group>

                <Form.Group className="mb-3 text-start">
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Enter card number"
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3 text-start">
                      <Form.Label className="ms-3">Expire Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="expiryMonth"
                        value={cardDetails.expiryMonth}
                        onChange={handleInputChange}
                        placeholder="Month"
                      />
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label> </Form.Label>
                      <Form.Control
                        type="text"
                        name="expiryYear"
                        value={cardDetails.expiryYear}
                        onChange={handleInputChange}
                        placeholder="Year"
                        className="mt-2"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="securityCode"
                    value={cardDetails.securityCode}
                    onChange={handleInputChange}
                    placeholder="Security Code"
                    className="Security-Code"
                  />
                </Form.Group>

                {/* Total Section */}
                <Row className="total-section py-3 text-start ps-3">
                  <Col>
                    <p>Total</p>
                    <p><b>$147.45</b></p>
                  </Col>
                  <Col className="text-right">
                    <Button variant="primary" type="submit">
                      Pay Now
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Payment;
