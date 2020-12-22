import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Photography from "./components/photography/Photography";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/education" component={Education} />
					<Route exact path="/experience" component={Experience} />
					<Route exact path="/photography" component={Photography} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
