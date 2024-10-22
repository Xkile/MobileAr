import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Profile.css'; // Custom CSS for Profile Page
import Moblar from '../Signup/MoblAR.png'

function Profile() {
  return (
    <Container className="profile-page">
      {/* Header */}
      <Row className=" align-items-center">
        <Col xs="auto">
          <img src={Moblar} alt="Logo" height="110" /> 
        </Col>
        <Col className="text-start">
          <h5>Profile</h5>
        </Col>
      </Row>
       {/*Profile */}
      <Row className="profile-header text-center pb-4 pt-5" >
        <Col xs="12">
          <img 
            src="https://via.placeholder.com/100" 
            alt="Profile Avatar" 
            className="profile-avatar mb-3" 
          />
          <h3 className="profile-name">Janelle Jagunap</h3>
          <p className="profile-contact">youremail@domain.com | +01 234 567 89</p>
        </Col>
      </Row>


      {/* Settings Options */}
      <Row className="mt-4">
        {/* Profile Information */}
        <Col xs="12" className="profile-option">
          <Card className="text-start ">
            <Row className="p-3">
              <Col xs={8}>
                <span>Edit profile information</span>
              </Col>
              <Col xs={4} className="text-right">
                <i className="fa fa-chevron-right"></i>
              </Col>
            </Row>
            {/* Notification*/}
            <Row className="p-3">
              <Col xs={8}>
                <span>Notifications</span>
              </Col>
              <Col xs={4} className="text-right">
                <span className="option-value">ON</span>
              </Col>
            </Row>
              {/* Language */}
            <Row className="p-3">
              <Col xs={8}>
                <span>Language</span>
              </Col>
              <Col xs={4} className="text-right">
                <span className="option-value">English</span>
              </Col>
            </Row>
          </Card>
        </Col>

       
         

        {/* Security */}
        <Col xs="12" className="profile-option">
          <Card className=" text-start mb-3">
          <Row className="p-3">
              <Col xs={8}>
                <span>Security</span>
              </Col>
              <Col xs={4} className="text-right">
                <i className="fa fa-chevron-right"></i>
              </Col>
            </Row>
            {/* Theme*/}
            <Row className="p-3">
              <Col xs={8}>
                <span>Theme</span>
              </Col>
              <Col xs={4} className="text-right">
                <span className="option-value">Light mode</span>
              </Col>
            </Row>
          </Card>
        </Col>

     

        {/* Help & Support */}
        <Col xs="12" className="profile-option">
          <Card className="p-3 mb-3 text-start">
            <Row>
              <Col xs={8}>
                <span>Help & Support</span>
              </Col>
              <Col xs={4} className="text-right">
                <i className="fa fa-chevron-right"></i>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
