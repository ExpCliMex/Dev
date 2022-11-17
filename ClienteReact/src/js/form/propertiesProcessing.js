import i18n from "js/i18n";

const t = i18n.t;

function processPropertiesForTextField(
    id,
    prePropertiesCompleted,
    viewFunctions, //es un objeto { validate_id : function(value, form)....}
    form
) {
    let propertiesCompleted = prePropertiesCompleted;
    let options = {};
    //process, for doc see: https://react-hook-form.com/api/useform/register
    //ref property
    if (prePropertiesCompleted.ref) {
        options.ref = prePropertiesCompleted.ref;
        delete propertiesCompleted.ref;
    }
    //required
    if (prePropertiesCompleted.required) {
        options.required = t(prePropertiesCompleted.required);
        delete propertiesCompleted.required;
    }
    //maxLength
    if (prePropertiesCompleted.maxLength) {
        options.maxLength = prePropertiesCompleted.maxLength;
        delete propertiesCompleted.maxLength;
    }
    //minLength
    if (prePropertiesCompleted.minLength) {
        options.minLength = prePropertiesCompleted.minLength;
        delete propertiesCompleted.minLength;
    }
    //max
    if (prePropertiesCompleted.max) {
        options.max = prePropertiesCompleted.max;
        delete propertiesCompleted.max;
    }
    //min
    if (prePropertiesCompleted.min) {
        options.min = prePropertiesCompleted.min;
        delete propertiesCompleted.min;
    }
    //pattern
    if (prePropertiesCompleted.pattern) {
        options.pattern = prePropertiesCompleted.pattern;
        delete propertiesCompleted.pattern;
    }
    //validate
    if (prePropertiesCompleted.validate) {
        options.validate = (value) => {
            return viewFunctions["validate_" + id](value, form);
        };
        delete propertiesCompleted.validate;
    }
    //valueAsNumber
    if (prePropertiesCompleted.valueAsNumber) {
        options.valueAsNumber = prePropertiesCompleted.valueAsNumber;
        delete propertiesCompleted.valueAsNumber;
    }
    //valueAsDate
    if (prePropertiesCompleted.valueAsDate) {
        options.valueAsDate = prePropertiesCompleted.valueAsDate;
        delete propertiesCompleted.valueAsDate;
    }
    //setValueAs
    if (prePropertiesCompleted.setValueAs) {
        options.setValueAs = (value) => {
            return viewFunctions["setValueAs_" + id](value, form);
        };
        //options.setValueAs = prePropertiesCompleted.setValueAs;
        delete propertiesCompleted.setValueAs;
    }
    //disabled
    if (prePropertiesCompleted.disabled) {
        options.disabled = prePropertiesCompleted.disabled;
        delete propertiesCompleted.disabled;
    }
    //onChange
    if (prePropertiesCompleted.onChange) {
        options.onChange = (e) => {
            viewFunctions["onChange_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onChange;
    }
    //onBlur
    if (prePropertiesCompleted.onBlur) {
        options.onBlur = (e) => {
            viewFunctions["onBlur_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onBlur;
    }
    //value
    if (prePropertiesCompleted.value) {
        options.value = prePropertiesCompleted.value;
        delete propertiesCompleted.value;
    }
    //shouldUnregister
    if (prePropertiesCompleted.shouldUnregister) {
        options.shouldUnregister = prePropertiesCompleted.shouldUnregister;
        delete propertiesCompleted.shouldUnregister;
    }
    //deps
    if (prePropertiesCompleted.deps) {
        options.deps = prePropertiesCompleted.deps;
        delete propertiesCompleted.deps;
    }
    //return
    return {
        propertiesCompleted,
        options,
    };
}

function processPropertiesForDateField(
    id,
    prePropertiesCompleted,
    viewFunctions, //es un objeto { validate_id : function(value, form)....}
    form
) {
    let propertiesCompleted = prePropertiesCompleted;
    let options = {};
    //process, for doc see: https://react-hook-form.com/api/useform/register
    //ref property
    if (prePropertiesCompleted.ref) {
        options.ref = prePropertiesCompleted.ref;
        delete propertiesCompleted.ref;
    }
    //required
    if (prePropertiesCompleted.required) {
        options.required = t(prePropertiesCompleted.required);
        delete propertiesCompleted.required;
    }
    //maxLength
    if (prePropertiesCompleted.maxLength) {
        options.maxLength = prePropertiesCompleted.maxLength;
        delete propertiesCompleted.maxLength;
    }
    //minLength
    if (prePropertiesCompleted.minLength) {
        options.minLength = prePropertiesCompleted.minLength;
        delete propertiesCompleted.minLength;
    }
    //max
    if (prePropertiesCompleted.max) {
        options.max = prePropertiesCompleted.max;
        delete propertiesCompleted.max;
    }
    //min
    if (prePropertiesCompleted.min) {
        options.min = prePropertiesCompleted.min;
        delete propertiesCompleted.min;
    }
    //pattern
    if (prePropertiesCompleted.pattern) {
        options.pattern = prePropertiesCompleted.pattern;
        delete propertiesCompleted.pattern;
    }
    //validate
    if (prePropertiesCompleted.validate) {
        options.validate = (value) => {
            return viewFunctions["validate_" + id](value, form);
        };
        delete propertiesCompleted.validate;
    }
    //valueAsNumber
    if (prePropertiesCompleted.valueAsNumber) {
        options.valueAsNumber = prePropertiesCompleted.valueAsNumber;
        delete propertiesCompleted.valueAsNumber;
    }
    //valueAsDate
    if (prePropertiesCompleted.valueAsDate) {
        options.valueAsDate = prePropertiesCompleted.valueAsDate;
        delete propertiesCompleted.valueAsDate;
    }
    //setValueAs
    if (prePropertiesCompleted.setValueAs) {
        options.setValueAs = (value) => {
            return viewFunctions["setValueAs_" + id](value, form);
        };
        //options.setValueAs = prePropertiesCompleted.setValueAs;
        delete propertiesCompleted.setValueAs;
    }
    //disabled
    if (prePropertiesCompleted.disabled) {
        options.disabled = prePropertiesCompleted.disabled;
        delete propertiesCompleted.disabled;
    }
    //onChange
    if (prePropertiesCompleted.onChange) {
        options.onChange = (e) => {
            viewFunctions["onChange_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onChange;
    }
    //onBlur
    if (prePropertiesCompleted.onBlur) {
        options.onBlur = (e) => {
            viewFunctions["onBlur_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onBlur;
    }
    //value
    if (prePropertiesCompleted.value) {
        options.value = prePropertiesCompleted.value;
        delete propertiesCompleted.value;
    }
    //shouldUnregister
    if (prePropertiesCompleted.shouldUnregister) {
        options.shouldUnregister = prePropertiesCompleted.shouldUnregister;
        delete propertiesCompleted.shouldUnregister;
    }
    //deps
    if (prePropertiesCompleted.deps) {
        options.deps = prePropertiesCompleted.deps;
        delete propertiesCompleted.deps;
    }
    //return
    return {
        propertiesCompleted,
        options,
    };
}

function processPropertiesForCheckBoxField(
    id,
    prePropertiesCompleted,
    viewFunctions, //es un objeto { validate_id : function(value, form)....}
    form
) {
    let propertiesCompleted = {...prePropertiesCompleted};
    let options = {};
    //process, for doc see: https://react-hook-form.com/api/useform/register
    //ref property
    if (prePropertiesCompleted.ref) {
        options.ref = prePropertiesCompleted.ref;
        delete propertiesCompleted.ref;
    }
    //required
    if (prePropertiesCompleted.required) {
        options.required = prePropertiesCompleted.required;
        delete propertiesCompleted.required;
    }
    //maxLength
    if (prePropertiesCompleted.maxLength) {
        options.maxLength = prePropertiesCompleted.maxLength;
        delete propertiesCompleted.maxLength;
    }
    //minLength
    if (prePropertiesCompleted.minLength) {
        options.minLength = prePropertiesCompleted.minLength;
        delete propertiesCompleted.minLength;
    }
    //max
    if (prePropertiesCompleted.max) {
        options.max = prePropertiesCompleted.max;
        delete propertiesCompleted.max;
    }
    //min
    if (prePropertiesCompleted.min) {
        options.min = prePropertiesCompleted.min;
        delete propertiesCompleted.min;
    }
    //pattern
    if (prePropertiesCompleted.pattern) {
        options.pattern = prePropertiesCompleted.pattern;
        delete propertiesCompleted.pattern;
    }
    //validate
    if (prePropertiesCompleted.validate) {
        options.validate = (value) => {
            return viewFunctions["validate_" + id](value, form);
        };
        delete propertiesCompleted.validate;
    }
    //valueAsNumber
    if (prePropertiesCompleted.valueAsNumber) {
        options.valueAsNumber = prePropertiesCompleted.valueAsNumber;
        delete propertiesCompleted.valueAsNumber;
    }
    //valueAsDate
    if (prePropertiesCompleted.valueAsDate) {
        options.valueAsDate = prePropertiesCompleted.valueAsDate;
        delete propertiesCompleted.valueAsDate;
    }
    //setValueAs
    if (prePropertiesCompleted.setValueAs) {
        options.setValueAs = (value) => {
            return viewFunctions["setValueAs_" + id](value, form);
        };
        //options.setValueAs = prePropertiesCompleted.setValueAs;
        delete propertiesCompleted.setValueAs;
    }
    //disabled
    if (prePropertiesCompleted.disabled) {
        options.disabled = prePropertiesCompleted.disabled;
        delete propertiesCompleted.disabled;
    }
    //onChange
    if (prePropertiesCompleted.onChange) {
        options.onChange = (e) => {
            viewFunctions["onChange_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onChange;
    }
    //onBlur
    if (prePropertiesCompleted.onBlur) {
        options.onBlur = (e) => {
            viewFunctions["onBlur_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onBlur;
    }
    //value
    if (prePropertiesCompleted.value) {
        options.value = prePropertiesCompleted.value;
        delete propertiesCompleted.value;
    }
    //shouldUnregister
    if (prePropertiesCompleted.shouldUnregister) {
        options.shouldUnregister = prePropertiesCompleted.shouldUnregister;
        delete propertiesCompleted.shouldUnregister;
    }
    //deps
    if (prePropertiesCompleted.deps) {
        options.deps = prePropertiesCompleted.deps;
        delete propertiesCompleted.deps;
    }
    //return
    return {
        propertiesCompleted,
        options,
    };
}

function processPropertiesForSelectField(
    id,
    prePropertiesCompleted,
    viewFunctions, //es un objeto { validate_id : function(value, form)....}
    form
) {
    let propertiesCompleted = {...prePropertiesCompleted};
    let options = {};
    //process, for doc see: https://react-hook-form.com/api/useform/register
    //ref property
    if (prePropertiesCompleted.ref) {
        options.ref = prePropertiesCompleted.ref;
        delete propertiesCompleted.ref;
    }
    //required
    if (prePropertiesCompleted.required) {
        options.required = prePropertiesCompleted.required;
        delete propertiesCompleted.required;
    }
    //maxLength
    if (prePropertiesCompleted.maxLength) {
        options.maxLength = prePropertiesCompleted.maxLength;
        delete propertiesCompleted.maxLength;
    }
    //minLength
    if (prePropertiesCompleted.minLength) {
        options.minLength = prePropertiesCompleted.minLength;
        delete propertiesCompleted.minLength;
    }
    //max
    if (prePropertiesCompleted.max) {
        options.max = prePropertiesCompleted.max;
        delete propertiesCompleted.max;
    }
    //min
    if (prePropertiesCompleted.min) {
        options.min = prePropertiesCompleted.min;
        delete propertiesCompleted.min;
    }
    //pattern
    if (prePropertiesCompleted.pattern) {
        options.pattern = prePropertiesCompleted.pattern;
        delete propertiesCompleted.pattern;
    }
    //validate
    if (prePropertiesCompleted.validate) {
        options.validate = (value) => {
            return viewFunctions["validate_" + id](value, form);
        };
        delete propertiesCompleted.validate;
    }
    //valueAsNumber
    if (prePropertiesCompleted.valueAsNumber) {
        options.valueAsNumber = prePropertiesCompleted.valueAsNumber;
        delete propertiesCompleted.valueAsNumber;
    }
    //valueAsDate
    if (prePropertiesCompleted.valueAsDate) {
        options.valueAsDate = prePropertiesCompleted.valueAsDate;
        delete propertiesCompleted.valueAsDate;
    }
    //setValueAs
    if (prePropertiesCompleted.setValueAs) {
        options.setValueAs = (value) => {
            return viewFunctions["setValueAs_" + id](value, form);
        };
        //options.setValueAs = prePropertiesCompleted.setValueAs;
        delete propertiesCompleted.setValueAs;
    }
    //disabled
    if (prePropertiesCompleted.disabled) {
        options.disabled = prePropertiesCompleted.disabled;
        delete propertiesCompleted.disabled;
    }
    //onChange
    if (prePropertiesCompleted.onChange) {
        options.onChange = (e) => {
            viewFunctions["onChange_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onChange;
    }
    //onBlur
    if (prePropertiesCompleted.onBlur) {
        options.onBlur = (e) => {
            viewFunctions["onBlur_" + id](e, form);
            return;
        };
        delete propertiesCompleted.onBlur;
    }
    //value
    if (prePropertiesCompleted.value) {
        options.value = prePropertiesCompleted.value;
        delete propertiesCompleted.value;
    }
    //shouldUnregister
    if (prePropertiesCompleted.shouldUnregister) {
        options.shouldUnregister = prePropertiesCompleted.shouldUnregister;
        delete propertiesCompleted.shouldUnregister;
    }
    //deps
    if (prePropertiesCompleted.deps) {
        options.deps = prePropertiesCompleted.deps;
        delete propertiesCompleted.deps;
    }
    //return
    return {
        propertiesCompleted,
        options,
    };
}

export default {
    processPropertiesForTextField,
    processPropertiesForDateField,
    processPropertiesForCheckBoxField,
    processPropertiesForSelectField,
};
