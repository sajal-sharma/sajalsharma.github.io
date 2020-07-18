import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/experience" component={Experience} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
