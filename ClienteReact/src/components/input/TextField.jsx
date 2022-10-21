import React from "react";
import { FormControl } from "../form/FormControl";
import { Label } from "./Label";
import { useTranslation } from "react-i18next";
import pp from "js/form/propertiesProcessing";

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
        </FormControl>
    );
}

export { TextField };
