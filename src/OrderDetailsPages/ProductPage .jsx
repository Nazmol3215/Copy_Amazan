import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import Slideshow from '../test';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const ssss = useNavigate();

  return (
    <Container className="my-5">
      <Row>
        {/* Left Section: Image Thumbnails and Main Image */}
        <Col md={6}>
          <Row>
            <Col xs={3} className="d-flex flex-column">
            <Slideshow/>

            </Col>
            <Col xs={9}>
            </Col>
          </Row>
        </Col>

        {/* Right Section: Product Details */}
        <Col md={6}>
          <h2>HP Notebook Laptop, 15.6" HD Touchscreen</h2>
          <p>Intel Core i3-1115G4 Processor, 32GB RAM, 1TB PCIe SSD, Webcam, Type-C, HDMI, SD Card Reader, Wi-Fi, Windows 11 Home, Silver</p>

          <div className="d-flex align-items-center mb-2">
            <span className="me-2">4.1</span>
            <Badge bg="success">Amazon's Choice</Badge>
          </div>
          <p>1K+ bought in past month</p>

          {/* Price and Discount */}
          <div className="mb-3">
            <h3 className="text-danger">$415.00 <small className="text-muted text-decoration-line-through">$438.70</small></h3>
            <p className="text-muted">+ $656.71 Shipping & Import Fees Deposit to Bangladesh</p>
          </div>

          {/* Capacity Options */}
          <div className="mb-4">
            <h5>Capacity:</h5>
            <Button variant="outline-secondary" className="me-2 mb-2">8GB RAM | 128GB SSD</Button>
            <Button variant="outline-secondary" className="me-2 mb-2">16GB RAM | 512GB SSD</Button>
            <Button variant="outline-primary" className="me-2 mb-2">32GB RAM | 1TB SSD</Button>
            <Button variant="outline-secondary" className="me-2 mb-2">20GB RAM | 512GB SSD</Button>
          </div>

          {/* Quantity and Actions */}
          <Row className="align-items-center mb-3">
            <Col xs={3}>
              <select className="form-select">
                <option>Quantity: 1</option>
                <option>Quantity: 2</option>
                <option>Quantity: 3</option>
              </select>
            </Col>
            <Col>
              <Button variant="warning" className="w-100 mb-2"    onClick={() => ssss("/OrderComponent")}>Add to Cart</Button>
              <Button variant="primary" className="w-100"  onClick={() => ssss("/OrderComponent")}>Buy Now</Button>
            </Col>
          </Row>

          {/* Additional Product Info */}
          <div className="text-muted">
            <p><strong>Brand:</strong> HP</p>
            <p><strong>Model Name:</strong> TPN-Q222</p>
            <p><strong>Screen Size:</strong> 15.6 Inches</p>
            <p><strong>Operating System:</strong> Windows 11 Home</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;