const { getTodayDate } = require("./dates");

function encodeBody(data) {
    let FhirPatientAndRelated = {
        resourceType: "Patient",
        id: data.patient_numExp,
        active: true,
        identifier: [
            {
                type: {
                    text: "CURP",
                },
                system: "urn:oid:2.16.840.1.113883.4.629",
                value: data.patient_curp,
            },
        ],
        language: "spanish",
        name: [
            {
                use: "official",
                text:
                    data.patient_nombre +
                    "\n" +
                    data.patient_apellidoPaterno +
                    "\n" +
                    data.patient_apellidoMaterno,
                family: data.patient_apellidoPaterno,
                given: [data.patient_nombre],
            },
        ],
        birthDate: data.patient_FechaNacimiento,
        gender: data.patient_sex,
        extension: [
            {
                url: "https://build.fhir.org/datatypes.html#Identifier",
                valueIdentifier: {
                    use: "official",
                    type: {
                        text: "Filler Identifier",
                    },
                    value: data.patient_folio,
                    period: {
                        start: data.patient_fechaRegistro || getTodayDate(),
                        // "start": data.patient_fechaRegistro
                    },
                },
            },
            {
                url: "http://hl7.org/fhir/StructureDefinition/patient-religion",
                valueCodeableConcept: {
                    coding: [
                        {
                            system: "urn:oid:2.16.840.1.113883.3.215.12.11",
                        },
                    ],
                    text: data.patient_religion,
                },
            },
            {
                url: "https://www.hl7.org/fhir/v3/EducationLevel/cs.html",
                valueString: data.patient_escolaridad,
            },
            {
                url: "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
                valueAddress: {
                    state: data.patient_estado,
                },
            },
            {
                url: "https://hl7.org/fhir/2018May/occupationaldata.html",
                valueString: data.patient_empleado,
            },

            {
                url: "http://hl7.org/fhir/StructureDefinition/patient-nationality",
                valueCodeableConcept: {
                    text: data.patient_nacionalidad,
                },
            },
        ],
        maritalStatus: {
            coding: [
                {
                    system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                    display: data.patient_estadoCivil,
                },
            ],
        },

        address: [
            {
                use: "home",
                line: [
                    data.contact_calle +
                        "\n" +
                        data.patient_numExt +
                        "\n" +
                        data.patient_numInt +
                        "\n" +
                        data.patient_colonia,
                ],
                postalCode: data.patient_cp,
                city: data.patient_municipio,
                district: data.patient_localidad,
                state: data.patient_contact_estado,
            },
        ],

        telecom: [
            {
                system: "phone",
                value: data.patient_celular,
                use: "mobile",
            },
            {
                system: "phone",
                use: "home",
                value: data.patient_telefono,
            },
            {
                system: "email",
                use: "home",
                value: data.patient_email,
            },
        ],
        contact: [
            {
                relationship: [
                    {
                        coding: [
                            {
                                display: data.vinculo,
                            },
                        ],
                    },
                ],
                name: {
                    text:
                        data.nombreResp +
                        "\n" +
                        data.apellidoPaternoResp +
                        "\n" +
                        data.apellidoMaternoResp,
                    family: data.apellidoPaternoResp,
                    given: [data.nombreResp],
                },
                address: {
                    use: "home",
                    line: [
                        data.calleResp +
                            "\n" +
                            data.numExtResp +
                            "\n" +
                            data.numIntResp +
                            "\n" +
                            data.coloniaResp,
                    ],
                    postalCode: data.cpResp,
                    city: data.municipioResp,
                    district: data.localidadResp,
                    state: data.estadoResp,
                    country: data.paisResp,
                },
                telecom: [
                    {
                        system: "phone",
                        value: data.celularResp,
                        use: "mobile",
                    },
                    {
                        system: "phone",
                        use: "home",
                        value: data.telefonoResp,
                    },
                    {
                        system: "email",
                        use: "home",
                        value: data.emailResp,
                    },
                ],
            },
        ],
    };
    let FhirInfoPoliza = {
        resourceType: "Coverage",
        status: data.cuentaSeguro,
        identifier: [
            {
                value: data.polizaSMed,
            },
        ],
        type: {
            text: data.programaSeguroMedico,
        },
        period: {
            start: data.fechaInicioSeguroMedico,
            end: data.fechaFinSeguroMedico,
        },
        subscriberId: data.folioSMed,
        beneficiary: {
            reference: data.titularSeguroMedico,
        },
        payor: [
            {
                display: data.programaSeguroMedico,
            },
        ],
    };
    let FhirInfoLaboral = {
        resourceType: "Observation",

        code: {
            coding: [
                {
                    system: "urn:oid:2.16.840.1.113883.3.215.1.2",
                    code: "NSS",
                    display: data.nssInfLab,
                },
            ],
        },

        extension: [
            {
                valueString: data.tipoContraInfLab,
                _valueString: {
                    id: data.areaInfLab,
                },
            },
            {
                valueString: data.deptInfLab,
                _valueString: {
                    id: data.puestoInfLab,
                },
            },
        ],
    };
    let FhirBloodGroup = {
        resourceType: "Observation",
        code: {
            coding: [
                {
                    display: data.patient_sangre,
                },
            ],
            text: "Blood Group",
        },
    };
    let FhirInvoice = {
        resourceType: "Invoice",

        identifier: [
            {
                system: "urn:oid:2.16.840.1.113883.4.630",
                value: data.rfcInfFact,
            },
        ],

        subject: {
            reference: data.nombreInfFact,
        },
        note: [data.commentInfFact],
        extension: [
            {
                valueContactPoint: {
                    system: "email",
                    value: data.emailInfFact,
                },
            },
        ],
    };
    return [
        FhirPatientAndRelated,
        FhirInfoPoliza,
        FhirInfoLaboral,
        FhirBloodGroup,
        FhirInvoice,
    ];
}

module.exports = { encodeBody };
