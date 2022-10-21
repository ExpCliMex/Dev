import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/demo3/style.css";
import "../styles/fonts/feather-font/css/iconfont.css";
import axios from "axios";
import { useForm, useFormContext } from "react-hook-form";
import FormWrapper from "../form/FormWrapper";
import FormSection from "../form/FormSection";
import core from "js/core";
import { useTranslation } from "react-i18next";

export default function Patient({
    args = { form: "patient", action: "read" },
}) {
    const { t } = useTranslation();
    let viewConfig = core.formLoader.getViewConfig(args.form);
    let viewFunctions = core.formLoader.getViewFunctions(args.form);

    var form = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    // };
    // const handleSubmit2 = (e) => {
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     let s = Object.fromEntries(data.entries());
    //     console.log(s);
    //     let url = `http://localhost:4002/test/form_test`;
    //     //let url = `/test/form_test`;
    //     axios.post(url, s).then((res) => {
    //         const persons = res.data;
    //         this.setState({ persons });
    //     });
    // };
    return (
        <React.Fragment>
            <div className="tabsP">
                <ul
                    className="nav nav-tabs nav-tabs-line"
                    id="lineTab"
                    role="tablist"
                >
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
                            {t(viewConfig.actions[args.action].tabLabelId)}
                            <button
                                type="button"
                                className="btn-close"
                            ></button>
                        </a>
                    </li>
                </ul>
            </div>
            <FormWrapper
                onSubmit={form.handleSubmit((data) => {
                    viewFunctions[args.action].onSubmit(
                        data,
                        viewConfig,
                        args,
                        form
                    );
                })}
            >
                <div className="card card-body">
                    <div className="page wrapper">
                        <div className="page-content">
                            <div className="row">
                                <div className="col-md-12 stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div id="wizardVertical">
                                                <h4 className="card-title">
                                                    {t(
                                                        viewConfig.actions[
                                                            args.action
                                                        ].formTitleId
                                                    )}
                                                </h4>

                                                {viewConfig.sections.map(
                                                    (section) => {
                                                        return (
                                                            <FormSection
                                                                section={
                                                                    section
                                                                }
                                                                action={
                                                                    args.action
                                                                }
                                                                viewConfig={
                                                                    viewConfig
                                                                }
                                                                viewFunctions={
                                                                    viewFunctions[
                                                                        args
                                                                            .action
                                                                    ]
                                                                }
                                                                form={form}
                                                            />
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
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
