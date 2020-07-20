import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Home from "views/home.js";
import Experience from "views/experience.js";
import Education from "views/education.js";
import Skills from "views/skills.js";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/education" exact render={(props) => <Education {...props} />} />
            <Route path="/experience" exact render={(props) => <Experience {...props} />} />
            <Route path="/skills" exact render={(props) => <Skills {...props} />} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
