import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import './Market.css'; // Custom styling if needed
import Moblar from "../Signup/MoblAR.png"

// Mock Data (This will represent your database products)
const mockDatabase = [
  { id: 1, name: "Item #1 Name Goes Here", price: 19.99 },
  { id: 2, name: "Item #2 Name Goes Here", price: 24.99 },
  { id: 3, name: "Item #3 Name Goes Here", price: 29.99 },
  { id: 4, name: "Item #4 Name Goes Here", price: 19.99 },
  { id: 5, name: "Item #5 Name Goes Here", price: 14.99 },
  { id: 6, name: "Item #6 Name Goes Here", price: 19.99 },
];

function ProductGrid({ title, products }) {
  return (
    <>
      <h5 className="mt-4 text-start">{title}</h5>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={4} sm={4} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Title className="mt-2 small-card-title">{product.name}</Card.Title>
                <Card.Text className="small-card-text">${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

function Market() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(mockDatabase);

  useEffect(() => {
    // Filter products based on the search term
    if (searchTerm) {
      const filteredProducts = mockDatabase.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(mockDatabase);
    }
  }, [searchTerm]);

  return (
    <Container fluid="md">
     {/* Header */}
 {/* Header */}
 <Row className="py-4 align-items-center">
    
        <Col xs="auto" className="p-0">
          <img src={Moblar} alt="Logo" height="100" />
        </Col>

        {/* Empty column to push "Market" to center */}
        <Col />

      
        <Col xs="auto" className="Heading-market text-center">
          <h2>Market</h2>
        </Col>

        {/* Empty column for symmetry */}
        <Col />
      </Row>
      
      {/* Search Bar */}
      <Row className="mb-4">
        <Col>
          <InputGroup>
            <FormControl
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      {/* Product Sections */}
      <ProductGrid title="Hot deals" products={products.slice(0, 3)} />
      <ProductGrid title="Trending" products={products.slice(3, 6)} />
      <ProductGrid title="Deals" products={products.slice(0, 3)} />
    </Container>
  );
}

export default Market;
