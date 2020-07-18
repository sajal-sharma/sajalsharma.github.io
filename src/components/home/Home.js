import React, { Component } from "react";
import Typist from "react-typist";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../navigation/Navigation";
import headshot from "../../assets/images/sajalsharma.png";

import "../../assets/css/styles.css";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    updateDimensions = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className="home">
                <Navigation></Navigation>
                <Container>
                    <Row className="full-screen">
                        <Col sm={12} xl={6} className="center-vertical">
                            <img className="graphic" src={headshot} alt="Sajal Sharma"></img>
                        </Col>
                        <Col sm={12} xl={6} className="center-vertical">
                            <div className="greeting">
                                <p className="text">Hello, world! I'm a</p>
                                <Typist
                                    startDelay={900}
                                    cursor={{
                                        show: false,
                                        blink: true,
                                        hideWhenDone: true,
                                        hideWhenDoneDelay: 0,
                                    }}
                                >
                                    <p className="text">basketball fan.</p>
                                    <Typist.Backspace count={30} delay={900} />
                                    <p className="text">trader.</p>
                                    <Typist.Backspace count={30} delay={900} />
                                    <p className="text">software engineer.</p>
                                    <Typist.Backspace count={30} delay={900} />
                                    <p className="text">student at UC Berkeley.</p>
                                </Typist>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
