import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import Banner from "../footer/Banner";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

import "../../assets/css/styles.css";

function Experience() {
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
			<Navigation />

			<Container fluid>
				<Row className="content-row">
					<Col sm={12} md={4}>
						<p className="header">Work Experience</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">Apple Inc.</p>
							<p className="date">
								May 2020 - August 2020 &#xb7; Cupertino, CA
							</p>
							<p className="position">Software Development Intern</p>

							<ul className="bullets">
								<li className="bullet">
									Developed a full-stack application to help the Tech Operations
									team manage support tickets, track inventory, and approve
									facility access using a ReactJS and Redux front-end, a
									PostgreSQL database, and a Laravel PHP API
								</li>
								<li className="bullet">
									Created a CRON job in PHP to automate parsing new emails and
									adding their data to the support tickets database
								</li>
								<li className="bullet">
									Integrated microservices for authenticating employees,
									managing data, and creating interface components
								</li>
								<li className="bullet">
									Built an NPM package to handle calls and responses between the
									application and the various back-end APIs
								</li>
								<li className="bullet">
									Configured a Jenkins CI/CD pipeline for integration testing
									and used Docker for local development
								</li>
							</ul>
						</div>

						<div className="entry">
							<p className="title mt-4">VMware, Inc.</p>
							<p className="date">
								May 2019 - August 2019 &#xb7; Palo Alto, CA
							</p>
							<p className="position">Product Development Intern</p>

							<ul className="bullets">
								<li className="bullet">
									Worked on the NSX team to develop two full-stack applications
									using Angular, Node.js, Express.js, and REST APIs
								</li>
								<li className="bullet">
									Created an analytics dashboard that improved load balancing
									for Edges and Edge Clusters in an NSX system
								</li>
								<li className="bullet">
									Wrote a Python script to decompress support bundles, extract
									relevant files, and cleanse and reshape data using Pandas
								</li>
								<li className="bullet">
									Automated data extraction from system logs and consolidated
									key statistics in a troubleshooting dashboard, reducing the
									time required to model the architecture of each NSX
									configuration from 60 minutes to less than 3 minutes
								</li>
							</ul>
						</div>
					</Col>
				</Row>

				<Row className="content-row">
					<Col sm={12} md={4}>
						<p className="header">Activities</p>
					</Col>

					<Col sm={12} md={8}>
						<div className="entry">
							<p className="title">Computer Science Mentors</p>
							<p className="date">January 2019 - Present</p>
							<p className="position">Senior Mentor</p>

							<ul className="bullets">
								<li className="bullet">
									Lead an adjunct section to help students strengthen their
									understanding of Discrete Mathematics and Probability Theory
								</li>
								<li className="bullet">
									Present short lectures and guide students through
									problem-based worksheets to help improve their performance
								</li>
							</ul>
						</div>

						<div className="entry">
							<p className="title mt-4">Upsilon Pi Epsilon: Nu Chapter</p>
							<p className="date">May 2019 - May 2020</p>
							<p className="position">Industrial Relations Officer</p>

							<ul className="bullets">
								<li className="bullet">
									Secured corporate partners, organized company info-sessions,
									and hosted guest speakers for Computer Science students
								</li>
							</ul>
						</div>

						<div className="entry">
							<p className="title mt-4">RoboBears</p>
							<p className="date">July 2018 - May 2020</p>
							<p className="position">Web Developer</p>

							<ul className="bullets">
								<li className="bullet">
									Redesigned the website to simplify navigation and better
									organize content, including recruitment, projects, and events
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>

			<Banner />
			<Footer />
		</div>
	);
}

export default Experience;
