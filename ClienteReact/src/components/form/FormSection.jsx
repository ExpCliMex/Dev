import React from "react";
import { useTranslation } from "react-i18next";

import FormRenderer from "components/form/FormRenderer";

function Card({ children }) {
    return (
        <div class="card">
            <div class="card-body">
                <div className="row">{children}</div>
            </div>
        </div>
    );
}

export default function FormSection({
    section,
    action,
    viewConfig,
    viewFunctions,
    form,
}) {
    const { t } = useTranslation();
    let fields = [];
    section.fieldsIds.forEach((fieldId) => {
        fields.push(viewConfig.fields[fieldId]);
    });
    return (
        <div className="card-container">
            <div className="card-body">
                <h4 className="card-title">{t(section.titleLabelId)}</h4>
                <section>
                    <div className="row">
                        <div className="col-md-12 grid-margin">
                            <Card>
                                <FormRenderer
                                    fields={fields}
                                    action={action}
                                    viewFunctions={viewFunctions}
                                    form={form}
                                />
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export { FormSection };
