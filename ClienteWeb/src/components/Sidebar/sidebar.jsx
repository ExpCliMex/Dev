import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { NavLink } from "react-router-dom";
import "../styles/css/demo1/style.css";
import "../styles/vendors/core/core.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import "../styles/vendors/flag-icon-css/css/flag-icon.min.css";
import FeatherIcon from 'feather-icons-react';


class Sidebar extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
     <nav className="sidebar">
                <div className="sidebar-header">
                    <a className="sidebar-brand">
                        Ehya<span>Tech</span>
                    </a>
                    <div className="sidebar-toggler not-active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="sidebar-body">
                    <ul className="nav">
                        <li className="nav-item nav-category">Inicio</li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="link-icon" data-feather="box"></i> 
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Dashboard
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">
                                <i className="link-icon" data-feather="box"></i>
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                test
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">
                                <i className="link-icon" data-feather="box"></i>
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/modal">
                                Modals
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">
                                <i className="link-icon" data-feather="box"></i>
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/calendar">
                                testC
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link">
                                <i className="link-icon" data-feather="box"></i>
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/paciente">
                                paciente
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item nav-category">Calendario</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="emails">
                                <FeatherIcon className="link-icon" icon="calendar" />
                                <span className="link-title">Calendario</span>
                                <FeatherIcon className="link-arrow" icon="chevron-down" />
                            </a>
                            <div className="collapse" id="emails">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Ver calendario
                      </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Añadir cita
                      </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item nav-category">Pacientes</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="uiComponents">

                                <FeatherIcon className="link-icon" icon="users" />
                                <span className="link-title">Pacientes</span>
                                <FeatherIcon className="link-arrow" icon="chevron-down" />
                            </a>
                            <div className="collapse" id="uiComponents">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Buscar
                      </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Dar de alta
                      </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item nav-category">Administrar</li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="general-pages">

                                <FeatherIcon className="link-icon" icon="book" />
                                <span className="link-title">Administrar</span>
                                <FeatherIcon className="link-arrow" icon="chevron-down" />
                            </a>
                            <div className="collapse" id="general-pages">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/paciente">
                        Personal
                      </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Equipo
                      </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className="nav-item nav-category">Informes</li>
                        <li className="nav-item">
                            <a target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="box" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                      HL7/FHIR
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="file" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Laboratoriales
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="dollar-sign" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Factura de pago
                      </NavLink></span>
                      
                            </a>
                        </li>

                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="folder" />
                                
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Reporte de personal
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="folder-plus" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Registro
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="layers" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Procesos
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="file-text" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Resultados
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="folder" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Catalogos
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li className="nav-item nav-category">Historias clinicas</li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="share" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Exportar
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="download" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Importar
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="search" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Buscar
                      </NavLink></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a  target="_blank" className="nav-link">
                                <FeatherIcon className="link-icon" icon="file-plus" />
                                <span className="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Generar PDF
                      </NavLink></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    </React.Fragment>
    
    );
  }
}

export default Sidebar;
