import React from "react";

import "./styles/navigation.css";
import Logo from "./images/logo.PNG";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div className="left-links">left links</div>
        <div className="logo">
          <img src={Logo} alt="SalteeKiller" />
        </div>
        <div className="right-links">right links</div>
      </div>
    );
  }
}
