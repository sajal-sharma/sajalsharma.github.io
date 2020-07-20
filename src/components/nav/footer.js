import React from "react";

import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

import resume from "assets/resume.pdf";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className=" footer">
                    <Container>
                        <Row className=" align-items-center justify-content-md-between">
                            <Col md="6">
                                <div className=" copyright">&copy; Sajal Sharma 2020</div>
                            </Col>
                            <Col md="6">
                                <Nav className=" nav-footer justify-content-end">
                                    <NavItem>
                                        <NavLink href="https://www.facebook.com/sajal16.sharma" target="_blank">
                                            Facebook
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://www.linkedin.com/in/sajal-sharma" target="_blank">
                                            LinkedIn
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://www.github.com/sajal-sharma" target="_blank">
                                            GitHub
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href={resume} target="_blank">
                                            R&eacute;sum&eacute;
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}

export default Footer;
