import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faLinkedinIn,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/styles.css";

function Footer() {
	return (
		<div>
			<Container className="footer" fluid>
				<Row>
					<Col sm={6}>
						<div className="links">
							<FontAwesomeIcon className="icon" icon={faFacebook} />
							<FontAwesomeIcon className="icon" icon={faInstagram} />
							<FontAwesomeIcon className="icon" icon={faLinkedinIn} />
							<FontAwesomeIcon className="icon" icon={faGithub} />
							<FontAwesomeIcon className="icon" icon={faEnvelope} />
						</div>
					</Col>

					<Col sm={6}>
						<p className="copyright">&#169; 2020 Sajal Sharma</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
