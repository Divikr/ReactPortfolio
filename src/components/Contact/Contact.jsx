import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';

const Contact = () => {
  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 >Contact me</h1>
        </Col>

        <Col md={6} className="c-right">
          <form
            action="https://formspree.io/f/mnqkyxyz" 
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="user"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="user"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="user"
            />
            <button type="submit" className="button">Send</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
