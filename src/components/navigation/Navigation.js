import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Radium, { StyleRoot } from "radium";

import "../../assets/css/styles.css";

function Navigation() {
    return (
        <StyleRoot>
            <Navbar className="navbar" expand="sm">
                <Navbar.Brand className="navbar-name" href="/">
                    sajal sharma
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link className="navbar-link" href="/#/about">
                            about
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="/#/education">
                            education
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="/#/experience">
                            experience
                        </Nav.Link>
                        <Nav.Link className="navbar-link" href="/#/blog">
                            blog
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </StyleRoot>
    );
}

export default Radium(Navigation);
