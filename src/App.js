import React,{useState} from 'react'
import { Col, Container, Navbar, NavLink, Row } from 'react-bootstrap'
import {BrowserRouter,Route} from 'react-router-dom'
import { fadeInRight,fadeInLeft } from 'react-animations';
import Radium,{StyleRoot} from 'radium';
import { AiFillGithub,AiFillLinkedin,AiFillMail,AiFillFilePdf } from "react-icons/ai";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { SiGmail } from "react-icons/si";
import About from './Components/About';
import EduWork from './Components/EduWork';
import Projects from "./Components/Projects";

const styles = {
  fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  },
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
}

function App() {
  return (
      <BrowserRouter>
        <div className="mainDiv">
            <Container style={{height:"100vh"}}>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-center">
                            <NavLink  className="navItem">Home</NavLink>
                            <NavLink  className="navItem"><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></NavLink>
                            <NavLink  className="navItem"><Link activeClass="active" to="eduWork" spy={true} smooth={true} offset={50} duration={500}>Education & Work</Link></NavLink>
                            <NavLink  className="navItem"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></NavLink>
                        </Navbar>
                    </Col>
                </Row>
                <Row>
                    <Col style={{paddingTop:"15%"}}>
                      <StyleRoot>
                        <p className="nameText" style={styles.fadeInRight}>Mohan Kumar N</p>
                        <p className="jsText" style={styles.fadeInLeft}>Full Stack JS Developer - React Node Express Mongodb Redux Vue </p>
                        <p style={styles.fadeInRight} className="iconsP">
                        <a href="https://github.com/mohanKumarNayak" ><AiFillGithub className="iconsStyle"/></a>
                        <a href="https://www.linkedin.com/in/mohan-kumar-n-53133018b"><AiFillLinkedin className="iconsStyle"/></a> 
                        <a href="mailto:mohannayak619@gmail.com"><SiGmail className="iconsStyle"/></a>
                        <a href="https://drive.google.com/file/d/1fM9LAZ2hVrxou9X9UxzolD0DE30zmF73/view?usp=sharing"><AiFillFilePdf className="iconsStyle"/></a>
                        </p>
                      </StyleRoot>
                    </Col>
                </Row>
            </Container>
        </div>
        <Element name="about">
        <About />
        </Element>
        <Element name="eduWork">
        <EduWork />
        </Element>
        <Element name="projects">
        <Projects />
        </Element>
      </BrowserRouter>
  );
}

export default App;
