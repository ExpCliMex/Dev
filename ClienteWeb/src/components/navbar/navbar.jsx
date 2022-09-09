import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { NavLink } from 'react-router-dom';
//import "../styles/vendors/core/core.js";



class Navbar extends Component {
    state = {
        
    };
    render() {
    return (  	
		<div className="horizontal-menu">
			<nav className="navbar top-navbar">
				<div className="container">
					<div className="navbar-content">
						<a to="#" className="navbar-brand">
							Ehya<span>Tech</span>
						</a>
						<form className="search-form">
							<div className="input-group">
                <div className="input-group-text">
                  <i data-feather="search"></i>
                </div>
								<input type="text" className="form-control" id="navbarForm" placeholder="Buscar..."/>
							</div>
						</form>
						<ul className="navbar-nav">
								<a className="nav-link dropdown-toggle" to="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i className="flag-icon flag-icon-es mt-1" title="es"></i> <span className="ms-1 me-1 d-none d-md-inline-block">Español</span>
								</a>
								<div className="dropdown-menu" aria-labelledby="languageDropdown">
									<a to="javascript:;" className="dropdown-item py-2"><i className="flag-icon flag-icon-us" title="us" id="us"></i> <span className="ms-1"> English </span></a>
								</div>
							
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="appsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i data-feather="grid"></i>
                </a>
                <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
                  <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                    <p className="mb-0 fw-bold">Atajos</p>
                    <a to="javascript:;" className="text-muted">Editar</a>
                  </div>
                  <div className="row g-0 p-1">
                    <div className="col-3 text-center">
                      <a to="pages/apps//com" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="message-square" className="icon-lg mb-1"></i><p className="tx-12">Chat</p></a>
                    </div>
                    <div className="col-3 text-center">
                      <a to="pages/apps//com" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="calendar" className="icon-lg mb-1"></i><p className="tx-12">Calendar</p></a>
                    </div>
                    <div className="col-3 text-center">
                      <a to="pages/email//com" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="mail" className="icon-lg mb-1"></i><p className="tx-12">Email</p></a>
                    </div>
                    <div className="col-3 text-center">
                      <a to="pages/general//com" className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"><i data-feather="instagram" className="icon-lg mb-1"></i><p className="tx-12">Profile</p></a>
                    </div>
                  </div>
                  <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                    <a to="javascript:;">Ver todo</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i data-feather="mail"></i>
                </a>
                <div className="dropdown-menu p-0" aria-labelledby="messageDropdown">
                  <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                    <p>9 New Messages</p>
                    <a to="javascript:;" className="text-muted">Clear all</a>
                  </div>
                  <div className="p-1">
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="me-3">
                        <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                      </div>
                      <div className="d-flex justify-content-between flex-grow-1">
                        <div className="me-4">
                          <p>Leonardo Payne</p>
                          <p className="tx-12 text-muted">Project status</p>
                        </div>
                        <p className="tx-12 text-muted">2 min ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="me-3">
                        <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                      </div>
                      <div className="d-flex justify-content-between flex-grow-1">
                        <div className="me-4">
                          <p>Carl Henson</p>
                          <p className="tx-12 text-muted">Client meeting</p>
                        </div>
                        <p className="tx-12 text-muted">30 min ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="me-3">
                        <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                      </div>
                      <div className="d-flex justify-content-between flex-grow-1">
                        <div className="me-4">
                          <p>Jensen Combs</p>
                          <p className="tx-12 text-muted">Project updates</p>
                        </div>
                        <p className="tx-12 text-muted">1 hrs ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="me-3">
                        <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                      </div>
                      <div className="d-flex justify-content-between flex-grow-1">
                        <div className="me-4">
                          <p>Amiah Burton</p>
                          <p className="tx-12 text-muted">Project deatline</p>
                        </div>
                        <p className="tx-12 text-muted">2 hrs ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="me-3">
                        <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                      </div>
                      <div className="d-flex justify-content-between flex-grow-1">
                        <div className="me-4">
                          <p>Yaretzi Mayo</p>
                          <p className="tx-12 text-muted">New record</p>
                        </div>
                        <p className="tx-12 text-muted">5 hrs ago</p>
                      </div>	
                    </a>
                  </div>
                  <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                    <a to="javascript:;">View all</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i data-feather="bell"></i>
                  <div className="indicator">
                    <div className="circle"></div>
                  </div>
                </a>
                <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
                  <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                    <p>6 New Notifications</p>
                    <a to="javascript:;" className="text-muted">Clear all</a>
                  </div>
                  <div className="p-1">
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                        <i className="icon-sm text-white" data-feather="gift"></i>
                      </div>
                      <div className="flex-grow-1 me-2">
                        <p>New Order Recieved</p>
                        <p className="tx-12 text-muted">30 min ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                        <i className="icon-sm text-white" data-feather="alert-circle"></i>
                      </div>
                      <div className="flex-grow-1 me-2">
                        <p>Server Limit Reached!</p>
                        <p className="tx-12 text-muted">1 hrs ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                        <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="userr"/>
                      </div>
                      <div className="flex-grow-1 me-2">
                        <p>New customer registered</p>
                        <p className="tx-12 text-muted">2 sec ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                        <i className="icon-sm text-white" data-feather="layers"></i>
                      </div>
                      <div className="flex-grow-1 me-2">
                        <p>Apps are ready for update</p>
                        <p className="tx-12 text-muted">5 hrs ago</p>
                      </div>	
                    </a>
                    <a to="javascript:;" className="dropdown-item d-flex align-items-center py-2">
                      <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                        <i className="icon-sm text-white" data-feather="download"></i>
                      </div>
                      <div className="flex-grow-1 me-2">
                        <p>Download completed</p>
                        <p className="tx-12 text-muted">6 hrs ago</p>
                      </div>	
                    </a>
                  </div>
                  <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                    <a to="javascript:;">View all</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" to="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile"/>
                </a>
                <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
                  <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                    <div className="mb-3">
                      <img className="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt=""/>
                    </div>
                    <div className="text-center">
                      <p className="tx-16 fw-bolder">Asusgrinch</p>
                      <p className="tx-12 text-muted">asusgrinch@gmail.com</p>
                    </div>
                  </div>
                  <ul className="list-unstyled p-1">
                    <li className="dropdown-item py-2">
                      <a to="pages/general/profile.html" className="text-body ms-0">
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
                        <i className="me-2 icon-md" data-feather="log-out"></i>
                        <span>Cerrar sesión</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
						</ul>
						<button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
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
									<li> <NavLink className="nav-item nav-link" to="/com">Registro</NavLink> </li>
									<li className="nav-item"><a className="nav-link disabled" to="/com">Añadir cita</a></li>
									<li className="nav-item"><a className="nav-link disabled" to="/com">Programar cita</a></li>
									
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
									<li> <NavLink className="nav-item nav-link" to="/paciente">Buscar</NavLink> </li>
									<li className="nav-item"><a className="nav-link disabled" to="paciente.html">Dar de alta</a></li>
                                    
									
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
            <li className="nav-item"><a className="nav-link" to="/com">Personal</a></li>
            <li className="nav-item"><a className="nav-link" to="/com">Equipo</a></li>
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
                    <li className="nav-item"><a className="nav-link" to="/com">HL7/FHIR</a></li>
                    <li className="nav-item"><a className="nav-link" to="/com">Resumen de historia clinica</a></li>
                    <li className="nav-item"><a className="nav-link" to="/com">Laboratoriales</a></li>
                    <li className="nav-item"><a className="nav-link" to="/com">Factura de pago</a></li>
                    <li className="nav-item"><a className="nav-link" to="/com">Reporte de personal</a></li>
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
                                <li> <NavLink className="nav-item nav-link" to="/laboratorio">Registro</NavLink> </li>
                  <li className="nav-item"><a className="nav-link" to="lab.html">Procesos</a></li>
                  <li className="nav-item"><a className="nav-link" to="lab.html">Resultados</a></li>
                  <li className="nav-item"><a className="nav-link" to="lab.html">Catálogos</a></li>
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
									<li className="nav-item"><a className="nav-link" to="exportar.html">Exportar</a></li>
                  <li className="nav-item"><a className="nav-link" to="importar.html">importar</a></li>
                  <li> <NavLink className="nav-item nav-link" to="/hc">Buscar</NavLink> </li>
                  <li className="nav-item"><a className="nav-link" to="buscar.html">Generar PDF</a></li>
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