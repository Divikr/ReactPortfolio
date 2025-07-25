import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/Divikr"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                 
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/divith-k-r/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                 
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social