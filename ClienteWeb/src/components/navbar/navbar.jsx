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
     <nav class="sidebar">
                <div class="sidebar-header">
                    <a href="#" class="sidebar-brand">
                        Ehya<span>Tech</span>
                    </a>
                    <div class="sidebar-toggler not-active">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="sidebar-body">
                    <ul class="nav">
                        <li class="nav-item nav-category">Inicio</li>
                        <li class="nav-item">
                            <a href="dashboard.html" class="nav-link">
                                <i class="link-icon" data-feather="box"></i>
                                {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Dashboard
                      </NavLink>{" "}
                            </a>
                        </li>
                        <li class="nav-item nav-category">Calendario</li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
                                <FeatherIcon class="link-icon" icon="calendar" />
                                <span class="link-title">Calendario</span>
                                <FeatherIcon class="link-arrow" icon="chevron-down" />
                            </a>
                            <div class="collapse" id="emails">
                                <ul class="nav sub-menu">
                                    <li class="nav-item">
                                    {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Ver calendario
                      </NavLink>{" "}
                                    </li>
                                    <li class="nav-item">
                                    {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Añadir cita
                      </NavLink>{" "}
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item nav-category">Pacientes</li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="collapse" href="#uiComponents" role="button" aria-expanded="false" aria-controls="uiComponents">

                                <FeatherIcon class="link-icon" icon="users" />
                                <span class="link-title">Pacientes</span>
                                <FeatherIcon class="link-arrow" icon="chevron-down" />
                            </a>
                            <div class="collapse" id="uiComponents">
                                <ul class="nav sub-menu">
                                    <li class="nav-item">
                                    {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Buscar
                      </NavLink>{" "}
                                    </li>
                                    <li class="nav-item">
                                    {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Dar de alta
                      </NavLink>{" "}
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item nav-category">Administrar</li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">

                                <FeatherIcon class="link-icon" icon="book" />
                                <span class="link-title">Administrar</span>
                                <FeatherIcon class="link-arrow" icon="chevron-down" />
                            </a>
                            <div class="collapse" id="general-pages">
                                <ul class="nav sub-menu">
                                    <li class="nav-item">
                                    {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Personal
                      </NavLink>{" "}
                                    </li>
                                    <li class="nav-item">
                                    {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Equipo
                      </NavLink>{" "}
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li class="nav-item nav-category">Informes</li>
                        <li class="nav-item">
                            <a href="" target="_blank" class="nav-link">
                                <FeatherIcon class="link-icon" icon="box" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                      HL7/FHIR
                      </NavLink></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="file" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Laboratoriales
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="dollar-sign" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Factura de pago
                      </NavLink></span>
                      
                            </a>
                        </li>

                        <li class="nav-item">
                            <a href="" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="folder" />
                                
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Reporte de personal
                      </NavLink></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="folder-plus" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Registro
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="layers" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Procesos
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="file-text" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Resultados
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="folder" />
                                <span class="link-title"><NavLink className="nav-item nav-link" to="/pacienteTest">
                                Catalogos
                      </NavLink></span>
                      
                            </a>
                        </li>
                        <li class="nav-item nav-category">Historias clinicas</li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="share" />
                                {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Exportar
                      </NavLink>{" "}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="download" />
                                {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Importar
                      </NavLink>{" "}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="search" />
                                {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Buscar
                      </NavLink>{" "}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="file-plus" />
                                {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Generar PDF
                      </NavLink>{" "}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="file-plus" />
                                {" "}
                      <NavLink className="nav-item nav-link" to="/pacienteTest">
                        Generar PDF
                      </NavLink>{" "}
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" target="_blank" class="nav-link">
                                <i class="link-icon" data-feather="hash"></i>
                                <FeatherIcon class="link-icon" icon="file-plus" />
                                <span class="link-title">Generar PDF</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    <nav class="navbar">
				<a href="#" class="sidebar-toggler">
					<i data-feather="menu"></i>
				</a>
				<div class="navbar-content">
					<form class="search-form">
						<div class="input-group">
              <div class="input-group-text">
                <i data-feather="search"></i>
              </div>
							<input type="text" class="form-control" id="navbarForm" placeholder="Search here..."/>
						</div>
					</form>
					<ul class="navbar-nav">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="flag-icon flag-icon-us mt-1" title="us"></i> <span class="ms-1 me-1 d-none d-md-inline-block">English</span>
							</a>
							<div class="dropdown-menu" aria-labelledby="languageDropdown">
                <a href="javascript:;" class="dropdown-item py-2"><i class="flag-icon flag-icon-us" title="us" id="us"></i> <span class="ms-1"> English </span></a>
                <a href="javascript:;" class="dropdown-item py-2"><i class="flag-icon flag-icon-fr" title="fr" id="fr"></i> <span class="ms-1"> French </span></a>
                <a href="javascript:;" class="dropdown-item py-2"><i class="flag-icon flag-icon-de" title="de" id="de"></i> <span class="ms-1"> German </span></a>
                <a href="javascript:;" class="dropdown-item py-2"><i class="flag-icon flag-icon-pt" title="pt" id="pt"></i> <span class="ms-1"> Portuguese </span></a>
                <a href="javascript:;" class="dropdown-item py-2"><i class="flag-icon flag-icon-es" title="es" id="es"></i> <span class="ms-1"> Spanish </span></a>
							</div>
            </li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i data-feather="grid"></i>
							</a>
							<div class="dropdown-menu p-0" aria-labelledby="appsDropdown">
                <div class="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
									<p class="mb-0 fw-bold">Web Apps</p>
									<a href="javascript:;" class="text-muted">Edit</a>
								</div>
                <div class="row g-0 p-1">
                  <div class="col-3 text-center">
                    <a href="pages/apps/chat.html" class="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="message-square" class="icon-lg mb-1"></i><p class="tx-12">Chat</p></a>
                  </div>
                  <div class="col-3 text-center">
                    <a href="pages/apps/calendar.html" class="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="calendar" class="icon-lg mb-1"></i><p class="tx-12">Calendar</p></a>
                  </div>
                  <div class="col-3 text-center">
                    <a href="pages/email/inbox.html" class="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="mail" class="icon-lg mb-1"></i><p class="tx-12">Email</p></a>
                  </div>
                  <div class="col-3 text-center">
                    <a href="pages/general/profile.html" class="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="instagram" class="icon-lg mb-1"></i><p class="tx-12">Profile</p></a>
                  </div>
                </div>
								<div class="px-3 py-2 d-flex align-items-center justify-content-center border-top">
									<a href="javascript:;">View all</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i data-feather="mail"></i>
							</a>
							<div class="dropdown-menu p-0" aria-labelledby="messageDropdown">
								<div class="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
									<p>9 New Messages</p>
									<a href="javascript:;" class="text-muted">Clear all</a>
								</div>
                <div class="p-1">
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="me-3">
                      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div class="d-flex justify-content-between flex-grow-1">
                      <div class="me-4">
                        <p>Leonardo Payne</p>
                        <p class="tx-12 text-muted">Project status</p>
                      </div>
                      <p class="tx-12 text-muted">2 min ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="me-3">
                      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div class="d-flex justify-content-between flex-grow-1">
                      <div class="me-4">
                        <p>Carl Henson</p>
                        <p class="tx-12 text-muted">Client meeting</p>
                      </div>
                      <p class="tx-12 text-muted">30 min ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="me-3">
                      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div class="d-flex justify-content-between flex-grow-1">
                      <div class="me-4">
                        <p>Jensen Combs</p>
                        <p class="tx-12 text-muted">Project updates</p>
                      </div>
                      <p class="tx-12 text-muted">1 hrs ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="me-3">
                      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div class="d-flex justify-content-between flex-grow-1">
                      <div class="me-4">
                        <p>Amiah Burton</p>
                        <p class="tx-12 text-muted">Project deatline</p>
                      </div>
                      <p class="tx-12 text-muted">2 hrs ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="me-3">
                      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div class="d-flex justify-content-between flex-grow-1">
                      <div class="me-4">
                        <p>Yaretzi Mayo</p>
                        <p class="tx-12 text-muted">New record</p>
                      </div>
                      <p class="tx-12 text-muted">5 hrs ago</p>
                    </div>	
                  </a>
                </div>
								<div class="px-3 py-2 d-flex align-items-center justify-content-center border-top">
									<a href="javascript:;">View all</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i data-feather="bell"></i>
								<div class="indicator">
									<div class="circle"></div>
								</div>
							</a>
							<div class="dropdown-menu p-0" aria-labelledby="notificationDropdown">
								<div class="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
									<p>6 New Notifications</p>
									<a href="javascript:;" class="text-muted">Clear all</a>
								</div>
                <div class="p-1">
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i class="icon-sm text-white" data-feather="gift"></i>
                    </div>
                    <div class="flex-grow-1 me-2">
											<p>New Order Recieved</p>
											<p class="tx-12 text-muted">30 min ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i class="icon-sm text-white" data-feather="alert-circle"></i>
                    </div>
                    <div class="flex-grow-1 me-2">
											<p>Server Limit Reached!</p>
											<p class="tx-12 text-muted">1 hrs ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                    </div>
                    <div class="flex-grow-1 me-2">
											<p>New customer registered</p>
											<p class="tx-12 text-muted">2 sec ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i class="icon-sm text-white" data-feather="layers"></i>
                    </div>
                    <div class="flex-grow-1 me-2">
											<p>Apps are ready for update</p>
											<p class="tx-12 text-muted">5 hrs ago</p>
                    </div>	
                  </a>
                  <a href="javascript:;" class="dropdown-item d-flex align-items-center py-2">
                    <div class="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
											<i class="icon-sm text-white" data-feather="download"></i>
                    </div>
                    <div class="flex-grow-1 me-2">
											<p>Download completed</p>
											<p class="tx-12 text-muted">6 hrs ago</p>
                    </div>	
                  </a>
                </div>
								<div class="px-3 py-2 d-flex align-items-center justify-content-center border-top">
									<a href="javascript:;">View all</a>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile"/>
							</a>
							<div class="dropdown-menu p-0" aria-labelledby="profileDropdown">
								<div class="d-flex flex-column align-items-center border-bottom px-5 py-3">
									<div class="mb-3">
										<img class="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt=""/>
									</div>
									<div class="text-center">
										<p class="tx-16 fw-bolder">Amiah Burton</p>
										<p class="tx-12 text-muted">amiahburton@gmail.com</p>
									</div>
								</div>
                <ul class="list-unstyled p-1">
                  <li class="dropdown-item py-2">
                    <a href="pages/general/profile.html" class="text-body ms-0">
                      <i class="me-2 icon-md" data-feather="user"></i>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li class="dropdown-item py-2">
                    <a href="javascript:;" class="text-body ms-0">
                      <i class="me-2 icon-md" data-feather="edit"></i>
                      <span>Edit Profile</span>
                    </a>
                  </li>
                  <li class="dropdown-item py-2">
                    <a href="javascript:;" class="text-body ms-0">
                      <i class="me-2 icon-md" data-feather="repeat"></i>
                      <span>Switch User</span>
                    </a>
                  </li>
                  <li class="dropdown-item py-2">
                    <a href="javascript:;" class="text-body ms-0">
                      <i class="me-2 icon-md" data-feather="log-out"></i>
                      <span>Log Out</span>
                    </a>
                  </li>
                </ul>
							</div>
						</li>
					</ul>
				</div>
			</nav>
    </React.Fragment>
    
    );
  }
}

export default Navbar;
