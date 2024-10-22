import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import './ShoppingCart.css'; // Custom CSS
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

function ShoppingCart() {
  const [products, setProducts] = useState(mockProducts);

  // Function to handle quantity change
  const handleQuantityChange = (id, change) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + change } : product
    ));
  };

  // Function to remove product
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Calculate total price
  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <Container className="shopping-cart">
      {/* Header Section */}
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

      {/* Delivery Notice */}
      <Row className="py-2 delivery-notice">
        <Col className="text-center">
          <span>Arrives by April 3 to April 9</span>
        </Col>
      </Row>

      {/* Product List */}
      {products.map((product) => (
        <Row key={product.id} className="product-item py-3 align-items-center">
       
          <Col xs={9}>
            <h6>{product.name}</h6>
            <p className="text-muted">{product.description}</p>
          </Col>
          <Col xs={3} className="text-right">
            <p className="price">${product.price.toFixed(2)}</p>
          </Col>
          <Col xs={3}>
            <img src={product.image} alt={product.name} className="product-image" />
          </Col>
          <Col xs={9} className="mt-3 product-options">
            <Row>
              <Row xs={2}>
                <Form.Label>Color</Form.Label>
                <p>{product.color}</p>
              </Row>
              <Row xs={2}>
                <Form.Label className="mt-2 ps">Size</Form.Label>
                <Form.Control as="select" defaultValue={product.size} className="size-select ms-3" >
                  <option>{product.size}</option>
                  <option>{product.size}</option>
                  <option>{product.size}</option>
               
                </Form.Control>
              </Row>
              <Row xs={2} classname="">
                <Form.Label className="pe-4 mt-3 ">Qty</Form.Label>
                <div className="quantity-control d-flex align-items-center mt-3">
                  <Button variant="outline-secondary" onClick={() => handleQuantityChange(product.id, -1)} disabled={product.quantity <= 1}>-</Button>
                  <span className="quantity mx-2">{product.quantity}</span>
                  <Button variant="outline-secondary" onClick={() => handleQuantityChange(product.id, 1)}>+</Button>
                </div>
              </Row>
            </Row>
          </Col>
        </Row>
      ))}

      {/* Total and Checkout Button */}
      <Row className="checkout-section py-3 text-start">
        <Col>
        <Row xs={12}>
          <h5>Total</h5>
        </Row>
          <Row xs={12} className="text-start">
            <h5>${totalPrice.toFixed(2)}</h5>
          </Row>
        </Col>
        
        <Col className="text-right">
          <Button variant="primary" className="checkout-button">Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;
