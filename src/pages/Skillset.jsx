import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";



const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional Skillset 
        </h1>

        <Techstack />

        <h1 className="project-heading">
        Tools I use
        </h1>
        <Toolstack />

       
      </Container>
    </Container>
  )
}

export default Skillset