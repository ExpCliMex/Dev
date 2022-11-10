import logo from './components/styles/images/logo2.png';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Calendar from './components/Calendar/calendar';
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Modal from './components/Test/modal';
import ExpClinico from './components/expClinico/expClinico';
import Paciente from './components/pacientes/paciente';
import HistoriaClinica from './components/historiasClinicas/historiaClinica';
import PacienteTest from './components/pacientes/pacienteTest';
import Footer from './components/Footer/footer';
import Login from './components/login/login';
import { useLocation } from 'react-router-dom';
import Registro from './components/registro/registro';
import './i18n';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import 'jquery/dist/jquery.min.js';
import $ from "jquery";
import Popper from 'popper.js';
import "@popperjs/core";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./components/wizardTest/step1";
import Step2 from "./components/wizardTest/step2";
import Result from "./components/wizardTest/result";
import Error404 from "./components/error/error404"
import Error500 from "./components/error/error500"

createStore({});

function Prueba() {
  let location = useLocation();
  if (location.pathname == "/login") {
    return <Login></Login>
  }
  if (location.pathname == "/registro") {
    return <Registro></Registro>
  }
  if (location.pathname == "/error404") {
    return <Error404></Error404>
  }
  if (location.pathname == "/error500") {
    return <Error500></Error500>
  }
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <div className='page-wrapper'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/paciente" element={<Paciente />} />
          <Route path="/pacienteTest" element={<PacienteTest />} />
          <Route path="/historiaClinica" element={<HistoriaClinica />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
        <Footer></Footer>
      </div>
      <Helmet>
        <script isHydrating={true} type="text/javascript" src="./assets/vendors/core/core.js" />
        <script isHydrating={true} type="text/javascript" src="./assets/js/template.js" />
        <script isHydrating={true} type="text/javascript" src="./assets/js/dashboard-light.js" />
        <script isHydrating={true} type="text/javascript" src="./assets/js/chat.js" />
        <script isHydrating={true} type="text/javascript" src="./assets/js/dashboard-light.js" />
        <script isHydrating={true} type="text/javascript" src="js/jquery-steps.js" />



      </Helmet>
    </React.Fragment>
  );
}


function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback="...is loading">
      <BrowserRouter>
        <Prueba></Prueba>
      </BrowserRouter>
    </Suspense>
  );
}


export default App;
