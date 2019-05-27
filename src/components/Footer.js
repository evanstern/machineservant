import React from "react";
import { Link } from "gatsby";

import logo from "../img/machineservant-logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Machine Servant"
            style={{ width: "14em", height: "10em", paddingBottom: "50px" }}
          />
        </div>
      </footer>
    );
  }
};

export default Footer;
