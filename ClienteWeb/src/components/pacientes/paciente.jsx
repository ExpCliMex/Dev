import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
import PacienteTest from "./pacienteTest";
export default function (Paciente) {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <React.Fragment>
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
              aria-selected="true"
            >
              Añadir paciente
              <button type="button" className="btn-close"></button>
            </a>
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card card-body">
          <div className="page wrapper">
            <div className="page-content">
              <div className="row">
                <div className="col-md-12 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Alta de paciente</h4>
                      <div id="wizardVertical">
                        <h2>Informacion general del paciente</h2>
                        <section>
                          <div className="row">
                            <div className="col-md-12 grid-margin">
                              <div className="card">
                                <div className="card-body">
                                  <form className="forms-sample">
                                    <div className="row mb-3">
                                      <div class="col">
                                        <label
                                          className="form-label"
                                          htmlFor="numExp"
                                        >
                                          No. de expediente
                                        </label>
                                        <input
                                          {...register("numExp")}
                                          type="text"
                                          className="form-control"
                                          id="numExp"
                                          readonly
                                          value="1234"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="curp"
                                        >
                                          CURP (Clave Única Reg. Población)
                                        </label>
                                        <input
                                          {...register("curp")}
                                          type="text"
                                          className="form-control"
                                          id="curp"
                                          autocomplete="off"
                                          placeholder="CURP"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="folio"
                                        >
                                          Folio de regitro
                                        </label>
                                        <input
                                          {...register("folio")}
                                          type="text"
                                          className="form-control"
                                          id="folio"
                                          autocomplete="off"
                                          placeholder="FOLIO"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <div className="col">
                                        <label
                                          className="form-label"
                                          htmlFor="FRegis"
                                        >
                                          Fecha de registro
                                        </label>
                                        <div
                                          className="input-group date datepicker"
                                          id="FRegis"
                                        >
                                          <input
                                            {...register("fechaRegistro")}
                                            type="text"
                                            className="form-control"
                                            id="fechaRegistro"
                                          />
                                          <span className="input-group-text input-group-addon">
                                            <i data-feather="calendar"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="nombrePa"
                                        >
                                          Nombre
                                        </label>
                                        <input
                                          {...register("nombrePa")}
                                          type="text"
                                          className="form-control"
                                          id="nombrePa"
                                          autocomplete="off"
                                          placeholder="NOMBRE"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="apePatPa"
                                        >
                                          Apellido paterno
                                        </label>
                                        <input
                                          {...register("apePatPa")}
                                          type="text"
                                          className="form-control"
                                          id="apePatPa"
                                          autocomplete="off"
                                          placeholder="APELLIDO"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <div className="col">
                                        <label
                                          className="form-label"
                                          htmlFor="apeMatPa"
                                        >
                                          Apellido materno
                                        </label>
                                        <input
                                          {...register("apePatPa")}
                                          type="text"
                                          className="form-control"
                                          id="apeMatPa"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="FNacPa"
                                        >
                                          Fecha de nacimiento
                                        </label>
                                        <div
                                          className="input-group date datepicker"
                                          id="FNacPa"
                                        >
                                          <input
                                            {...register("FNacPa")}
                                            type="text"
                                            className="form-control"
                                            id="FNacPa"
                                          />
                                          <span className="input-group-text input-group-addon">
                                            <i data-feather="calendar"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="mb-3">
                                          <label
                                            for="ageSelect"
                                            className="form-label"
                                            htmlFor="sexPa"
                                          >
                                            Sexo
                                          </label>
                                          <select
                                            {...register("sexPa")}
                                            className="form-select"
                                            name="age_select"
                                            id="sexPa"
                                          >
                                            <option selected disabled>
                                              Sexo
                                            </option>
                                            <option>Femenino</option>
                                            <option>Masculino</option>
                                            <option>Otro</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <div className="col">
                                        <label
                                          className="form-label"
                                          htmlFor="relPa"
                                        >
                                          Religión
                                        </label>
                                        <input
                                          {...register("relPa")}
                                          type="text"
                                          className="form-control"
                                          id="relPa"
                                          placeholder="Religión"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="estCivlPa"
                                        >
                                          Estado civil
                                        </label>
                                        <input
                                          {...register("estCivlPa")}
                                          type="text"
                                          className="form-control"
                                          id="estCivlPa"
                                          autocomplete="off"
                                          placeholder="Estado civil"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="sangrePa"
                                        >
                                          Tipo de sangre
                                        </label>
                                        <input
                                          {...register("sangrePa")}
                                          type="text"
                                          className="form-control"
                                          id="sangrePa"
                                          autocomplete="off"
                                          placeholder="Tipo de sangre"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <div className="col">
                                        <label
                                          className="form-label"
                                          htmlFor="nacPa"
                                        >
                                          Nacionalidad
                                        </label>
                                        <input
                                          {...register("nacPa")}
                                          type="text"
                                          className="form-control"
                                          id="nacPa"
                                          placeholder="Nacionalidad"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="estadoPa"
                                        >
                                          Entidad federativa de nacimiento
                                        </label>
                                        <input
                                          {...register("estadoPa")}
                                          type="text"
                                          className="form-control"
                                          id="estadoPa"
                                          autocomplete="off"
                                          placeholder="Entidad federativa de nacimient"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="empleadoPa"
                                        >
                                          Empleado / referido de:
                                        </label>
                                        <input
                                          {...register("empleadoPa")}
                                          type="text"
                                          className="form-control"
                                          id="empleadoPa"
                                          autocomplete="off"
                                          placeholder="Empleado / referido de:"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <div className="col">
                                        <label
                                          className="form-label"
                                          htmlFor="termsCheck"
                                        >
                                          Leyó y firmó el{" "}
                                          <a href="faq.html" target="_blank">
                                            aviso de privacidad
                                          </a>
                                        </label>{" "}
                                        &nbsp;
                                        <input
                                          {...register("termsCheck")}
                                          type="checkbox"
                                          className="form-check-input"
                                          name="terms_agree"
                                          id="termsCheck"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="consentimientoCheck"
                                        >
                                          Leyó y firmó el
                                          <a href="faq.html" target="_blank">
                                            consentimiento informado
                                          </a>
                                        </label>
                                        &nbsp;
                                        <input
                                          {...register("consentimientoCheck")}
                                          type="checkbox"
                                          className="form-check-input"
                                          name="terms_agree"
                                          id="consentimientoCheck"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          className="form-label"
                                          htmlFor="escoPa"
                                        >
                                          Escolaridad
                                        </label>
                                        <input
                                          {...register("escoPa")}
                                          type="text"
                                          className="form-control"
                                          id="escoPa"
                                          autocomplete="off"
                                          placeholder="Escolaridad"
                                        />
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
                          <div class="card">
                            <div class="card-body">
                              <form class="forms-sample">
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">
                                      Dirección (Calle)
                                    </label>
                                    <input
                                      {...register("callePa")}
                                      type="text"
                                      class="form-control"
                                      id="callePa"
                                      placeholder="Calle"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      N° exterior
                                    </label>
                                    <input
                                      {...register("numExt")}
                                      type="text"
                                      class="form-control"
                                      id="numExt"
                                      autocomplete="off"
                                      placeholder="N° exterior"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      N° interior
                                    </label>
                                    <input
                                      {...register("numInt")}
                                      type="text"
                                      class="form-control"
                                      id="numInt"
                                      autocomplete="off"
                                      placeholder="N° interior"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Colonia </label>
                                    <input
                                      {...register("colonia")}
                                      type="text"
                                      class="form-control"
                                      id="colonia"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">Localidad</label>
                                    <input
                                      {...register("localidad")}
                                      type="text"
                                      class="form-control"
                                      id="localidad"
                                      autocomplete="off"
                                      placeholder="localidad"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Municipio / Delegación
                                    </label>
                                    <input
                                      {...register("municipio")}
                                      type="text"
                                      class="form-control"
                                      id="municipio"
                                      autocomplete="off"
                                      placeholder="Municipio"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">
                                      Entidad federativa
                                    </label>
                                    <input
                                      {...register("estado")}
                                      type="text"
                                      class="form-control"
                                      id="estado"
                                      placeholder="Entidad federativa"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Código postal
                                    </label>
                                    <input
                                      {...register("cp")}
                                      type="text"
                                      class="form-control"
                                      id="cp"
                                      autocomplete="off"
                                      placeholder="Código postal"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">País</label>
                                    <input
                                      {...register("pais")}
                                      type="text"
                                      class="form-control"
                                      id="pais"
                                      readonly
                                      value="MÉXICO"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Telefono</label>
                                    <input
                                      {...register("telefono")}
                                      type="text"
                                      class="form-control"
                                      id="telefono"
                                      placeholder="Telefono"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">Celular</label>
                                    <input
                                      {...register("celular")}
                                      type="text"
                                      class="form-control"
                                      id="celular"
                                      autocomplete="off"
                                      placeholder="Celular"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Correco electronico
                                    </label>
                                    <input
                                      {...register("emailPa")}
                                      type="text"
                                      class="form-control"
                                      id="emailPa"
                                      autocomplete="off"
                                      placeholder="Correco electronico"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                        {/* inicia seccion 3 */}
                        <h2>Persona responsable del paciente</h2>
                        <section>
                          <div class="card">
                            <div class="card-body">
                              <form class="forms-sample">
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Nombre</label>
                                    <input
                                      {...register("nombreResp")}
                                      type="text"
                                      class="form-control"
                                      id="nombreResp"
                                      placeholder="Nombre"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Apellido paterno
                                    </label>
                                    <input
                                      {...register("apePatResp")}
                                      type="text"
                                      class="form-control"
                                      id="apePatResp"
                                      autocomplete="off"
                                      placeholder="Apellido paterno"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Apellido materno
                                    </label>
                                    <input
                                      {...register("apeMatResp")}
                                      type="text"
                                      class="form-control"
                                      id="apeMatResp"
                                      autocomplete="off"
                                      placeholder="Apellido materno"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Vinculo con el paciente
                                    </label>
                                    <input
                                      {...register("vinculo")}
                                      type="text"
                                      class="form-control"
                                      id="vinculo"
                                      autocomplete="off"
                                      placeholder="Vinculo con el paciente"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">
                                      Dirección (Calle)
                                    </label>
                                    <input
                                      {...register("calleResp")}
                                      type="text"
                                      class="form-control"
                                      id="calleResp"
                                      placeholder="Calle"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      N° exterior
                                    </label>
                                    <input
                                      {...register("numExtResp")}
                                      type="text"
                                      class="form-control"
                                      id="numExtResp"
                                      autocomplete="off"
                                      placeholder="N° exterior"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      N° interior
                                    </label>
                                    <input
                                      {...register("numIntResp")}
                                      type="text"
                                      class="form-control"
                                      id="numIntResp"
                                      autocomplete="off"
                                      placeholder="N° interior"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Colonia </label>
                                    <input
                                      {...register("coloniaResp")}
                                      type="text"
                                      class="form-control"
                                      id="coloniaResp"
                                      placeholder="Colonia"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">Localidad</label>
                                    <input
                                      {...register("localidadResp")}
                                      type="text"
                                      class="form-control"
                                      id="localidadResp"
                                      autocomplete="off"
                                      placeholder="Localidad"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Municipio / Delegación
                                    </label>
                                    <input
                                      {...register("municipioResp")}
                                      type="text"
                                      class="form-control"
                                      id="municipioResp"
                                      autocomplete="off"
                                      placeholder="Municipio / Delegación"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">
                                      Entidad federativa
                                    </label>
                                    <input
                                      {...register("estadoResp")}
                                      type="text"
                                      class="form-control"
                                      id="estadoResp"
                                      placeholder="Entidad federativa"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Código postal
                                    </label>
                                    <input
                                      {...register("cpResp")}
                                      type="text"
                                      class="form-control"
                                      id="cpResp"
                                      autocomplete="off"
                                      placeholder="Código postal"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">País</label>
                                    <input
                                      {...register("paisResp")}
                                      type="text"
                                      class="form-control"
                                      id="paisResp"
                                      placeholder="País"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Telefono</label>
                                    <input
                                      {...register("telefonoResp")}
                                      type="text"
                                      class="form-control"
                                      id="telefonoResp"
                                      placeholder="Telefono"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">Celular</label>
                                    <input
                                      {...register("celularResp")}
                                      type="text"
                                      class="form-control"
                                      id="celularResp"
                                      autocomplete="off"
                                      placeholder="Celular"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Correco electronico
                                    </label>
                                    <input
                                      {...register("emailResp")}
                                      type="text"
                                      class="form-control"
                                      id="emailResp"
                                      autocomplete="off"
                                      placeholder="Correco electronico"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                        {/* termina seccion 3 */}
                        {/* inicia seccion 4 */}
                        <h2>Seguro médico</h2>
                        <section>
                          <div class="card">
                            <div class="card-body">
                              <form class="forms-sample">
                                <div class="row mb-3">
                                  <div class="col">
                                    <div class="mb-3">
                                      <label for="ageSelect" class="form-label">
                                        Cuenta con seguro médico
                                      </label>
                                      <select
                                        class="form-select"
                                        name="age_select"
                                        id="cuentaSeguro"
                                        {...register("cuentaSeguro")}
                                      >
                                        <option selected disabled>
                                          Seguro
                                        </option>
                                        <option>Si</option>
                                        <option>No</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Programa de afiliación
                                    </label>
                                    <input
                                      {...register("progaSMed")}
                                      type="text"
                                      class="form-control"
                                      id="progaSMed"
                                      autocomplete="off"
                                      placeholder="Programa de afiliación"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <div class="mb-3">
                                      <label for="ageSelect" class="form-label">
                                        Seguro médico
                                      </label>
                                      <select
                                        {...register("SeguroMed")}
                                        class="form-select"
                                        name="age_select"
                                        id="SeguroMed"
                                      >
                                        <option selected disabled>
                                          nombre de seguro
                                        </option>
                                        <option>GNP</option>
                                        <option>Qualitas</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Otro seguro no incluido en la lista
                                    </label>
                                    <input
                                      {...register("otroSMed")}
                                      type="text"
                                      class="form-control"
                                      id="otroSMed"
                                      autocomplete="off"
                                      placeholder="Otro seguro no incluido en la lista"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">
                                      Fecha de inicio
                                    </label>
                                    <div
                                      class="input-group date datepicker"
                                      id="fechaFinSMed"
                                    >
                                      <input
                                        {...register("fechaInicioSMed")}
                                        type="text"
                                        class="form-control"
                                        id="fechaInicioSMed"
                                      />
                                      <span class="input-group-text input-group-addon">
                                        <i data-feather="calendar"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Fecha de fin
                                    </label>
                                    <div
                                      class="input-group date datepicker"
                                      id="fechaFinSMed"
                                    >
                                      <input
                                        {...register("fechaFinSMed")}
                                        id="fechaFinSMed"
                                        type="text"
                                        class="form-control"
                                      />
                                      <span class="input-group-text input-group-addon">
                                        <i data-feather="calendar"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      N° de poliza / N° de afiliación
                                    </label>
                                    <input
                                      {...register("polizaSMed")}
                                      type="text"
                                      class="form-control"
                                      id="polizaSMed"
                                      autocomplete="off"
                                      placeholder="N° de poliza"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Folio del asegurado
                                    </label>
                                    <input
                                      {...register("folioSMed")}
                                      type="text"
                                      class="form-control"
                                      id="folioSMed"
                                      autocomplete="off"
                                      placeholder="Folio"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">
                                      Nombre del titular de la poliza
                                    </label>
                                    <input
                                      {...register("titularSMed")}
                                      type="text"
                                      class="form-control"
                                      id="titularSMed"
                                      placeholder="Titular"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Tipo de beneficiario
                                    </label>
                                    <input
                                      {...register("tipoSMed")}
                                      type="text"
                                      class="form-control"
                                      id="tipoSMed"
                                      autocomplete="off"
                                      placeholder="Tipo"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                        {/* termina seccion 4 */}
                        {/* inicia seccion 5 */}
                        <h2>Información laboral</h2>
                        <section>
                          <div class="card">
                            <div class="card-body">
                              <form class="forms-sample">
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Área</label>
                                    <input
                                      {...register("areaInfLa")}
                                      type="text"
                                      class="form-control"
                                      id="areaInfLa"
                                      placeholder="Área"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Departamento
                                    </label>
                                    <input
                                      {...register("deptInfLa")}
                                      type="text"
                                      class="form-control"
                                      id="deptInfLa"
                                      autocomplete="off"
                                      placeholder="Departamento"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">NSS</label>
                                    <input
                                      {...register("nssInfLa")}
                                      type="text"
                                      class="form-control"
                                      id="nssInfLa"
                                      autocomplete="off"
                                      placeholder="NSS"
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">Puesto </label>
                                    <input
                                      {...register("puestoInfLa")}
                                      type="text"
                                      class="form-control"
                                      id="puestoInfLa"
                                      placeholder="Puesto"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Tipo de trabajador
                                    </label>
                                    <input
                                      {...register("tipoContraInfLa")}
                                      type="text"
                                      class="form-control"
                                      id="tipoContraInfLa"
                                      autocomplete="off"
                                      placeholder="Tipo"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Tipo de contrato
                                    </label>
                                    <input
                                      {...register("tipoTraInfLa")}
                                      type="text"
                                      class="form-control"
                                      id="tipoTraInfLa"
                                      autocomplete="off"
                                      placeholder="Tipo"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                        {/* termina seccion 5 */}
                        {/* inicia seccion 6 */}
                        <h2>Información de facturación</h2>
                        <section>
                          <div class="card">
                            <div class="card-body">
                              <form class="forms-sample">
                                <div class="row mb-3">
                                  <div class="col">
                                    <label class="form-label">RFC</label>
                                    <input
                                    {...register("rfcInfFact")}
                                      type="text"
                                      class="form-control"
                                      id="rfcInfFact"
                                      placeholder="RFC"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Nombre, denominación o razón social
                                    </label>
                                    <input
                                    {...register("nombreInfFact")}
                                      type="text"
                                      class="form-control"
                                      id="nombreInfFact"
                                      autocomplete="off"
                                      placeholder="Nombre"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">Correo</label>
                                    <input
                                    {...register("emailInfFact")}
                                      type="text"
                                      class="form-control"
                                      id="emailInfFact"
                                      autocomplete="off"
                                      placeholder="Correo"
                                    />
                                  </div>
                                  <div class="col-md-4">
                                    <label class="form-label">
                                      Anotaciones generaciles
                                    </label>
                                    <input
                                    {...register("comentInfFact")}
                                      type="text"
                                      class="form-control"
                                      id="comentInfFact"
                                      autocomplete="off"
                                      placeholder="Anotaciones"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </section>
                        {/* termina seccion 6 */}
                      </div>
                    </div>
                    <button
                      class="btn btn-primary me-2 mb-2 mb-md-0 text-white"
                      type="submit"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
