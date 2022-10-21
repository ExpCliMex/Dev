import React from "react";
import { FormControl } from "../form/FormControl";
import { Label } from "./Label";
import { useTranslation } from "react-i18next";
import pp from "js/form/propertiesProcessing";

function SelectField({
    id,
    type = "select",
    properties = {},
    viewFunctions,
    form,
}) {
    //Init
    const { t } = useTranslation();
    let propertiesCompleted = undefined;
    let formControlClassName = "";
    //preprocessing properties
    properties.className = properties.className || "form-select";
    //get data list
    let children = undefined;
    if (properties.source) {
        //complete code here....
    } else if (properties.data) {
        children = properties.data.map(({ label, value }) => (
            <option key={value} value={value}>
                {t(label)}
            </option>
        ));
    } else {
        throw new Error("No data provided for SELECT field");
    }
    //postprocessing properties
    propertiesCompleted = properties;
    propertiesCompleted["type"] = type;
    if (properties.value || properties.readonly) {
        propertiesCompleted["value"] = properties.value || "";
    }
    //Class processing
    formControlClassName =
        properties.formControlClassName || "col-8 col-md-6 col-lg-4 col-xxl-3";
    //register options
    let propertiesProcessed = {};
    propertiesProcessed = pp.processPropertiesForSelectField(
        id,
        propertiesCompleted,
        viewFunctions,
        form
    );
    return (
        <FormControl className={formControlClassName}>
            <Label htmlFor={id} />
            <select
                {...propertiesProcessed.propertiesCompleted}
                {...form.register(id, propertiesProcessed.options)}
            >
                {children}
            </select>
        </FormControl>
    );
}

export { SelectField };
