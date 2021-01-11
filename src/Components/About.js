import { Container, Row, Col, Button } from "react-bootstrap";
import mohankk from '../images/mohankk.jpg'
import { FaDownload } from "react-icons/fa";

function About(){
    return(
        <div style={{backgroundColor:"#2B2B2B"}}>
            <Container style={{paddingTop:"5%",paddingBottom:"5%"}}>
                <Row>
                    <Col md="4" className="text-center">
                        <img src={mohankk} className="profileImage"/>
                    </Col>
                    <Col md="8" style={{paddingTop:"10px"}}>
                        <p className="nameHeader">About Me</p>
                        <p className="textProfile">My name is Mohan Kumar N, I'm a Full Stack JS Developer. Currently I'm working at GIEOM</p>
                        <p className="nameHeader">Contact Details</p>
                        <p className="textProfile1">Guniagrahara, Lakshmipura cross</p>
                        <p className="textProfile1">Bangalore, 560089</p>
                        <p className="textProfile1">Mobile - +919740283754</p>
                        <a href="https://drive.google.com/file/d/1fM9LAZ2hVrxou9X9UxzolD0DE30zmF73/view?usp=sharing"><Button style={{backgroundColor:"#444",border:"1px #444"}}> <FaDownload style={{marginTop:"-5px",marginRight:"5px"}}/>      Download Resume </Button></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About