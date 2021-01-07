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
		<div>
			<Navigation />

			<Container fluid className="center">
				<Row className="content-row">
					<Col sm={12} md={6} className="mobile-padding">
						<div className="content center">
							<p className="greeting">Hello, world! I'm Sajal!</p>

							<p className="intro mb-0">
								Welcome to my website! I'm currently a Computer Science,
								Economics, and Data Science major at UC Berkeley.
							</p>
						</div>
					</Col>

					<Col sm={12} md={6} className="mobile-padding">
						<div className="center">
							<img className="headshot" alt="Sajal Sharma" src={picture}></img>
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

export default Home;
