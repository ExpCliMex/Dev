import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
export default function Login(props) {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <React.Fragment>
      <div class="main-wrapper">
        <div class="page-wrapper full-page">
          <div class="page-content d-flex align-items-center justify-content-center">
            <div class="row w-100 mx-0 auth-page">
              <div class="col-md-8 col-xl-6 mx-auto">
                <div class="card">
                  <div class="row">
                    <div class="col-md-4 pe-md-0">
                      <div class="auth-side-wrapper"></div>
                    </div>
                    <div class="col-md-8 ps-md-0">
                      <div class="auth-form-wrapper px-4 py-5">
                        <a href="#" class="noble-ui-logo d-block mb-2">
                          Ehya<span>Tech</span>
                        </a>
                        <h5 class="text-muted fw-normal mb-4">
                          Te damos la bienvenida.
                        </h5>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          class="forms-sample"
                        >
                          <div class="mb-3">
                            <label for="userEmail" class="form-label">
                              Email
                            </label>
                            <input
                              {...register("userEmail")}
                              type="email"
                              class="form-control"
                              id="userEmail"
                              placeholder="Email"
                            />
                          </div>
                          <div class="mb-3">
                            <label for="userPassword" class="form-label">
                              Contraseña
                            </label>
                            <input
                              {...register("userPassword")}
                              type="password"
                              class="form-control"
                              id="userPassword"
                              autocomplete="current-password"
                              placeholder="Contraseña"
                            />
                          </div>
                          <div class="form-check mb-3">
                            <input
                              {...register("authCheck")}
                              type="checkbox"
                              class="form-check-input"
                              id="authCheck"
                            />
                            <label class="form-check-label" for="authCheck">
                              Recordarme
                            </label>
                          </div>
                          <div>
                            <button
                              class="btn btn-primary me-2 mb-2 mb-md-0 text-white"
                              type="submit"
                            >
                             Ingresar
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-icon-text mb-2 mb-md-0"
                            >
                              <i
                                class="btn-icon-prepend"
                                data-feather="twitter"
                              ></i>
                              <i
                                class="btn-icon-prepend"
                                data-feather="facebook"
                              ></i>
                              <i
                                class="btn-icon-prepend"
                                data-feather="mail"
                              ></i>
                              Ingresar con otra plataforma
                            </button>
                          </div>
                          <a
                            href="register.html"
                            class="d-block mt-3 text-muted"
                          >
                             <NavLink
                                className="nav-item nav-link"
                                to="/registro"
                              >
                                ¿No tienes cuenta? ¡vamos a crearla!
                              </NavLink>{" "}
                            
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </React.Fragment>
  );
}
