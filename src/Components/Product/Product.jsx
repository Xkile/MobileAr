import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Product.css'; // Custom CSS
import Moblar from '../Signup/MoblAR.png'; // Replace with your logo
import { FaShoppingCart, FaPlayCircle, FaShoppingBag } from 'react-icons/fa';

// Mock Database
const mockDatabase = [
  { id: 1, name: "Item #1 Name Goes Here", price: 19.99 },
  { id: 2, name: "Item #2 Name Goes Here", price: 24.99 },
  { id: 3, name: "Item #3 Name Goes Here", price: 29.99 },
  { id: 4, name: "Armchair TUTTU Monteur", price: 0.00 },
];

// Extract the specific product from the mock database (Armchair TUTTU Monteur)
const productDetail = mockDatabase.find(product => product.name === "Armchair TUTTU Monteur");

function ProductGrid({ products }) {
  // Display only the first 3 products
  const limitedProducts = products.slice(0, 3);
  return (
    <Row className="mt-4">
      {limitedProducts.map((product) => (
        <Col key={product.id} xs={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function Product() {
  return (
    <Container>
      {/* Header */}
      <Row className="pb-3 align-items-center header-section">
        <Col xs="auto">
          <img src={Moblar} alt="Logo" height="100" />
        </Col>
        <Col className="text-start mt-2 ms-3">
          <h4 className="market-title">Market</h4>
        </Col>
        <Col xs="auto" className="text-right">
          <FaShoppingCart size={18} />
        </Col>
      </Row>

      {/* Video Section with increased height */}
      <Row className="">
        <Col className="text-center video-section">
          <FaPlayCircle size={70} color="#6b5ca6" />
        </Col>
      </Row>

      {/* Product Details */}
      <Row className="mt-3 mb-4 text-start">
        <Col>
          <h5>{productDetail.name}</h5>
          <p>${productDetail.price.toFixed(2)}</p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Button variant="outline-secondary" className="w-100">
            Try in your room
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-start">
          <p className="mb-2">Colors</p>
          <Button variant="outline-secondary" className="w-100">
            <FaShoppingCart /> Add to cart
          </Button>
        </Col>
      </Row>

      {/* More Items Section */}
      <h5 className="mt-5 text-start">More Items</h5>
      <ProductGrid products={mockDatabase} />
    </Container>
  );
}

export default Product;
