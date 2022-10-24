import logo from './components/styles/images/logo2.png';
import React, {Suspense} from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Calendar from './components/Calendar/calendar';
import './App.css';
import Navbar from './components/navbar/navbar';
import ExpClinico from './components/expClinico/expClinico';
import Paciente from './components/pacientes/paciente';
import HistoriaClinica from './components/historiasClinicas/historiaClinica';
import PacienteTest from './components/pacientes/pacienteTest';
import Footer from './components/Footer/footer';
import Login from './components/login/login';
import { useLocation } from 'react-router-dom';
import Registro from './components/registro/registro';
import  './i18n';
import { useTranslation } from 'react-i18next';

function Prueba() {
  let location = useLocation();
  if(location.pathname == "/login"){
    return <Login></Login>
  }
  if(location.pathname == "/registro"){
    return <Registro></Registro>
  }
  return (
    <React.Fragment>
    <Navbar></Navbar>
    <h1 className='hidetest'>Test element</h1>
    <Routes>
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/paciente" element={<Paciente />} />
      <Route path="/pacienteTest" element={<PacienteTest />} />
      <Route path="/historiaClinica" element={<HistoriaClinica />} />
    </Routes>
    <Footer></Footer>
    </React.Fragment>
  );
}


function App () {
  const { t } = useTranslation();
    return (
      <Suspense fallback="...is loading">
      <main className='container'>
        <BrowserRouter>
        <Prueba></Prueba>
        </BrowserRouter>
      </main>
        </Suspense>
    );
}


export default App;
