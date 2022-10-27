import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { NavLink } from "react-router-dom";
import "../styles/css/demo1/style.css";
import "../styles/vendors/core/core.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import "../styles/vendors/flag-icon-css/css/flag-icon.min.css";
import FeatherIcon from 'feather-icons-react';


class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
    <nav className="navbar">
				<a href="#" className="sidebar-toggler">
					<i data-feather="menu"></i>
				</a>
				<div className="navbar-content">
        


<ul className="nav nav-tabs nav-fill mt-3" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#" role="tab" aria-controls="#" aria-selected="true">
                              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
                                <p className="d-none d-sm-block">Tab1</p> &nbsp;&nbsp;
                                <button type="button" class="btn-close" aria-label="Close"></button>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#" role="tab" aria-controls="#" aria-selected="false">
                              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
                                <i data-feather="phone-call" className="icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
                                <p className="d-none d-sm-block">Tab1</p>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#" role="tab" aria-controls="#" aria-selected="false">
                              <div className="d-flex flex-row flex-lg-column flex-xl-row align-items-center justify-content-center">
                                <i data-feather="phone-call" className="icon-sm me-sm-2 me-lg-0 me-xl-2 mb-md-1 mb-xl-0"></i>
                                <p className="d-none d-sm-block">Tab3</p>
                              </div>
                            </a>
                          </li>
                          
                        </ul>



				</div>
			</nav>
    </React.Fragment>
    
    );
  }
}

export default Navbar;
