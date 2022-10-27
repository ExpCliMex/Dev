import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
import { Button } from "../buttons/Button";
import { Header } from '../auth/Header'
import { Logo } from '../Logo'
import { Card, CardContent, CardSide } from '../auth/Card'
import { Layout } from '../auth/Layout';
import FormRenderer from '../form/FormRenderer'

export default function Login() {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const fields = [
    {
      type: 'email',
      id: 'login_email',
      placeholder: 'Email',
    },
    {
      type: 'password',
      id: 'login_password',
      placeholder: 'Contraseña',
      autoComplete: 'current-password',
    },
    {
      type: 'checkbox',
      id: 'login_authCheck',
    },
    {
      type: 'submit',
      id: 'login_submit'
    }
  ]
  return (
    <Layout>
      <Card>
        <CardSide />
        <CardContent>
          <Logo />
          <Header>
            Te damos la bienvenida.
          </Header>
          <FormRenderer fields={fields} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Button
                className="btn-outline-primary btn-icon-text mb-2 mb-md-0"
              >
                <i
                  className="btn-icon-prepend"
                  data-feather="twitter"
                ></i>
                <i
                  className="btn-icon-prepend"
                  data-feather="facebook"
                ></i>
                <i
                  className="btn-icon-prepend"
                  data-feather="mail"
                ></i>
                Ingresar con otra plataforma
              </Button>
            </div>

            <div
              className="d-block mt-3 text-muted"
            >
              <NavLink
                className="nav-item nav-link"
                to="/registro"
              >
                ¿No tienes cuenta? ¡vamos a crearla!
              </NavLink>
            </div>
          </FormRenderer>
        </CardContent>
      </Card>
    </Layout>
  );
}
