function validate_patient_curp(value, form) {
    console.log("validate_patient_curp");
    return true;
}

function validate_patient_folio(value, form) {
    console.log("validate_patient_folio");
    return true;
}

function onChange_patient_curp(e, form) {
    console.log("onchange patient curp");
    return;
}

function validate_patient_FechaNacimiento(value, form) {
    console.log("validate_patient_FechaNacimiento");
    return true;
}

function onChange_patient_FechaNacimiento(e, form) {
    console.log("onChange_patient_FechaNacimiento");
    return;
}

function onChange_termsCheck(e, form) {
    console.log("onChange_termsCheck, the value is: " + e.target.checked);
    return;
}

function onChange_patient_sex(e, form) {
    console.log("onChange_patient_sex, the value is: " + e.target.value);
    return;
}

function onSubmit(data, viewConfig, args, form) {
    console.log(data);
    console.log(viewConfig);
    console.log(args);
    console.log(form);
}

export {
    validate_patient_curp,
    validate_patient_folio,
    onChange_patient_curp,
    validate_patient_FechaNacimiento,
    onChange_patient_FechaNacimiento,
    onChange_termsCheck,
    onChange_patient_sex,
    onSubmit,
};
