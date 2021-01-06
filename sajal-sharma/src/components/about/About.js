import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import Typist from "react-typist";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";
import picture from "../../assets/images/headshot2.jpg";

function About() {
	useEffect(() => {
		const headshotOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		const contentOptions = {
			origin: "right",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".headshot", headshotOptions);
		ScrollReveal().reveal(".content", contentOptions);
	}, []);

	return (
		<div className="page">
			<Navigation />

			<Container fluid className="center">
				<Row className="content-row">
					<Col sm={12} md={6}>
						<img className="headshot" alt="Sajal Sharma" src={picture}></img>
					</Col>

					<Col sm={12} md={6} className="right">
						<div className="content">
							<Typist
								className="greeting typist"
								startDelay={750}
								avgTypingDelay={80}
								cursor={{ hideWhenDone: true }}
							>
								Hi, I'm Sajal.
							</Typist>

							<p className="intro mt-3">
								Hey! My name is Sajal Sharma, and I am currently a fourth-year
								student at the University of California, Berkeley . I am
								currently pursuing a triple major in Computer Science,
								Economics, and Data Science. Although I started programming just
								a few years ago, I've always been in awe of the power and impact
								of technology. Hoping to use my majors in a meaningful way, I'm
								primarily interested in data analysis, artificial intelligence,
								financial technology, and quantitative trading.
							</p>

							<p className="intro">
								Always seeking to learn new skills and explore my interests, I'm
								constantly working on projects both in and out of class. I am
								also a member of a few student organizations on campus including
								Upsilon Pi Epsilon, Computer Science Mentors, and RoboBears.
							</p>

							<p className="intro">
								Aside from academics, I also enjoying playing basketball with my
								friends, exploring new sights around the Bay Area, tasting new
								foods, and binging on movies.
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<div className="fixed-bottom">
				<Footer />
			</div>
		</div>
	);
}

export default About;
