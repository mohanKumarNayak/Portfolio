import { Container, Row, Col } from "react-bootstrap";

function EduWork(){
    const details = [{name:'EDUCTAION',header:'Sambhram Institute Of Technology - Bangalore',body:"Bachelor's Degree, Computer Science & Engineering, June 2019"},{name:'WORK',header:'GIEOM BUSINESS SOLUTIONS Pvt. LTD',body:"Software Engineer - Front-End Developer"},{name:'SKILLS',header:'Full Stack MERN and JS',body:"Javascript, Node, React, Mongodb, Express, Vue, Bootstrap, JSON, AJAX, Redux.js, Git and GitHub, Heroku"}]
    return(
        <div>
            <Container style={{paddingTop:"5%",paddingBottom:"5%"}}>
                {
                    details.map((item,i)=>{
                        return (
                        <div  key={i}>
                            <Row>
                                <Col md="4">
                                    <p className="enameHeader">{item.name}</p>
                                </Col>
                                <Col md="8">
                                    <p className="fnameHeader">{item.header}</p>
                                    <p className="etextProfile">{item.body}</p>
                                </Col>
                            </Row>
                            {i == 2 ? '' : <hr />}
                        </div>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default EduWork