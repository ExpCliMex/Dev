import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  state = {};
  render() {
    return (
        <footer className="footer border-top">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-3 small">
                  <p className="text-muted mb-1 mb-md-0">Copyright © 2022 Ehya Tech.</p>
                </div>
              </footer>
    );
  }
}

export default Footer;
