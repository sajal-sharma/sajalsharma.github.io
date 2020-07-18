import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";
import picture from "../../assets/images/about.jpg";

function About() {
    useEffect(() => {
        const textConfig = {
            origin: "right",
            duration: 1500,
            delay: 500,
            distance: "75px",
            scale: 1,
            easing: "ease",
        };

        ScrollReveal().reveal(".bio", textConfig);
    }, []);

    return (
        <div className="about">
            <Navigation color={"blue"}></Navigation>
            <Container fluid>
                <Row className="full-screen">
                    <Col sm="12" xl="6" className="center-vertical">
                        <img className="headshot" alt="Sajal Sharma" src={picture}></img>
                    </Col>
                    <Col sm={12} xl={6} className="center-vertical">
                        <div className="bio">
                            <p className="p1">
                                Hey! My name is <strong>Sajal Sharma</strong>, and I am currently a fourth-year student at the{" "}
                                <strong>University of California, Berkeley</strong>. I am currently pursuing a triple major in <strong>Computer Science</strong>
                                , <strong>Economics</strong>, and <strong>Data Science</strong>. Although I started programming just a few years ago, I've
                                always been in awe of the power and impact of technology. Hoping to use both my majors in a meaningful way, I'm primarily
                                interested in data analysis, artificial intelligence, financial technology, and quantitative trading.
                            </p>

                            <p className="p2">
                                Always seeking to learn new skills and explore my interests, I'm constantly working on projects both in and out of class. I am
                                also a member of a few student organizations on campus including Upsilon Pi Epsilon, Computer Science Mentors, and RoboBears.
                            </p>

                            <p className="p3">
                                Aside from academics, I also enjoying playing basketball with my friends, exploring new sights around the Bay Area, tasting new
                                foods, and binging on movies.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
