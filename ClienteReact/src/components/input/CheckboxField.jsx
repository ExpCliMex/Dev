import React from "react";
import { FormControl } from "components/form/FormControl";
import { Label } from "components/input/Label";
import { useTranslation } from "react-i18next";
import pp from "js/form/propertiesProcessing";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorCheckboxField } from "components/errors/ErrorCheckboxField";

function CheckboxField({
    id,
    type = "checkbox",
    properties = {},
    viewFunctions,
    form,
}) {
    //Init
    const { t } = useTranslation();
    let propertiesCompleted = undefined;
    let formControlClassName = "";
    //postprocessing properties
    propertiesCompleted = properties;
    propertiesCompleted["type"] = type; //Input class processing
    if (!propertiesCompleted.className) {
        propertiesCompleted.className = "form-check-input form-check";
    }
    //
    formControlClassName = `${formControlClassName} col-8 col-md-6 col-lg-4 col-xxl-3`;
    //register options
    let propertiesProcessed = {};
    // delete options of register from properties completed, and pass to register options
    propertiesProcessed = pp.processPropertiesForCheckBoxField(
        id,
        propertiesCompleted,
        viewFunctions,
        form
    );
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
                render={ErrorCheckboxField}
            />
        </FormControl>
    );
    // return (
    //     <FormControl className={formControlClassName}>
    //         <input
    //             type="checkbox"
    //             id={id}
    //             name={id}
    //             className={inputClassName}
    //         />
    //         <Label htmlFor={id} className="form-check-label">
    //             {labelText}
    //         </Label>
    //     </FormControl>
    // );
}

export { CheckboxField };
