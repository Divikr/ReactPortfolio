import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1>Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

function ContactForm() {
  const [state, handleSubmit] = useForm("manbedvv");

  if (state.succeeded) {
    return  <div className="thank-you-box">
      <h2>Thank You!</h2>
      <p>Your message has been successfully sent. </p>
    </div>;
  }

  return (
   <form onSubmit={handleSubmit}>
  
  <input
    id="name"
    type="text"
    name="name"
    placeholder="Enter your name"
    className="user"
    required
  />
  <ValidationError prefix="Name" field="name" errors={state.errors} />


  <input
    id="email"
    type="email"
    name="email"
    placeholder="Enter your email"
    className="user"
    required
  />
  <ValidationError prefix="Email" field="email" errors={state.errors} />


  <textarea
    id="message"
    name="message"
    placeholder="Write your message..."
    className="user"
    required
  />
  <ValidationError prefix="Message" field="message" errors={state.errors} />

  <button type="submit" disabled={state.submitting} className="button">
    Submit
  </button>
</form>

  );
}

export default Contact;
