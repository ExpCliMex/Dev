import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="horizontal-menu">
        <nav className="navbar top-navbar">
          <div className="container">
            <div className="navbar-content">
              <a className="navbar-brand">
                Ehya <span>Tech</span>
              </a>
              <form className="search-form">
                <div className="input-group">
                  <div className="input-group-text">
                    <i data-feather="search"></i>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="navbarForm"
                    placeholder="Buscar..."
                  />
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="https://via.placeholder.com/30x30"
                      alt="profile"
                    />
                  </a>
                  <div
                    className="dropdown-menu p-0"
                    aria-labelledby="profileDropdown"
                  >
                    <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                      <div className="mb-3">
                        <img
                          className="wd-80 ht-80 rounded-circle"
                          src="https://via.placeholder.com/80x80"
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <p className="tx-16 fw-bolder">Asusgrinch</p>
                        <p className="tx-12 text-muted">asusgrinch@gmail.com</p>
                      </div>
                    </div>
                    <ul className="list-unstyled p-1">
                      <li className="dropdown-item py-2">
                        <a
                          to="pages/general/profile.html"
                          className="text-body ms-0"
                        >
                          <i className="me-2 icon-md" data-feather="user"></i>
                          <span>Perfil</span>
                        </a>
                      </li>
                      <li className="dropdown-item py-2">
                        <a to="javascript:;" className="text-body ms-0">
                          <i className="me-2 icon-md" data-feather="edit"></i>
                          <span>Editar perfil</span>
                        </a>
                      </li>
                      <li className="dropdown-item py-2">
                        <a to="javascript:;" className="text-body ms-0">
                          <i className="me-2 icon-md" data-feather="repeat"></i>
                          <span>Cambiar de usuario</span>
                        </a>
                      </li>
                      <li className="dropdown-item py-2">
                        <a to="javascript:;" className="text-body ms-0">
                          <i
                            className="me-2 icon-md"
                            data-feather="log-out"
                          ></i>
                          <span>Cerrar sesión</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="horizontal-menu-toggle"
              >
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
        </nav>
        <nav className="bottom-navbar">
          <div className="container">
            <ul className="nav page-navigation">
              <li className="nav-item">
                <a className="nav-link" to="/com">
                  <i className="link-icon" data-feather="calendar"></i>
                  <span className="menu-title">Inicio</span>
                </a>
              </li>
              <li className="nav-item">
                <a to="#" className="nav-link">
                  <i className="link-icon" data-feather="calendar"></i>
                  <span className="menu-title">Calendario</span>
                  <i className="link-arrow"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="category-heading">Acciones</li>
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/paciente">
                        Registro
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/login">
                        Login
                      </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" to="/com">
                        Añadir cita
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" to="/com">
                        Programar cita
                      </a>
                    </li>
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        PacienteTest
                      </NavLink>{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a to="#" className="nav-link">
                  <i className="link-icon" data-feather="feather"></i>
                  <span className="menu-title">Pacientes</span>
                  <i className="link-arrow"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="category-heading">Acciones</li>
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/paciente">
                        Buscar
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/paciente">
                        Dar de alta
                      </NavLink>{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a to="#" className="nav-link">
                  <i className="link-icon" data-feather="inbox"></i>
                  <span className="menu-title">Administrar</span>
                  <i className="link-arrow"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="nav-item">
                      <a className="nav-link" to="/com">
                        Personal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="/com">
                        Equipo
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a to="#" className="nav-link">
                  <i className="link-icon" data-feather="pie-chart"></i>
                  <span className="menu-title">Informes</span>
                  <i className="link-arrow"></i>
                </a>
                <div className="submenu">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="submenu-item pe-md-0">
                        <li className="category-heading">Informes</li>
                        <li className="nav-item">
                          <a className="nav-link" to="/com">
                            HL7/FHIR
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" to="/com">
                            Resumen de historia clinica
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" to="/com">
                            Laboratoriales
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" to="/com">
                            Factura de pago
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" to="/com">
                            Reporte de personal
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a to="#" className="nav-link">
                  <i className="link-icon" data-feather="smile"></i>
                  <span className="menu-title">Laboratorios</span>
                  <i className="link-arrow"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/laboratorio">
                        Registro
                      </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="lab.html">
                        Procesos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="lab.html">
                        Resultados
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="lab.html">
                        Catálogos
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a to="#" className="nav-link">
                  <i className="link-icon" data-feather="smile"></i>
                  <span className="menu-title">Historias clinicas</span>
                  <i className="link-arrow"></i>
                </a>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="nav-item">
                      <a className="nav-link" to="exportar.html">
                        Exportar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="importar.html">
                        importar
                      </a>
                    </li>
                    <li>
                      {" "}
                      <NavLink className="nav-item nav-link" to="/historiaClinica">
                        Buscar
                      </NavLink>{" "}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" to="buscar.html">
                        Generar PDF
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
