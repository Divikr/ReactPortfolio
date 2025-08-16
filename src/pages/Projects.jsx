import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/todo.png";
import project from "../assets/projects/study.png";
import lift from "../assets/projects/weather.png";
import krypto from "../assets/projects/touch.png";
import kickstart from "../assets/projects/revgear.png";
import olx from "../assets/projects/olx.png";
import netflix from "../assets/projects/netflix.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Works 
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Study At Bangalore"
              description="A fully responsive static website built using HTML, CSS, Bootstrap, and JavaScript. This project showcases a clean, modern design with a mobile first approach, ensuring an optimal viewing experience across devices. It features interactive elements, smooth navigation, and a well organized layout, demonstrating proficiency in frontend technologies and best practices."
              ghLink="https://github.com/Divikr/studyAtbangalore"
              demoLink="https://studybangaloreinternational.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Revgear E-commerce Website "
              description="A fully functional e-commerce website for Revgear, built with the MERN Stack . The site allows users to browse products, add items to the cart, and place orders securely. It includes features such as user authentication, responsive design, and an intuitive interface for a seamless shopping experience. This project demonstrates my ability to build dynamic."
              ghLink="https://github.com/Divikr/RevGear"
              demoLink="https://revgear.onrender.com/home"
            />
          </Col>


           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Touch-Evento"
              description="I developed a digital invitation platform using React.js, designed to create and share event invitations online. The app allows users to view event details and RSVP with a simple and interactive interface. It features responsive design, real-time input handling, and state management using React hooks. This project demonstrates my ability to build user-friendly, dynamic web applications that serve a real-world purpose such as event management and communication."
              ghLink="https://github.com/Divikr/Touch_evento"
              demoLink="https://touch-evento.onrender.com/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Weather-App"
              description="A responsive weather application built with React that allows users to search for real-time weather data across locations worldwide. It fetches information such as temperature, humidity, wind speed, and weather conditions from a public API and displays it in a clean, user-friendly interface. The app also features dynamic background changes based on the weather, providing an interactive and visually appealing experience."
              ghLink="https://github.com/Divikr/weatherApp-react"
               demoLink="https://weatherapp-react-jmfj.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A fully functional and responsive Netflix Clone built using React and Firebase. It features user authentication with Firebase Auth, movie data fetched from the TMDB API, real-time database support, and clean UI components. This project showcases my proficiency in frontend development, API integration, and backend-as-a-service  using Firebase to manage authentication and data."
              ghLink="https://github.com/Divikr/Netflix-clone"
             
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OlX Clone"
              description="A responsive OLX Clone developed using React and Firebase, replicating the core features of a classified marketplace. It includes user authentication with Firebase Auth, the ability to post and browse listings, real-time data storage with Firestore, and a clean, mobile-first UI. This project demonstrates full-stack development skills using modern frontend technologies and backend-as-a-service architecture."
              ghLink="https://github.com/Divikr/olx-clone"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="To-Do List"
              description="A simple and interactive To-Do List application built with React. This project allows users to add, edit, delete, and mark tasks as completed. It demonstrates a solid understanding of state management, event handling, and component-based design in React, providing a smooth and user-friendly experience."
              ghLink="https://github.com/Divikr/React-Todolist-"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects