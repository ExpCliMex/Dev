import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo1/style.css";
import "../styles/vendors/core/core.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
export default function (PacienteTest) {
const { register, watch, handleSubmit } = useForm();
const onSubmit = data => console.log(data);
console.log(watch("example")); // watch input value by passing the name of it
        return (
            <div class="page-content">
        <br />
        <br />
        <br />
        <br />
        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        </div>


        <div class="row">
          <div class="col-12 col-xl-12 grid-margin stretch-card">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
                  <h6 class="card-title mb-0">Agendar citas </h6>
                  <div class="dropdown">
                    <button class="btn p-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="trash" class="icon-sm me-2"></i> <span class="">Delete</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="printer" class="icon-sm me-2"></i> <span class="">Print</span></a>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="download" class="icon-sm me-2"></i> <span class="">Download</span></a>
                    </div>
                  </div>
                </div>
                <div class="row align-items-start">
                  <div class="col-md-7">
                    <p class="text-muted tx-13 mb-3 mb-md-0">En caso de necesitar ayuda, puede visitar nuestra sección de manuales </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        );
}
