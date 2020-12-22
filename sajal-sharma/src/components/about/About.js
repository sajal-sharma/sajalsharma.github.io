import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import Typist from "react-typist";

import "../../assets/css/styles.css";
import picture from "../../assets/images/headshot.jpg";

function About() {
	return (
		<div className="about">
			<Navigation />

			<Container fluid>
				<Row className="content-row">
					<Col sm={12} md={6}>
						<img className="headshot" alt="Sajal Sharma" src={picture}></img>
					</Col>

					<Col sm={12} md={6}>
						<Typist
							className="greeting TypistExample"
							startDelay={750}
							avgTypingDelay={80}
							cursor={{ hideWhenDone: true }}
						>
							Hi, I'm Sajal.
						</Typist>

						<p className="bio mt-3">
							Hey! My name is Sajal Sharma, and I am currently a fourth-year
							student at the University of California, Berkeley . I am currently
							pursuing a triple major in Computer Science, Economics, and Data
							Science. Although I started programming just a few years ago, I've
							always been in awe of the power and impact of technology. Hoping
							to use both my majors in a meaningful way, I'm primarily
							interested in data analysis, artificial intelligence, financial
							technology, and quantitative trading.
						</p>

						<p className="bio">
							Always seeking to learn new skills and explore my interests, I'm
							constantly working on projects both in and out of class. I am also
							a member of a few student organizations on campus including
							Upsilon Pi Epsilon, Computer Science Mentors, and RoboBears.
						</p>

						<p className="bio">
							Aside from academics, I also enjoying playing basketball with my
							friends, exploring new sights around the Bay Area, tasting new
							foods, and binging on movies.
						</p>
					</Col>
				</Row>
			</Container>

			<Footer />
		</div>
	);
}

export default About;
