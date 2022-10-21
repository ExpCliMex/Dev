import React from "react";
import { FormControl } from "../form/FormControl";
import { Label } from "./Label";
import { useTranslation } from "react-i18next";

function Submit({ id, type = "submit", properties = {} }) {
    //Init
    const { t } = useTranslation();
    let propertiesCompleted = undefined;
    let formControlClassName = "";
    //
    propertiesCompleted = properties;
    propertiesCompleted["id"] = id;
    propertiesCompleted["name"] = id;
    propertiesCompleted["type"] = type;
    propertiesCompleted["value"] = t(id);

    if (!propertiesCompleted.className) {
        propertiesCompleted.className =
            "btn btn-primary me-2 mb-2 mb-md-0 text-white w-100";
    }
    if (!propertiesCompleted.formControlClassName) {
        formControlClassName = "mx-auto";
    }

    //create JSX object
    let inputGenerated = React.createElement(
        "input",
        propertiesCompleted,
        null
    );

    return (
        <FormControl className={formControlClassName}>
            {inputGenerated}
        </FormControl>
    );
    // return (
    //     <FormControl>
    //         <input type="submit" value={t(id)} className={inputClassName} />
    //     </FormControl>
    // );
}

export { Submit };
