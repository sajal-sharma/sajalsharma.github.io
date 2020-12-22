import React from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";

import "../../assets/css/styles.css";
import picture from "../../assets/images/headshot.jpg";

function Photography() {
	return (
		<div className="about">
			<Navigation></Navigation>
			<Container fluid>
				<Row className="content-row">
					<Col sm={4}>
						<p className="header">Selected Photography</p>
					</Col>

					<Col sm={8}>
						<p className="intro">
							I recently became interested in photography. Here are some of my
							favorite shots. Check out my Instagram for more!
						</p>

						<img className="pic" alt="Sajal Sharma" src={picture}></img>
						<img className="pic" alt="Sajal Sharma" src={picture}></img>
						<img className="pic" alt="Sajal Sharma" src={picture}></img>
						<img className="pic" alt="Sajal Sharma" src={picture}></img>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Photography;
