import { Container, Row, Col, Button,Card } from "react-bootstrap";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";

function Projects(){
    const projects = [
        {
            name:"Get In Films",
            description:"A full stack MERN application where the candidates can apply to the auditions for the new movies, where the entire auditions are handled by",package:"Axios, react-router-dom, redux, redux-thunk, react-redux,mongoose, express, cors, MDBReact",
            repo:"https://github.com/mohanKumarNayak/Get-In-Films",
            link:"https://get-in-films.herokuapp.com/"
        },
        {
            name:"Notes-App",
            description:"A full stack project where you can create, update and delete notes based on category",
            package:"Axios, react-router-dom, redux, redux-thunk, react-redux,mongoose, express, cors, MDBReact",
            repo:"https://github.com/mohanKumarNayak/notes-application",
        },
        {
            name:"Ticket Master",
            description:"An issue resolving application made using React, Redux",
            package:"Axios, react-router-dom, redux, redux-thunk, react-redux, mongoose, express, cors, Bootstrap",
            repo:"https://github.com/mohanKumarNayak/ticket-master-frontend",
        },
        {
            name:"Simple Forum App",
            description:"A simple application that is used to add the posts through the users and the other users can like or dislike the posts",
            package:"Axios, react-router-dom, redux, redux-thunk, react-redux, mongoose, express, cors, MDBReact, CK-editor",
            repo:"https://github.com/mohanKumarNayak/simple-forum-app",
            link:"https://simple-blog-forum.herokuapp.com/"
        },
        {
            name:"B-Friends",
            description:"A fun application for to know about other friends which has a set of questions",
            package:"Axios, react-router-dom, redux, redux-thunk, react-redux, mongoose, express, cors, MDBReact, react-copy-to-clipboard, react-share, node-url-shortener",
            repo:"https://github.com/mohanKumarNayak/B-friends",
            link:"https://b-friends.herokuapp.com/"
        },
        
    ]
    return(
        <div style={{backgroundColor:"#2B2B2B"}}>
            <Container style={{paddingTop:"5%",paddingBottom:"5%"}}>
                <Row>
                   <Col>
                   <p className="nameProject">Projects</p>
                   </Col>
                </Row>
                <Row>
                    {
                        projects.map((item,i)=>{
                            return(
                                <Col md="4" key={i}>
                                <Card>
                                    <Card.Body>
                                        <p className="cardHead">{item.name}</p>
                                        <hr />
                                        <p className="cardBody"><strong>Description: -</strong> {item.description}</p>
                                        <p className="cardBody"><strong>Packages Used: -</strong> {item.package}</p>
                                        <p style={{textAlign:"center"}}>
                                            <a href={item.repo}><Button style={{backgroundColor:"#444",border:"1px #444"}}><RiGitRepositoryFill style={{marginTop:"-4px",marginRight:"5px"}}/> Repository</Button></a>
                                            {
                                                item.link && <a href={item.link}><Button style={{backgroundColor:"#444",border:"1px #444",marginLeft:"10px"}}><BsFillEyeFill style={{marginTop:"-4px",marginRight:"5px"}}/> Live</Button></a>
                                            }
                                            
                                        </p>
                                    </Card.Body>
                                </Card>
                                <br />
                                </Col>
                            )
                        })
                    }
               
                </Row>
            </Container>
        </div>
    )
}

export default Projects