import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";

// import Daily from "./daily";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Index} />
          <Route path="/weekly" component={Weekly} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
