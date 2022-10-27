import React from "react";
import { FormControl } from "components/form/FormControl";
import { Label } from "components/input/Label";
import { useTranslation } from "react-i18next";
import pp from "js/form/propertiesProcessing";
import { ErrorMessage } from "@hookform/error-message";

function TextField({
    id,
    type = "text",
    properties = {},
    viewFunctions,
    form,
}) {
    //Init
    const { t } = useTranslation();
    let propertiesCompleted = undefined;
    let formControlClassName = "";
    //preprocessing properties
    //placeholder property
    if (properties.placeholder) {
        properties.placeholder = t(id + "_placeholder");
    } else {
        properties.placeholder = "";
    }
    //postprocessing properties
    propertiesCompleted = properties;
    propertiesCompleted["type"] = type;
    if (properties.value || properties.readonly) {
        propertiesCompleted["value"] = properties.value || "";
    }
    //Input class processing
    if (!propertiesCompleted.className) {
        propertiesCompleted.className = "form-control";
    }
    //Class processing
    formControlClassName =
        properties.formControlClassName || "col-8 col-md-6 col-lg-4 col-xxl-3";

    //register options
    let propertiesProcessed = {};
    // delete options of register from properties completed, and pass to register options
    propertiesProcessed = pp.processPropertiesForTextField(
        id,
        propertiesCompleted,
        viewFunctions,
        form
    );
    //console.log({ propertiesProcessed, id });
    return (
        <FormControl className={formControlClassName}>
            <Label htmlFor={id} />
            <input
                {...propertiesProcessed.propertiesCompleted}
                {...form.register(id, propertiesProcessed.options)}
            />
            <ErrorMessage
                name={id}
                errors={form.formState.errors}
                render={({ message }) => (
                    <div className="error-message">{message}</div>
                )}
            />
        </FormControl>
    );
}

export { TextField };
