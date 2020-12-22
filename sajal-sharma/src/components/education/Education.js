import React from "react";
import Navigation from "../navigation/Navigation";
import Banner from "../footer/Banner";
import Footer from "../footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

import "../../assets/css/styles.css";

function Education() {
	return (
		<div className="about">
			<Navigation />

			<Container fluid>
				<Row className="content-row">
					<Col sm={4}>
						<p className="header">Education</p>
					</Col>

					<Col sm={8}>
						<div>
							<p className="title">University of California, Berkeley</p>
							<p className="date">August 2017 - May 2021</p>

							<p className="position mt-3">
								Bachelor of Arts, Computer Science
							</p>

							<p className="bullet">Coursework:</p>
							<ul className="bullets">
								<li className="bullet">
									Data Structures and Algorithms (COMPSCI 61B)
								</li>
								<li className="bullet">Computer Architecture (COMPSCI 61C)</li>
								<li className="bullet">
									Discrete Mathematics and Probability Theory (COMPSCI 70)
								</li>
								<li className="bullet">Computer Security (COMPSCI 161)</li>
								<li className="bullet">Operating Systems (COMPSCI 162)</li>
								<li className="bullet">
									Efficient Algorithms and Intractable Problems (COMPSCI 170)
								</li>
								<li className="bullet">Database Systems (COMPSCI 186)</li>
							</ul>

							<p className="position mt-3">Bachelor of Arts, Economics</p>
							<p className="bullet">Coursework:</p>
							<ul className="bullets">
								<li className="bullet">Microeconomic Analysis (ECON 100A)</li>
								<li className="bullet">Macroeconomic Theory (ECON 101B)</li>
								<li className="bullet">Econometrics (ECON 140)</li>
								<li className="bullet">International Trade (ECON C181)</li>
								<li className="bullet">
									International Monetary Economics (ECON 182)
								</li>
								<li className="bullet">Investments (UGBA 133)</li>
							</ul>

							<p className="position mt-3">Bachelor of Arts, Data Science</p>
							<p className="bullet">Coursework:</p>
							<ul className="bullets">
								<li className="bullet">Multivariable Calculus (MATH 53)</li>
								<li className="bullet">
									Probability for Data Science (STAT 140)
								</li>
								<li className="bullet">
									Artificial Intelligence (COMPSCI 188)
								</li>
								<li className="bullet">Machine Learning (COMPSCI 189)</li>
							</ul>
						</div>

						<div>
							<p className="title mt-4">University High School</p>
							<p className="date">September 2013 - June 2017</p>

							<ul className="bullets">
								<li className="bullet">GPA: 4.45</li>
								<li className="bullet">ACT: 35 (out of 36)</li>
								<li className="bullet">
									Activities: Speech and Debate, Volleyball
								</li>
							</ul>
						</div>
					</Col>
				</Row>

				<Row className="content-row">
					<Col sm={4}>
						<p className="header">Awards/Honors</p>
					</Col>

					<Col sm={8}>
						<div>
							<p className="title">Best Web Application</p>
							<p className="date">October 2017 &#xb7; Cal Hacks</p>
							<p className="description">
								Awarded to the team that develops the best application for web
								browsers determined by the judges
							</p>

							<p className="title mt-4">Cal Hacks Finalist</p>
							<p className="date">October 2017 &#xb7; Cal Hacks</p>
							<p className="description">
								Six finalists were hand-selected by judges for the development
								and potential of their projects from a pool of 216 entries
							</p>

							<p className="title mt-4">National AP Scholar</p>
							<p className="date">August 2017 &#xb7; College Board</p>
							<p className="description">
								Granted to students who receive an average of 4 or higher on all
								AP Exams taken and score 4 or higher on at least eight of these
								exams
							</p>

							<p className="title mt-4">Summa Cum Laude</p>
							<p className="date">May 2017 &#xb7; University High School</p>
							<p className="description">
								Given to students with a weighted GPA of 4.40 or higher
							</p>

							<p className="title mt-4">Commended National Merit Scholar</p>
							<p className="date">
								March 2017 &#xb7; National Merit Scholarship Corporation
							</p>
							<p className="description">
								Recognizes outstanding academic promise on the basis of a
								nationally applied Selection Index score achieved on the PSAT
							</p>
						</div>
					</Col>
				</Row>
			</Container>

			<Banner />
			<Footer />
		</div>
	);
}

export default Education;
