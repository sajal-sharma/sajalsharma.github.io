import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";
import picture from "../../assets/images/headshot.jpg";

function Home() {
	useEffect(() => {
		const contentOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		const headshotOptions = {
			origin: "right",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".content", contentOptions);
		ScrollReveal().reveal(".headshot", headshotOptions);
	}, []);

	return (
		<div className="about">
			<Navigation />

			<Container fluid>
				<Row className="content-row">
					<Col sm={12} md={6}>
						<div className="content">
							<p className="greeting">Hello, world! I'm Sajal!</p>

							<p className="intro">
								Welcome to my website! I'm currently a Computer Science,
								Economics, and Data Science major at UC Berkeley.
							</p>

							<p className="intro">
								*I'm currently redesigning this website and will be making
								improvements.
							</p>
						</div>
					</Col>

					<Col sm={12} md={6}>
						<img className="headshot" alt="Sajal Sharma" src={picture}></img>
					</Col>
				</Row>
			</Container>

			<Footer />
		</div>
	);
}

export default Home;

// style={{
// 	position: "absolute",
// 	left: "50%",
// 	top: "50%",
// 	transform: "translate(-50%, -50%)",
// }}
