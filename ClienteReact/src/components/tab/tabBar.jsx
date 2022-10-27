import React from "react";

export default function TabBar(){
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
        </React.Fragment>
    );
}