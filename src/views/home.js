import React from "react";

import { Button, Card, Container, Row, Col } from "reactstrap";

import Navbar from "components/nav/navbar.js";
import Footer from "components/nav/footer.js";

import resume from "assets/resume.pdf";

class Profile extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <Navbar />
                <main className="profile-page" ref="main">
                    <section className="section-profile-cover section-shaped my-0">
                        {/* Circles background */}
                        <div className="shape shape-style-1 shape-default alpha-4">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                            </svg>
                        </div>
                    </section>
                    <section className="section">
                        <Container>
                            <Card className="card-profile shadow mt--300">
                                <div className="px-4">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img alt="Sajal Sharma" className="rounded-circle" src={require("assets/img/Sajal_Sharma.jpg")} />
                                                </a>
                                            </div>
                                        </Col>
                                        <Col className="order-lg-3 text-lg-right align-self-lg-center" lg="4">
                                            <div className="card-profile-actions py-4 mt-lg-0">
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                    href="https://www.facebook.com/sajal16.sharma"
                                                    target="_blank"
                                                >
                                                    <span className="btn-inner--icon">
                                                        <i className="fa fa-facebook" />
                                                    </span>
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                    href="https://www.linkedin.com/in/sajal-sharma"
                                                    target="_blank"
                                                >
                                                    <span className="btn-inner--icon">
                                                        <i className="fa fa-linkedin" />
                                                    </span>
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                    href="https://www.github.com/sajal-sharma"
                                                    target="_blank"
                                                >
                                                    <span className="btn-inner--icon">
                                                        <i className="fa fa-github" />
                                                    </span>
                                                </Button>
                                                <Button
                                                    className="btn-icon-only rounded-circle"
                                                    color="primary"
                                                    href="mailto:sharma.sajal@berkeley.edu"
                                                    target="_blank"
                                                >
                                                    <span className="btn-inner--icon">
                                                        <i className="fa fa-envelope" />
                                                    </span>
                                                </Button>
                                                <Button className="btn-icon-only rounded-circle" color="primary" href={resume} target="_blank">
                                                    <span className="btn-inner--icon">
                                                        <i className="fa fa-link" />
                                                    </span>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col className="order-lg-1" lg="4">
                                            <div className="card-profile-stats d-flex justify-content-center">
                                                <div>
                                                    <span className="heading">22</span>
                                                    <span className="description">Friends</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Photos</span>
                                                </div>
                                                <div>
                                                    <span className="heading">89</span>
                                                    <span className="description">Comments</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="text-center mt-5">
                                        <h3>Sajal Sharma</h3>
                                        <div className="h6 font-weight-300">San Francisco Bay Area</div>
                                        <div className="h6 mt-4">Software Development Intern at Apple</div>
                                        <div className="h6">Senior at the University of California, Berkeley</div>
                                    </div>
                                    <div className="mt-4 py-4 border-top text-left">
                                        <Row className="justify-content-center">
                                            <Col lg="9">
                                                <p>
                                                    Hi! My name is Sajal Sharma, and I am currently an incoming fourth-year student at the University of
                                                    California, Berkeley. I am currently pursuing a triple major in Computer Science, Data Science, and
                                                    Economics. Although I started programming just a few years ago, I've always been in amazed by the impact
                                                    that technology has on our world. Hoping to use my majors in a meaningful way, I'm primarily interested in
                                                    data analysis, artificial intelligence, financial technology, and quantitative trading.
                                                </p>
                                                <p>
                                                    Always seeking to learn new skills and explore my interests, I'm constantly working on projects both in and
                                                    out of class. I am also a member of a few student organizations on campus including Upsilon Pi Epsilon,
                                                    Computer Science Mentors, and RoboBears.
                                                </p>
                                                <p>
                                                    Aside from academics, I also enjoying anything basketball related, exploring new places around the Bay Area,
                                                    tasting new foods, and binging on movies. Amidst the quarantine, I've also become more interested in
                                                    photography and biking.
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Container>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Profile;
