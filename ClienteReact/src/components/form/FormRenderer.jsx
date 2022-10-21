import { Fragment, React } from "react";
import { TextField } from "../input/TextField";
import { CheckboxField } from "../input/CheckboxField";
import { Submit } from "../input/Submit";
import { SelectField } from "../input/SelectField";
import { DateField } from "../input/DateField";

const currentFields = {
    text: TextField,
    checkbox: CheckboxField,
    password: TextField,
    email: TextField,
    submit: Submit,
    select: SelectField,
    date: DateField,
};

export default function FormRenderer({ fields, action, viewFunctions, form }) {
    return (
        <>
            {fields.map((field, index) => {
                const FieldComponent = currentFields[field.type] || Fragment;
                return (
                    <FieldComponent
                        id={field.id || index}
                        type={field.type}
                        properties={field.properties[action]}
                        viewFunctions={viewFunctions}
                        form={form}
                    />
                );
            })}
        </>
    );
}
