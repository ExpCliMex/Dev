import React, { Component, useState  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/demo3/style.css";
import "./styles/fonts/feather-font/css/iconfont.css";

/*
import "./styles/vendors/jquery-validation/jquery.validate.min.js";
import "./styles/vendors/bootstrap-maxlength/bootstrap-maxlength.min.js";
import "./styles/vendors/inputmask/jquery.inputmask.min.js";
import "./styles/vendors/select2/select2.min.js";
import "./styles/vendors/typeahead.js/typeahead.bundle.min.js";
import "./styles/vendors/jquery-tags-input/jquery.tagsinput.min.js";
import "./styles/vendors/dropzone/dropzone.min.js";
import "./styles/vendors/dropify/dist/dropify.min.js";
import "./styles/vendors/bootstrap-colorpicker/bootstrap-colorpicker.min.js";
import "./styles/vendors/moment/moment.min.js";
import "./styles/vendors/tempusdominus-bootstrap-4/tempusdominus-bootstrap-4.js";
*/




class Paciente extends Component {



  handleSubmit = e => {
    e.preventDefault();
    const numExp = this.numExp.current.value;
    console.log("Fomulario completado");
  };

  state = {};
  
  render() {
    return (
      <div className="tabsP">
        <ul className="nav nav-tabs nav-tabs-line" id="lineTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-line-tab"
              data-bs-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true">
              Buscar o añadir paciente{" "}
              <button type="button" className="btn-close"></button>
            </a>
          </li>
        </ul>

        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-line-tab">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
          <label className="btn btn-outline-primary" for="btnradio1" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Búsqueda</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
          <label className="btn btn-outline-primary" for="btnradio2" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Dar de alta</label>
        </div>
  </div>
 
<form onSubmit={this.handleSubmit}>
  
          <div className="card card-body">
            <div className="page-wrapper">
              <div className="page-content">
        <div className="row">
					<div className="col-md-12 stretch-card">
						<div className="card">
							<div className="card-body">
								<h4 className="card-title">Alta de paciente</h4>
                <div id="wizardVertical">
                  <h2>Información general del paciente</h2>
                  
                  <section>
                    <div className="row">
					<div className="col-md-12 grid-margin">
						<div className="card">
							<div className="card-body">
								
								<form className="forms-sample">
									<div className="row mb-3">
										<div zclass="col">
											<label className="form-label" htmlFor="numExp">No. de expediente </label>
											<input ref={this.numExp} type="text" className="form-control" id="numExp"  readonly value = "1234"/>
										</div>
										<div className="col-md-4">
											<label className="form-label" htmlFor="curp">CURP (Clave Única Reg. Población)</label>
											<input type="text" className="form-control" id="curp" autocomplete="off" placeholder="CURP"/>
										</div>
                    <div className="col-md-4">
											<label className="form-label" htmlFor="folio">Folio de regitro</label>
											<input type="text" className="form-control" id="folio" autocomplete="off" placeholder="FOLIO"/>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col">
											<label className="form-label" htmlFor="FRegis">Fecha de registro </label>
											<div className="input-group date datepicker" id="FRegis">
                        <input type="text" className="form-control"/>
                        <span className="input-group-text input-group-addon"><i data-feather="calendar"></i></span>
                      </div>
										</div>
										<div className="col-md-4">
											<label className="form-label" htmlFor="nombrePa">Nombre</label>
											<input type="text" className="form-control" id="nombrePa" autocomplete="off" placeholder="NOMBRE"/>
										</div>
                    <div className="col-md-4">
											<label className="form-label" htmlFor="apePatPa">Apellido paterno</label>
											<input type="text" className="form-control" id="apePatPa" autocomplete="off" placeholder="APELLIDO"/>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col">
											<label className="form-label" htmlFor="apeMatPa">Apellido materno</label>
											<input type="text" className="form-control" id="apeMatPa"/>
										</div>
										<div className="col-md-4">
											<label className="form-label" htmlFor="FNacPa">Fecha de nacimiento</label>
											<div className="input-group date datepicker" id="FNacPa">
                        <input type="text" className="form-control"/>
                        <span className="input-group-text input-group-addon"><i data-feather="calendar"></i></span>
                      </div>
										</div>
                    <div className="col-md-4">
											<div className="mb-3">
                        <label for="ageSelect" className="form-label" htmlFor="sexPa">Sexo</label>
                        <select className="form-select" name="age_select" id="sexPa">
                          <option selected disabled>Sexo</option>
                          <option>Femenino</option>
                          <option>Masculino</option>
                          <option>Otro</option>
                        </select>
                      </div>
											
										</div>
									</div>
									<div className="row mb-3">
										<div className="col">
											<label className="form-label" htmlFor="relPa">Religión</label>
											<input type="text" className="form-control" id="relPa" placeholder="Religión"/>
										</div>
										<div className="col-md-4">
											<label className="form-label" htmlFor="estCivlPa">Estado civil</label>
											<input type="text" className="form-control" id="estCivlPa" autocomplete="off" placeholder="Estado civil"/>
										</div>
                    <div className="col-md-4">
											<label className="form-label" htmlFor="sangrePa">Tipo de sangre</label>
											<input type="text" className="form-control" id="sangrePa" autocomplete="off" placeholder="Tipo de sangre"/>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col">
											<label className="form-label" htmlFor="nacPa">Nacionalidad</label>
											<input type="text" className="form-control" id="nacPa" placeholder="Nacionalidad"/>
										</div>
										<div className="col-md-4">
											<label className="form-label" htmlFor="estadoPa">Entidad federativa de nacimiento</label>
											<input type="text" className="form-control" id="estadoPa" autocomplete="off" placeholder="Entidad federativa de nacimient"/>
										</div>
                    <div className="col-md-4">
											<label className="form-label" htmlFor="empleadoPa">Empleado / referido de:</label>
											<input type="text" className="form-control" id="empleadoPa" autocomplete="off" placeholder="Empleado / referido de:"/>
										</div>
									</div>
                  <div className="row mb-3">
										<div className="col">
											<label className="form-label" htmlFor="termsCheck">Leyó y firmó el <a href="faq.html" target="_blank"> aviso de privacidad </a></label>
                      <br />
											<input type="checkbox" className="form-check-input" name="terms_agree" id="termsCheck"/>
										</div>
										<div className="col-md-4">
											<label className="form-label" htmlFor="consCheck">Leyó y firmó el <a href="faq.html" target="_blank"> consentimiento informado </a></label>
                      <br />
											<input type="checkbox" className="form-check-input" name="terms_agree" id="consCheck"/>
										</div>
                    <div className="col-md-4">
											<label className="form-label" htmlFor="escoPa">Escolaridad</label>
											<input type="text" className="form-control" id="escoPa" autocomplete="off" placeholder="Escolaridad"/>
										</div>
									</div>
								</form>








							</div>
						</div>
					</div>
				</div>
      </section>
  
                  <h2>Contacto y domicilio de residencia</h2>
                  
                  <section>
                    <div className="card">
                      <div className="card-body">
                        <form className="forms-sample">
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="callePa">Dirección (Calle)</label>
                              <input type="text" className="form-control" id="callePa" placeholder="Calle"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="numEPa">N° exterior</label>
                              <input type="text" className="form-control" id="numEPa" autocomplete="off" placeholder="N° exterior"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="numIPa">N° interior</label>
                              <input type="text" className="form-control" id="numIPa" autocomplete="off" placeholder="N° interior"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="colPa">Colonia </label>
                              <input type="text" className="form-control" id="colPa"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="locPa">Localidad</label>
                              <input type="text" className="form-control" id="locPa" autocomplete="off" placeholder="Colonia"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="munPa">Municipio / Delegación</label>
                              <input type="text" className="form-control" id="munPa" autocomplete="off" placeholder="Municipio"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="estadoPA">Entidad federativa</label>
                              <input type="text" className="form-control" id="estadoPa" placeholder="Entidad federativa"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="cpPa">Código postal</label>
                              <input type="text" className="form-control" id="cpPa" autocomplete="off" placeholder="Código postal"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="paisPa">País</label>
                              <input type="text" className="form-control" id="paisPa" readonly value = "MÉXICO"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="telPa">Telefono</label>
                              <input type="text" className="form-control" id="telPa" placeholder="Telefono"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="celPa">Celular</label>
                              <input type="text" className="form-control" id="celPa" autocomplete="off" placeholder="Celular"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="emailPa">Correco electronico</label>
                              <input type="text" className="form-control" id="emailPa" autocomplete="off" placeholder="Correco electronico"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                  </section>
                  
  
                  <h2>Persona responsable del paciente</h2>
                  
                  <section>

                    <div className="card">
                      <div className="card-body">
                        <form className="forms-sample">
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="nomResp">Nombre</label>
                              <input type="text" className="form-control" id="nomResp" placeholder="Nombre"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="apePatResp">Apellido paterno</label>
                              <input type="text" className="form-control" id="apePatResp" autocomplete="off" placeholder="Apellido paterno"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="apeMatResp">Apellido materno</label>
                              <input type="text" className="form-control" id="apeMatResp" autocomplete="off" placeholder="Apellido materno"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="vinResp">Vinculo con el paciente</label>
                              <input type="text" className="form-control" id="vinResp" autocomplete="off" placeholder="Vinculo con el paciente"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="calleResp">Dirección (Calle)</label>
                              <input type="text" className="form-control" id="calleResp" placeholder = "Calle"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="numEResp">N° exterior</label>
                              <input type="text" className="form-control" id="numEResp" autocomplete="off" placeholder = "N° exterior"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="numIResp">N° interior</label>
                              <input type="text" className="form-control" id="numIResp" autocomplete="off" placeholder = "N° interior"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="colResp">Colonia </label>
                              <input type="text" className="form-control" id="colResp" placeholder = "Colonia"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="colResp">Localidad</label>
                              <input type="text" className="form-control" id="colResp" autocomplete="off" placeholder = "Localidad"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="munRep">Municipio / Delegación</label>
                              <input type="text" className="form-control" id="munRep" autocomplete="off" placeholder = "Municipio / Delegación"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="estadoResp">Entidad federativa</label>
                              <input type="text" className="form-control" id="estadoResp" placeholder = "Entidad federativa"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="cpResp">Código postal</label>
                              <input type="text" className="form-control" id="cpResp" autocomplete="off" placeholder = "Código postal"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="paisResp">País</label>
                              <input type="text" className="form-control" id="paisResp" placeholder = "País"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="telResp">Telefono</label>
                              <input type="text" className="form-control" id="telResp" placeholder="Telefono"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="celResp">Celular</label>
                              <input type="text" className="form-control" id="celResp" autocomplete="off" placeholder="Celular"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="emailResp">Correco electronico</label>
                              <input type="text" className="form-control" id="emailResp" autocomplete="off" placeholder="Correco electronico"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                  </section>
                  
  
                  <h2>Seguro médico</h2>
                  
                  <section>

                    <div className="card">
                      <div className="card-body">
                        <form className="forms-sample">
                          <div className="row mb-3">
                            <div className="col"><div className="mb-3">
                              <label for="ageSelect" className="form-label" htmlFor="seguro">Cuenta con seguro médico</label>
                              <select className="form-select" name="age_select" id="seguro">
                                <option selected disabled>Seguro</option>
                                <option>Si</option>
                                <option>No</option>
                              </select>
                            </div>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="afil">Programa de afiliación</label>
                              <input type="text" className="form-control" id="afil" autocomplete="off" placeholder="Programa de afiliación"/>
                            </div>
                            <div className="col-md-4">
                              
<div className="mb-3">
  <label for="ageSelect" className="form-label" htmlFor="seguroM">Seguro médico</label>
  <select className="form-select" name="age_select" id="seguroM">
    <option selected disabled>nombre de seguro</option>
    <option>GNP</option>
    <option>Qualitas</option>
  </select>
</div>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="otroSeg">Otro seguro no incluido en la lista</label>
                              <input type="text" className="form-control" id="otroSeg" autocomplete="off" placeholder="Otro seguro no incluido en la lista"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="fechIni">Fecha de inicio</label>
                              <div className="input-group date datepicker" id="fechIni">
                                <input type="text" className="form-control"/>
                                <span className="input-group-text input-group-addon"><i data-feather="calendar"></i></span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="fechFin">Fecha de fin</label>
                              <div className="input-group date datepicker" id="fechFin">
                                <input type="text" className="form-control"/>
                                <span className="input-group-text input-group-addon"><i data-feather="calendar"></i></span>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="poliza">N° de poliza / N° de afiliación</label>
                              <input type="text" className="form-control" id="poliza" autocomplete="off" placeholder = "N° de poliza"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="folioAsegu">Folio del asegurado</label>
                              <input type="text" className="form-control" id="folioAsegu" autocomplete="off" placeholder = "Folio"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="nombreTitu">Nombre del titular de la poliza </label>
                              <input type="text" className="form-control" id="nombreTitu" placeholder = "Titular"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="tipoBen">Tipo de beneficiario</label>
                              <input type="text" className="form-control" id="tipoBen" autocomplete="off" placeholder = "Tipo"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                  </section>
                  

                    <h2>Información laboral</h2>
                  
                  <section>
                    <div className="card">
                      <div className="card-body">
                        <form className="forms-sample">
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="areaT">Área</label>
                              <input type="text" className="form-control" id="areaT" placeholder="Área"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="dep">Departamento</label>
                              <input type="text" className="form-control" id="dep" autocomplete="off" placeholder="Departamento"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="nss">NSS</label>
                              <input type="text" className="form-control" id="nss" autocomplete="off" placeholder="NSS"/>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="puesto">Puesto </label>
                              <input type="text" className="form-control" id="puesto" placeholder="Puesto"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="tipoTra">Tipo de trabajador</label>
                              <input type="text" className="form-control" id="tipoTra" autocomplete="off" placeholder="Tipo"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="tipoContr">Tipo de contrato</label>
                              <input type="text" className="form-control" id="tipoContr" autocomplete="off" placeholder="Tipo"/>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                  

                  <h2>Información de facturación</h2>
                   
                   <section>
                    <div className="card">
                      <div className="card-body">
                        <form className="forms-sample">
                          <div className="row mb-3">
                            <div className="col">
                              <label className="form-label" htmlFor="rfc">RFC</label>
                              <input type="text" className="form-control" id="rfc" placeholder="RFC"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="razsoc">Nombre, denominación o razón social</label>
                              <input type="text" className="form-control" id="razsoc" autocomplete="off" placeholder="Nombre"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="emailFact">Correo</label>
                              <input type="text" className="form-control" id="emailFact" autocomplete="off" placeholder="Correo"/>
                            </div>
                            <div className="col-md-4">
                              <label className="form-label" htmlFor="anota">Anotaciones generaciles</label>
                              <input type="text" className="form-control" id="anota" autocomplete="off" placeholder="Anotaciones"/>
                            </div>
                          </div>
                        </form>
                      </div>
                      
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </section>
                

                </div>
							</div>
						</div>
					</div>
				</div>

			</div>
                
              </div>
        
             
              <footer className="footer border-top">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-3 small">
                  <p className="text-muted mb-1 mb-md-0">Copyright © 2022 Ehya Tech.</p>
                </div>
              </footer>
              
            
            </div>
            </form>




          </div>
        

  
      
    );
  }
}

export default Paciente;
