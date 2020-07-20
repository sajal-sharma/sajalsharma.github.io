import React from "react";
import { Link } from "react-router-dom";

import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class DemoNavbar extends React.Component {
    render() {
        return (
            <Navbar className="navbar-horizontal navbar-dark bg-primary" expand="lg">
                <Container>
                    <NavbarBrand href="/">Sajal Sharma</NavbarBrand>
                    <button
                        aria-controls="navbar-primary"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#navbar-primary"
                        data-toggle="collapse"
                        id="navbar-primary"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbar-primary">
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to="/">Sajal Sharma</Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button
                                        aria-controls="navbar-primary"
                                        aria-expanded={false}
                                        aria-label="Toggle navigation"
                                        className="navbar-toggler"
                                        data-target="#navbar-primary"
                                        data-toggle="collapse"
                                        id="navbar-primary"
                                        type="button"
                                    >
                                        <span />
                                        <span />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="ml-lg-auto" navbar>
                            <NavItem>
                                <NavLink href="/education">Education</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/experience">Experience</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/skills">Skills</NavLink>
                            </NavItem>
                        </Nav>
                    </UncontrolledCollapse>
                </Container>
            </Navbar>
        );
    }
}

export default DemoNavbar;
