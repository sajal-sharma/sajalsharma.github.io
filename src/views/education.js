import React from "react";

import { Card, CardBody, Container, Row, Col } from "reactstrap";

import Navbar from "components/nav/navbar.js";
import Footer from "components/nav/footer.js";

class Education extends React.Component {
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
                                            <h1 className="display-3 text-white">education</h1>
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
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col className="order-md-2" md="6">
                                    <img alt="UC Berkeley Seal" className="img-fluid floating" src={require("assets/img/berkeley.png")} />
                                </Col>
                                <Col className="order-md-1" md="6">
                                    <div className="pr-md-5">
                                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                            <i className="fa fa-graduation-cap" />
                                        </div>
                                        <h3>University of California, Berkeley</h3>
                                        <p>August 2017 - May 2021</p>
                                        <Card className="shadow shadow-lg--hover mt-4">
                                            <CardBody>
                                                <div className="d-flex px-3">
                                                    <div>
                                                        <h5 className="text-info">Bachelor of Arts, Computer Science</h5>
                                                        <p>
                                                            <strong>Coursework:</strong> Data Structures, Efficient Algorithms and Intractable Problems,
                                                            Computer Architecture, Computer Security, Discrete Mathematics and Probability Theory, Artificial
                                                            Intelligence
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className="shadow shadow-lg--hover mt-4">
                                            <CardBody>
                                                <div className="d-flex px-3">
                                                    <div>
                                                        <h5 className="text-success">Bachelor of Arts, Economics</h5>
                                                        <p>
                                                            <strong>Coursework:</strong> Microeconomic Analysis, Macroeconomic Theory, Financial Economics,
                                                            International Trade
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className="shadow shadow-lg--hover mt-4">
                                            <CardBody>
                                                <div>
                                                    <div className="pl-4">
                                                        <h5 className="text-warning">Bachelor of Arts, Data Science</h5>
                                                        <p>
                                                            <strong>Coursework:</strong> Multivariable Calculus, Principles and Techniques of Data Science,
                                                            Probability for Data Science, Machine Learning
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="12">
                                    <div className="pr-md-5">
                                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                            <i className="fa fa-pencil text-primary" />
                                        </div>
                                        <h3>University High School</h3>
                                        <p>September 2013 - June 2017</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <ul>
                                        <li>
                                            <strong>AP Courses/Tests:</strong> Biology, Calculus BC, Chemistry, Computer Science, Macroeconomics, Physics 1,
                                            Physics 2, Political Science, Psychology, Statistics, US History
                                        </li>
                                        <li>
                                            <strong>ACT:</strong> 35 (out of 36)
                                        </li>
                                        <li>
                                            <strong>GPA:</strong> 4.45
                                        </li>
                                    </ul>
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

export default Education;
