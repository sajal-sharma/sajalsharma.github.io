import React from "react";

import { Card, CardImg, Container, Row, Col } from "reactstrap";

import Navbar from "components/nav/navbar.js";
import Footer from "components/nav/footer.js";

class Experience extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <Navbar />
                <main ref="main">
                    <div className="position-relative">
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">experience</h1>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            <div className="separator separator-bottom separator-skew">
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                    <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                                </svg>
                            </div>
                        </section>
                    </div>
                    <section className="section">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="12">
                                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                        <i className="fa fa-briefcase text-primary" />
                                    </div>
                                    <h3 className="mb-4">Work Experience</h3>
                                </Col>
                                <Col md="6">
                                    <Card className="card-lift--hover bg-default shadow border-0">
                                        <CardImg alt="Apple" src={require("assets/img/apple1.jpg")} top />
                                        <blockquote className="card-blockquote">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="svg-bg" preserveAspectRatio="none" viewBox="0 0 583 95">
                                                <polygon className="fill-default" points="0,52 583,95 0,95" />
                                            </svg>
                                            <h3 className="text-white">Apple Inc.</h3>
                                            <div className="h6 font-weight-300 text-white">May 2020 - Present</div>
                                            <div className="h6 mt-4 text-white">Software Development Intern</div>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card className="card-lift--hover bg-default shadow border-0">
                                        <CardImg alt="VMware" src={require("assets/img/vmware.png")} top />
                                        <blockquote className="card-blockquote">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="svg-bg" preserveAspectRatio="none" viewBox="0 0 583 95">
                                                <polygon className="fill-default" points="0,52 583,95 0,95" />
                                            </svg>
                                            <h3 className="text-white">VMware, Inc.</h3>
                                            <div className="h6 font-weight-300 text-white">May 2019 - August 2019</div>
                                            <div className="h6 mt-4 text-white">Product Development Intern</div>
                                        </blockquote>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="12">
                                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                        <i className="fa fa-leaf text-primary" />
                                    </div>
                                    <h3 className="mb-4">Activities</h3>
                                </Col>
                                <Col md="6" className="mb-5">
                                    <Card className="card-lift--hover bg-default shadow border-0">
                                        <blockquote className="card-blockquote">
                                            <h3 className="text-white">Computer Science Mentors</h3>
                                            <div className="h6 font-weight-300 text-white">January 2019 - Present</div>
                                            <div className="h6 mt-4 text-white">Senior Mentor</div>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6" className="mb-5">
                                    <Card className="card-lift--hover bg-default shadow border-0">
                                        <blockquote className="card-blockquote">
                                            <h3 className="text-white">Upsilon Pi Epsilon</h3>
                                            <div className="h6 font-weight-300 text-white">May 2019 - May 2020</div>
                                            <div className="h6 mt-4 text-white">Industrial Relations Chair</div>
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card className="card-lift--hover bg-default shadow border-0">
                                        <blockquote className="card-blockquote">
                                            <h3 className="text-white">RoboBears</h3>
                                            <div className="h6 font-weight-300 text-white">July 2018 - May 2020</div>
                                            <div className="h6 mt-4 text-white">Web Developer</div>
                                        </blockquote>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Experience;
