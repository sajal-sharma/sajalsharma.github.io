import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

import "../../assets/css/styles.css";
import picture from "../../assets/images/headshot.jpg";

function Home() {
	return (
		<div className="about">
			<Navigation />

			<Container
				fluid
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<Row className="content-row">
					<Col sm={12} md={6}>
						<p className="greeting">Hello, world! I'm Sajal!</p>

						<p className="intro">
							Welcome to my website! I'm currently a Computer Science,
							Economics, and Data Science major at UC Berkeley.
						</p>
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
