import React from "react";
import NavBar from "./navigation";

import "./styles/home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <div className="navigation">
          <NavBar />
        </div>
        <div>home</div>
      </div>
    );
  }
}
