import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";
import mountain_view_picture from "../../assets/images/mountain_view.jpg";
import radio_city_picture from "../../assets/images/radio_city.jpg";
import santa_cruz_picture from "../../assets/images/santa_cruz.jpg";
import shoreline_park_picture from "../../assets/images/shoreline_park.jpg";

function Photography() {
	useEffect(() => {
		const headerOptions = {
			origin: "left",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		const entryOptions = {
			origin: "right",
			duration: 1000,
			delay: 250,
			distance: "1em",
		};

		ScrollReveal().reveal(".header", headerOptions);
		ScrollReveal().reveal(".entry", entryOptions);
	}, []);

	return (
		<div className="about">
			<Navigation></Navigation>
			<Container fluid>
				<Row className="content-row">
					<Col sm={12} md={4}>
						<p className="header">Selected Photography</p>
					</Col>

					<Col sm={12} md={8}>
						<p className="intro">
							I recently became interested in photography. Here are some of my
							favorite shots. Check out my Instagram for more!
						</p>

						<Row>
							<Col sm={12}>
								<img
									className="image"
									alt="Sajal Sharma"
									src={mountain_view_picture}
								></img>

								<img
									className="image"
									alt="Sajal Sharma"
									src={santa_cruz_picture}
								></img>
							</Col>
						</Row>

						<Row>
							<Col sm={12}>
								<img
									className="image"
									alt="Sajal Sharma"
									src={shoreline_park_picture}
								></img>

								<img
									className="image"
									alt="Sajal Sharma"
									src={radio_city_picture}
								></img>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Photography;
