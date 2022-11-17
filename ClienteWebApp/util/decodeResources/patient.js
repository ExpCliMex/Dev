function getExtension(extensions, url) {
    return extensions.find((extension) => extension.url === url);
}

function getTelecom(telecoms, system, use) {
    return telecoms.find(
        (telecom) => telecom.system === system && telecom.use === use
    );
}
function decodePatient(patient) {
    const body = {};
    body.patient_numExp = patient.id;
    body.patient_curp = patient.identifier[0].value;
    const patientName = patient.name[0];
    body.patient_apellidoPaterno = patientName.family;
    const [name, lastName1, lastName2] = patientName.text.split("\n", 3);
    body.patient_nombre = name;
    body.patient_apellidoPaterno = lastName1;
    body.patient_apellidoMaterno = lastName2;
    body.patient_FechaNacimiento = patient.birthDate;
    body.patient_sex = patient.gender;
    const extensions = patient.extension;
    const identifier = getExtension(
        extensions,
        "https://build.fhir.org/datatypes.html#Identifier"
    );
    body.patient_folio = identifier.valueIdentifier.value;
    body.patient_fechaRegistro = identifier.valueIdentifier.period.start;
    const religion = getExtension(
        extensions,
        "http://hl7.org/fhir/StructureDefinition/patient-religion"
    );
    body.patient_religion = religion.valueCodeableConcept.text;
    const escolarity = getExtension(
        extensions,
        "https://www.hl7.org/fhir/v3/EducationLevel/cs.html"
    );
    body.patient_escolaridad = escolarity.valueString;
    const birthPlace = getExtension(
        extensions,
        "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
    );
    body.patient_estado = birthPlace.valueAddress.state;
    const occupationalData = getExtension(
        extensions,
        "https://hl7.org/fhir/2018May/occupationaldata.html"
    );
    body.patient_empleado = occupationalData.valueString;
    const nationality = getExtension(
        extensions,
        "http://hl7.org/fhir/StructureDefinition/patient-nationality"
    );
    body.patient_nacionalidad = nationality.valueCodeableConcept.text;
    body.patient_estadoCivil = patient.maritalStatus.coding[0].display;
    const address = patient.address[0];
    const [street, numExt, numInt, settlement] = address.line[0].split("\n", 4);
    body.contact_calle = street;
    body.patient_numExt = numExt;
    body.patient_numInt = numInt;
    body.patient_colonia = settlement;
    body.patient_cp = address.postalCode;
    body.patient_municipio = address.city;
    body.patient_localidad = address.district;
    body.patient_contact_estado = address.state;
    const telecoms = patient.telecom;
    body.patient_celular = getTelecom(telecoms, "phone", "mobile")?.value;
    body.patient_telefono = getTelecom(telecoms, "phone", "home")?.value;
    body.patient_email = getTelecom(telecoms, "email", "home")?.value;
    const contact = patient.contact[0];
    body.vinculo = contact.relationship[0].coding[0].display;
    const [respName, respLastName1, respLastName2] = contact.name.text.split(
        "\n",
        3
    );
    body.nombreResp = respName;
    body.apellidoPaternoResp = respLastName1;
    body.apellidoMaternoResp = respLastName2;
    const respAddress = contact.address;
    const [respStreet, numExtResp, numIntResp, coloniaResp] =
        respAddress.line[0].split("\n", 4);
    body.calleResp = respStreet;
    body.numExtResp = numExtResp;
    body.numIntResp = numIntResp;
    body.coloniaResp = coloniaResp;
    body.cpResp = respAddress.postalCode;
    body.municipioResp = respAddress.city;
    body.localidadResp = respAddress.district;
    body.estadoResp = respAddress.state;
    body.paisResp = respAddress.country;
    body.celularResp = getTelecom(contact.telecom, "phone", "mobile").value;
    body.telefonoResp = getTelecom(contact.telecom, "phone", "home").value;
    body.emailResp = getTelecom(contact.telecom, "email", "home").value;
    // If we have undefined items, convert to empty string
    Object.entries(body).forEach(([key, value]) => {
        if (!value) body[key] = "";
    });
    return body;
}

module.exports = { decodePatient };
