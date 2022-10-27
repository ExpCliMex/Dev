import { Suspense } from "react";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import Calendar from "components/calendar/Calendar";
import "./App.css";
import Navbar from "components/navbar/Navbar";
import Patient from "components/patient/Patient";
import PatientTest from "components/patient/PatientTest";
import HistoriaClinica from "components/clinicHistories/ClinicHistory";
import Footer from "components/footer/Footer";
import Login from "components/login/Login";
import { useLocation } from "react-router-dom";
import Registro from "components/register/Register";
import "js/i18n";

function Main() {
    let location = useLocation();
    if (location.pathname === "/login") {
        return <Login></Login>;
    }
    if (location.pathname === "/registro") {
        return <Registro></Registro>;
    }
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path="/calendar" element={<Calendar />} />
                <Route
                    path="/paciente"
                    element={
                        <Patient args={{ form: "patient", action: "create" }} />
                    }
                />
                <Route
                    path="/pacientetest"
                    element={
                        <PatientTest
                            args={{ form: "patient", action: "create" }}
                        />
                    }
                />
                <Route path="/historiaClinica" element={<HistoriaClinica />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

function App() {
    return (
        <Suspense fallback="...is loading">
            <main className="container">
                <BrowserRouter>
                    <Main></Main>
                </BrowserRouter>
            </main>
        </Suspense>
    );
}

export default App;
