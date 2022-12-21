import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import './navBar.scss'

export function Menubar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

  return (


<Container fluid className="navbar-container p-0 pb-5 mb-5">
            <Row >
                <Col>
                    <Navbar className="navbar shadow-lg p-3 mb-3 bg-body rounded" expand="lg" bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand className="nav--brand ms-auto text-uppercase" style={{color: "#FDFDFD"}} href="/"><span className="brandName-firstWord">Internationale</span>
                            <span className="brandName-lastWord">Filme</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="navLink-list">
                                {isAuth() && (<Nav.Link className="pr-5" href="/" style={{color: "#66FCF1"}} >Movies</Nav.Link>)}
                                {isAuth() && (<Nav.Link className="pr-5" href={`/users/${user}`} style={{color: "#66FCF1"}} >{user}'s Profile</Nav.Link>)}
                                {!isAuth() && (<Nav.Link className="pr-5" href="/register" style={{color: "#66FCF1"}} >Sign up</Nav.Link>)}
                                {!isAuth() && (<Nav.Link className="pr-5" style={{color: "#FDFDFD"}} href="/" >Login</Nav.Link>)}
                                {isAuth() && (<Button variant="secondary" onClick={()=>{onLoggedOut() }}>Logout</Button>)}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}