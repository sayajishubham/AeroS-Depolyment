import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRegQuestionCircle, FaGift, FaClipboardList, FaRegComments, FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      {/* Footer */}
       <footer className="bg-light py-4 mt-5">
      <Container>
        <Row className="mb-3 ">
          <Col md={2}>
            <h6>Store Locator</h6>
            <p><FaMapMarkerAlt /> Store Locator</p>
            <p><FaClipboardList /> Order Status</p>
            <p><FaRegQuestionCircle /> Start a Return</p>
            <p><FaGift /> Gift Cards/Balance</p>
            <p><FaRegComments /> Feedback</p>
          </Col>
          <Col md={2}>
            <h6>Customer Service</h6>
            <p>Help Desk & FAQ</p>
            <p>Return & Exchange Policy</p>
            <p>Shipping Policy</p>
            <p>Buy Online, Pick Up In Store</p>
            <p>Student Discount</p>
            <p>Coupons & Promos</p>
            <p>Size Charts</p>
            <p>Affiliate Program</p>
            <p>Your Privacy Choices</p>
          </Col>
          <Col md={2}>
            <h6>Questions?</h6>
            <p><strong>Call Us</strong></p>
            <p>1.877.289.2376</p>
            <p><strong>Contact Us</strong></p>
          </Col>
          <Col md={2}>
            <h6>About Us</h6>
            <p>About Aéropostale</p>
            <p>Careers</p>
            <p>Supply Chain</p>
            <p>Aero Impact</p>
          </Col>
          <Col md={3}>
            <h6>Sign Up for Emails</h6>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Button variant="dark" type="submit">Sign Up</Button>
            </Form>
            <small>By signing up you agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>. California residents, see our <a href="#">California Privacy Notice</a> and <a href="#">Do Not Sell My Personal Information</a> page.</small>
          </Col>
          <Col md={1}>
            <h6>Follow Us</h6>
            <div className="social-icons">
              <FaTiktok />
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
              <FaYoutube />
            </div>
          </Col>
        </Row>
      </Container>
  </footer>
    </div>
  )
}

export default Footer
