import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
import { Card, CardSide, CardContent } from "../auth/Card";
import { Layout } from '../auth/Layout'
import { Logo } from "../Logo";
import { Header } from "../auth/Header";
import { TextField } from "../form/TextField";
import { Button } from "../buttons/Button";
import { FormRenderer } from '../form/FormRenderer'

export default function Registro(props) {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const fields = [
    {
      type: 'text',
      id: 'signup_username',
      autoComplete: 'username',
      placeholder: 'Nombre de usuario'
    },
    {
      type: 'email',
      id: 'signup_email',
      placeholder: 'Email',
    },
    {
      type: 'password',
      id: 'signup_password',
      placeholder: 'Contraseña'
    }
  ]
  return (
      <Layout>
        <Card>
          <CardSide />
          <CardContent>
            <Logo />
            <Header>
              Crear cuenta
            </Header>
            <FormRenderer fields={fields} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Button className="btn-primary me-2 mb-2 mb-md-0">
                  Registrar
                </Button>
              </div>
            </FormRenderer>
            <div
              className="d-block mt-3 text-muted"
            >
              <NavLink
                className="nav-item nav-link"
                to="/login"
              >
                ¿Ya tienes cuenta? Inicia sesión
              </NavLink>
            </div>
          </CardContent>
        </Card>
      </Layout>
  );
}
