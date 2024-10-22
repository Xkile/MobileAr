import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './Address.css'; // Custom CSS
import Moblar from '../Signup/MoblAR.png'

function Address() {
  const [addressDetails, setAddressDetails] = useState({
    name: '',
    phone: '',
    email: '',
    addressTitle: '',
    address: '',
  });
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

  const [products, setProducts] = useState(mockProducts);

  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails({
      ...addressDetails,
      [name]: value,
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Handle address submission logic here
    console.log('Address Details:', addressDetails);
  };

  return (
    <Container className="address-page mt-4">
      {/* Header */}
          {/*header section*/}
          <Row className=" align-items-center">
        <Col xs="auto">
          <img src={Moblar} alt="Logo" height="110
          " /> {/* Placeholder for logo */}
        </Col>
        <Col className="text-start mt-3">
          <h5>Address</h5>
          <p>{products.length} items - Total {totalPrice.toFixed(2)}</p>
        </Col>
      </Row>

        <Row>
        <div className="section-header d-flex align-items-center mt-4">
                    <div className="number-circle">1</div>
                    <h6 className="section-title">Recipients Information</h6>
                    </div>
        </Row>
      <Form onSubmit={handleAddressSubmit}>
        {/* Recipients Information */}
        <Card className="mt-4">
          <Card.Body>
              <Form.Group className="mb-3 text-start">
              <Form.Label className="ms-3">Name and Surname</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={addressDetails.name}
                onChange={handleInputChange}
                placeholder="Enter recipient's name"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="ms-3">Phone Number</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control as="select" defaultValue="DE" className="country-code">
                  <option value="DE">🇩🇪 +49</option>
                  {/* Add more country codes as needed */}
                </Form.Control>
                <Form.Control
                  type="text"
                  name="phone"
                  value={addressDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3 text-start">
              <Form.Label className="ms-3">E-mail Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={addressDetails.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </Form.Group>
          </Card.Body>
        </Card>

        {/* Shipping Address */}
        <Row>
            <div className="section-header d-flex align-items-center mt-5 ">
                <div className="number-circle">2</div>
                <h6 className="section-title">Shipping Address</h6>
            </div>
        </Row>
        <Card className="mt-4">
          <Card.Body>
            

            <Form.Group className="mb-3 text-start">
              <Form.Label className="ms-3">Address Title (Optional)</Form.Label>
              <Form.Control
                type="text"
                name="addressTitle"
                value={addressDetails.addressTitle}
                onChange={handleInputChange}
                placeholder="Enter address title (e.g., Home)"
              />
            </Form.Group>

            <Form.Group className="mb-3 text-start ">
              <Form.Label className="ms-3">Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={addressDetails.address}
                onChange={handleInputChange}
                placeholder="Enter full address"
                rows={2}
              />
            </Form.Group>
          </Card.Body>
        </Card>

        {/* Continue Button */}
        <Row className="mt-4 Address-button">
          <Col className="text-right">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Address;
