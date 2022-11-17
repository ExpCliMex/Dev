const user_logic = require("../app/user")
const express = require('express');
const router = express.Router();
const msg = require("../util/messages")

router.post('/form_test', async (req, res) => {
    console.log(req.body)
    decodeBody(req.body)
    return;
});

function decodeBody(data) {
    let FhirPatientAndRelated = {
        "resourceType": "Patient",
        "id": data.patient_numExp,
        "active": true,
        "identifier": [
            {
                "type": {
                    "text": "CURP"
                },
                "system": "urn:oid:2.16.840.1.113883.4.629",
                "value": data.patient_curp
            }
        ],
        "language": "spanish",
        "name": [
            {
                "use": "official",
                "text": data.patient_nombre + " " + data.patient_apellidoPaterno + " " + data.patient_apellidoMaterno,
                "family": data.patient_apellidoPaterno,
                "given": [
                    data.patient_nombre
                ]
            }
        ],
        "birthDate": data.patient_FechaNacimiento,
        "gender": data.patient_sex,
        "extension": [
            {
                "valueIdentifier": {
                    "use": "official",
                    "type": {
                        "text": "Filler Identifier"
                    },
                    "value": data.patient_folio,
                    "period": {
                        "start": data.patient_fechaRegistro
                    }
                }
            },
            {
                "url": "http://hl7.org/fhir/StructureDefinition/patient-religion",
                "valueCodeableConcept": {
                    "coding": [
                        {
                            "system": "urn:oid:2.16.840.1.113883.3.215.12.11"
                        }
                    ],
                    "text": data.patient_religion
                }
            },
            {
                "url": "https://www.hl7.org/fhir/v3/EducationLevel/cs.html",
                "valueString": data.patient_escolaridad,

            },
            {
                "url": "http://hl7.org/fhir/StructureDefinition/patient-birthPlace",
                "valueAddress": {
                    "state": data.patient_estado
                }
            },
            {
                "url": "https://hl7.org/fhir/2018May/occupationaldata.html",
                "valueString": data.patient_empleado
            },

            {
                "url": "http://hl7.org/fhir/StructureDefinition/patient-nationality",
                "valueCodeableConcept": {
                    "text": data.patient_nacionalidad
                }
            }
        ],
        "maritalStatus": {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                    "display": data.patient_estadoCivil
                }
            ]
        },

        "address": [
            {
                "use": "home",
                "line": [
                    data.contact_calle + " " + data.patient_numExt + " " + data.patient_numInt + " " + data.patient_colonia
                ],
                "postalCode": data.patient_cp,
                "city": data.patient_municipio,
                "district": data.patient_localidad,
                "state": data.patient_contact_estado
            }
        ],

        "telecom": [
            {
                "system": "phone",
                "value": data.patient_celular,
                "use": "mobile"
            },
            {
                "system": "phone",
                "use": "home",
                "value": data.patient_telefono
            },
            {
                "system": "email",
                "use": "home",
                "value": data.patient_email
            }
        ],
        "contact": [
            {
                "relationship": [
                    {
                        "coding": [
                            {
                                "display": data.vinculo
                            }
                        ]
                    }
                ],
                "name": {
                    "text": data.nombreResp + " " + data.apellidoPaternoResp + " " + data.apellidoMaternoResp,
                    "family": data.apellidoPaternoResp,
                    "given": [
                        data.nombreResp
                    ]
                },
                "address": {
                    "use": "home",
                    "line": [
                        data.calleResp + " " + data.numExtResp + " " + data.numIntResp + " " + data.coloniaResp
                    ],
                    "postalCode": data.cpResp,
                    "city": data.municipioResp,
                    "district": data.localidadResp,
                    "state": data.estadoResp,
                    "country": data.paisResp
                },
                "telecom": [
                    {
                        "system": "phone",
                        "value": data.celularResp,
                        "use": "mobile"
                    },
                    {
                        "system": "phone",
                        "use": "home",
                        "value": data.telefonoResp
                    },
                    {
                        "system": "email",
                        "use": "home",
                        "value": data.emailResp
                    }
                ]
            },
        ]
    }
    let FhirInfoPoliza = {
        "resourceType": "Coverage",
        "status": data.cuentaSeguro,
        "identifier": [
            {
                "value": data.polizaSMed
            }
        ],
        "type": {
            "text": data.programaSeguroMedico
        },
        "period": {
            "start": data.fechaInicioSeguroMedico,
            "end": data.fechaFinSeguroMedico
        },
        "subscriberId": data.folioSMed,
        "beneficiary": {
            "reference": data.titularSeguroMedico
        },
        "payor": [
            {
                "display": data.programaSeguroMedico
            }
        ]
    }
    let FhirInfoLaboral = {
        "resourceType": "Observation",

        "code": {
            "coding": [
                {
                    "system": "urn:oid:2.16.840.1.113883.3.215.1.2",
                    "code": "NSS",
                    "display": data.nssInfLab
                }
            ]
        },

        "extension": [
            {
                "valueString": data.tipoContraInfLab,
                "_valueString": {
                    "id": data.areaInfLab
                }
            },
            {
                "valueString": data.deptInfLab,
                "_valueString": {
                    "id": data.puestoInfLab
                }
            }
        ]
    }
    let FhirBloodGroup = {
        "resourceType": "Observation",
        "code": {
            "coding": [
                {
                    "display": data.patient_sangre
                }
            ],
            "text": "Blood Group"
        },
    }
    let FhirInvoice = {
        "resourceType": "Invoice",


        "identifier": [
            {
                "system": "urn:oid:2.16.840.1.113883.4.630",
                "value": data.rfcInfFact
            }
        ],

        "subject": {
            "reference": data.nombreInfFact
        },
        "note": [data.commentInfFact],
        "extension": [
            {
                "valueContactPoint": {
                    "system": "email",
                    "value": data.emailInfFact
                }
            }
        ]       
    }
    return [FhirPatientAndRelated, FhirInfoPoliza, FhirInfoLaboral, FhirBloodGroup,FhirInvoice]
}


module.exports = router; 