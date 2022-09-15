import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import { useForm } from "react-hook-form";
export default function (PacienteTest) {
const { register, watch, handleSubmit } = useForm();
const onSubmit = data => console.log(data);
console.log(watch("example")); // watch input value by passing the name of it
        return (
            <h1>alsudjhflkashjgdf</h1>
        );
}
