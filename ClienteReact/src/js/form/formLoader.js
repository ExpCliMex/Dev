import patientForm from 'config/forms/patient';
import patientFunctions from 'js/form/formLogic/patient';

let library = {
    patient: patientForm,
};

let functionLibrary = {
    patient: patientFunctions,
};

function getActions(entity) {
    return library[entity].actions;
}

function getSections(entity) {
    return library[entity].sections;
}

function getFields(entity) {
    return library[entity].fields;
}

function getViewConfig(entity) {
    return {
        actions: getActions(entity),
        fields: getFields(entity),
        sections: getSections(entity),
    };
}

function getViewFunctions(entity) {
    return functionLibrary[entity];
}

export default {
    getActions,
    getSections,
    getFields,
    getViewConfig,
    getViewFunctions,
};
