import React from "react";

import { Container, Row, Col } from "reactstrap";

import Navbar from "components/nav/navbar.js";
import Footer from "components/nav/footer.js";

class Skills extends React.Component {
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
                                            <h1 className="display-3 text-white">skills</h1>
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
                                <Col md="12">
                                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                        <i className="fa fa-code text-primary" />
                                    </div>
                                    <h3>Programming Languages</h3>
                                </Col>
                                <Col md="4">
                                    <ul>
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>JavaScript/TypeScript</li>
                                    </ul>
                                </Col>
                                <Col md="4">
                                    <ul>
                                        <li>HTML/CSS</li>
                                        <li>C</li>
                                        <li>Swift</li>
                                    </ul>
                                </Col>
                                <Col md="4">
                                    <ul>
                                        <li>SQL</li>
                                        <li>Go</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="12">
                                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                        <i className="fa fa-terminal text-primary" />
                                    </div>
                                    <h3>Libraries and Frameworks</h3>
                                </Col>
                                <Col md="4">
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>Angular</li>
                                        <li>Node.js</li>
                                    </ul>
                                </Col>
                                <Col md="4">
                                    <ul>
                                        <li>Express.js</li>
                                        <li>Redux</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </Col>
                                <Col md="4">
                                    <ul>
                                        <li>NumPy/Pandas</li>
                                        <li>Scikit-learn</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-lg">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="12">
                                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary mb-3">
                                        <i className="fa fa-wrench text-primary" />
                                    </div>
                                    <h3>Tools and Services</h3>
                                </Col>
                                <Col md="6">
                                    <ul>
                                        <li>GitHub</li>
                                        <li>Docker</li>
                                    </ul>
                                </Col>
                                <Col md="6">
                                    <ul>
                                        <li>Jenkins</li>
                                        <li>Firebase</li>
                                    </ul>
                                </Col>
                                <Col md="6">
                                    <ul></ul>
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

export default Skills;
