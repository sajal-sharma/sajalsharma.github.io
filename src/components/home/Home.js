import React, { Component } from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Home.css";

import Navigation from "../navigation/Navigation";
import headshot from "../../assets/images/sajalsharma.png";

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
        let greeting_class_name;
        let image_class_name;

        if (this.state.width > 992) {
            greeting_class_name = "greeting-lg";
            image_class_name = "image-lg";
        } else {
            greeting_class_name = "greeting-sm";
            image_class_name = "image-sm";
        }

        return (
            <div className="home">
                <Navigation></Navigation>
                <Container>
                    <Row>
                        <Col sm={12} lg={7}>
                            <div className={`${image_class_name}`}>
                                <img className="headshot" src={headshot} alt="Sajal Sharma"></img>
                            </div>
                        </Col>
                        <Col sm={12} lg={5}>
                            <div className={`${greeting_class_name}`}>
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
