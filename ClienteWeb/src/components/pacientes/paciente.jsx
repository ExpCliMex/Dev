import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { FormRenderer, FormWrapper } from "./../form/FormRenderer"

function Card({ children }) {
  return (
    <div class="card">
      <div class="card-body">
        <div className="row">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Paciente() {
  const { register, watch, handleSubmit } = useForm();
  const handleSubmit2 = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    let s = Object.fromEntries(data.entries());
    console.log(s)
    axios.post(`http://localhost:4002/test/form_test`,s)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  const onSubmit = (data) => console.log(data);
  let generalPatientInformationFields = [
    {
      type: "text",
      id: "patient_numExp",
      value: "1234",
      readonly: true,
    },
    {
      type: "text",
      id: "patient_curp",
      placeholder: "CURP",
      autocomplete: "off",
    },
    {
      type: "text",
      id: "patient_folio",
      autocomplete: "off",
      placeholder: "Folio",
    },
    {
      type: "text",
      id: "patient_fechaRegistro",
    },
    {
      type: "text",
      id: "patient_nombre",
      autocomplete: "off",
      placeholder: "NOMBRE",
    },
    {
      type: "text",
      id: "patient_apellidoPaterno",
      autocomplete: "off",
      placeholder: "Apellido Paterno",

    },
    {
      type: "text",
      id: "patient_apellidoMaterno",
      autocomplete: "off",
      placeholder: "Apellido Materno",
    },
    {
      type: "text",
      id: "patient_FechaNacimiento",
    },
    {
      type: "select",
      id: "patient_sex",
      data: [
        { label: "Masculino", value: "Masculino" },
        { label: "Femenino", value: "Femenino" }
      ]
    },
    {
      type: "text",
      id: "patient_religion",
      placeholder: "Religión",
    },
    {
      type: "text",
      id: "patient_estadoCivil",
      autocomplete: "off",
    },
    {
      type: "text",
      autocomplete: "off",
      placeholder: "Tipo de sangre",
      id: "patient_sangre",
    },
    {
      type: "text",
      id: "patient_nacionalidad",
      placeholder: "Nacionalidad"
    },
    {
      type: "text",
      id: "patient_estado",
      autocomplete: "off",
      placeholder: "Entidad federativa de nacimiento",
    },
    {
      type: "text",
      id: "patient_empleado",
      placeholder: "Empleado / referido de:"
    },
    {
      type: "checkbox",
      id: "termsCheck"
    },
    {
      type: "checkbox",
      id: "consentimientoCheck",
    },
    {
      type: "text",
      id: "patient_escolaridad",
      autocomplete: "off",
      placeholder: "Escolaridad"
    }
  ]
  generalPatientInformationFields = generalPatientInformationFields.map(field => ({ ...field, formControlClassName: 'col-4' }))
  let patientContactFields = [
    {
      type: "text",
      id: "contact_calle",
      placeholder: "Calle"
    },
    {
      type: "text",
      id: "patient_numExt",
      placeholder: "No. exterior",
    },
    {
      type: "text",
      id: "patient_numInt",
      placeholder: "No. interior",
    },
    {
      type: "text",
      id: "patient_colonia",
    },
    {
      type: "text",
      id: "patient_localidad",
      placeholder: "Localidad"
    },
    {
      type: "text",
      id: "patient_municipio",
      placeholder: "Municipio"
    },
    {
      type: "text",
      id: "patient_contact_estado",
      placeholder: "Entidad federativa"
    },
    {
      type: "text",
      id: "patient_cp",
      placeholder: "Código postal"
    },
    {
      type: "text",
      id: "patient_pais",
      value: "México",
    },
    {
      type: "text",
      id: "patient_telefono",
      placeholder: "Teléfono"
    },
    {
      type: "text",
      id: "patient_celular",
      placeholder: "Celular"
    },
    {
      type: "text",
      id: "patient_email",
      placeholder: "Correo Electrónico"
    }
  ];
  patientContactFields = patientContactFields.map(field => ({ ...field, formControlClassName: 'col-4' }))
  let personResponsibleOfPatientFields = [
    {
      type: "text",
      id: "nombreResp",
      placeholder: "Nombre",
    },
    {
      type: "text",
      id: "apellidoPaternoResp",
      placeholder: "Apellido Paterno"
    },
    {
      type: "text",
      id: "apellidoMaternoResp",
      placeholder: "Apellido Materno"
    },
    {
      type: "text",
      id: "vinculo",
      placeholder: "Vínculo con el paciente"
    },
    {
      type: "text",
      id: "calleResp",
      placeholder: "Calle"
    },
    {
      type: "text",
      id: "numExtResp",
      placeholder: "No. exterior"
    },
    {
      type: "text",
      id: "numIntResp",
      placeholder: "No. interior",
    },
    {
      type: "text",
      id: "coloniaResp",
      placeholder: "Colonia",
    },
    {
      type: "text",
      id: "localidadResp",
      placeholder: "Localidad",
    },
    {
      type: "text",
      id: "municipioResp",
      placeholder: "Municipio"
    },
    {
      type: "text",
      id: "estadoResp",
      placeholder: "Entidad federativa"
    },
    {
      type: "text",
      id: "cpResp",
      placeholder: "Código postal"
    },
    {
      type: "text",
      id: "paisResp",
      value: "México",
    },
    {
      type: "text",
      id: "telefonoResp",
      placeholder: "Teléfono"
    },
    {
      type: "text",
      id: "celularResp",
      placeholder: "Celular"
    },
    {
      type: "text",
      id: "emailResp",
      placeholder: "Correo Electrónico"
    }
  ];
  personResponsibleOfPatientFields = personResponsibleOfPatientFields.map(field => ({ ...field, formControlClassName: 'col-4' }))
  let medicalInsuranceFields = [
    {
      id: "cuentaSeguro",
      type: "select",
      data: [
        {
          label: "Si",
          value: "Si"
        },
        {
          label: "No",
          value: "No"
        }
      ]
    },
    {
      id: "programaSeguroMedico",
      type: "text",
      placeholder: "Programa de afiliación",
    },
    {
      type: "select",
      id: "seguroMedico",
      data: [
        { label: "GNP", value: "GNP" },
        { label: "Qualitas", value: "Qualitas" }
      ]
    },
    {
      type: "text",
      id: "otroSeguroMedico",
      placeholder: "Otro seguro no incluido en la lista",
    },
    {
      type: "text",
      id: "fechaInicioSeguroMedico",
    },
    {
      type: "text",
      id: "fechaFinSeguroMedico",
    },
    {
      type: "text",
      id: "polizaSMed",
      placeholder: "No. de poliza"
    },
    {
      type: "text",
      id: "folioSMed",
      placeholder: "folio"
    },
    {
      type: "text",
      id: "titularSeguroMedico",
      placeholder: "Titular"
    },
    {
      type: "text",
      id: "tipoSMed",
      placeholder: "Tipo"
    }
  ]
  medicalInsuranceFields = medicalInsuranceFields.map(field => ({ ...field, formControlClassName: 'col-4' }))
  let workInformation = [
    {
      type: "text",
      id: "areaInfLab",
      placeholder: "Área"
    },
    {
      type: "text",
      id: "deptInfLab",
      placeholder: "Departamento",
    },
    {
      type: "text",
      id: "nssInfLab",
      placeholder: "NSS"
    },
    {
      type: "text",
      id: "puestoInfLab",
      placeholder: "Puesto"
    },
    {
      type: "text",
      id: "tipoTraInfLab",
      placeholder: "Tipo",
    },
    {
      type: "text",
      id: "tipoContraInfLab",
      placeholder: "Tipo"
    }
  ]
  workInformation = workInformation.map(field => ({ ...field, formControlClassName: 'col-4' }))
  let billInformation = [
    {
      type: "text",
      id: "rfcInfFact",
      placeholder: "RFC"
    },
    {
      type: "text",
      id: "nombreInfFact",
      placeholder: "Nombre"
    },
    {
      type: "text",
      id: "emailInfFact",
      placeholder: "Correo"
    },
    {
      type: "text",
      id: "commentInfFact",
      placeholder: "Anotaciones"
    }

  ]
  billInformation = billInformation.map(field => ({ ...field, formControlClassName: 'col-4' }))
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
      <FormWrapper onSubmit={handleSubmit2}>
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
                              <Card>
                                <FormRenderer fields={generalPatientInformationFields} />
                              </Card>
                            </div>
                          </div>
                        </section>
                        <h2>Contacto y domicilio de residencia</h2>
                        <section>
                          <Card>
                            <FormRenderer fields={patientContactFields} />
                          </Card>
                        </section>
                        {/* inicia seccion 3 */}
                        <h2>Persona responsable del paciente</h2>
                        <section>
                          <Card>
                            <FormRenderer fields={personResponsibleOfPatientFields} />
                          </Card>
                        </section>
                        {/* termina seccion 3 */}
                        {/* inicia seccion 4 */}
                        <h2>Seguro médico</h2>
                        <section>
                          <Card>
                            <FormRenderer fields={medicalInsuranceFields} />
                          </Card>
                        </section>
                        {/* termina seccion 4 */}
                        {/* inicia seccion 5 */}
                        <h2>Información laboral</h2>
                        <section>
                          <Card>
                            <FormRenderer fields={workInformation} />
                          </Card>
                        </section>
                        {/* termina seccion 5 */}
                        {/* inicia seccion 6 */}
                        <h2>Información de facturación</h2>
                        <section>
                          <Card>
                            <FormRenderer fields={billInformation} />
                          </Card>
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
      </FormWrapper>
    </React.Fragment>
  );
}
