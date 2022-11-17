'use strict';
const { Contract, Context } = require('fabric-contract-api');
const Fhir = require('fhir').Fhir;

/**
 * Name type
 * @typedef {Object} Name
 * @property {string} [use]
 * @property {string} family
 * @property {string[]} given
 * @property {string[]} suffix
 * @property {string} [text]
 */

/**
 * Telecom type
 * @typedef {Object} Telecom
 * @property {'phone' | 'email' | 'fax'} system
 * @property {string} value
 * @property {'home' | 'mobile' | 'work'} use
 */

/**
 * Address type
 * @typedef {Object} Address
 * @property {'home' | 'work'} use
 * @property {string[]} line
 * @property {string} city
 * @property {string} postalCode
 * @property {string} country
 */

/**
 * Coverage Collection
 * @typedef {Object} Coverage
 * @property {'active' | 'inactive'} status
 * @property {string} identifier
 * @property {string} type
 * @property {string} startDate
 * @property {string} endDate
 * @property {string} subscriberId
 * @property {string} beneficiary
 * @property {string} payor
 */

/**
 * Practitioner Collection
 * @typedef {Object} Practitioner
 * @property {string} identifier
 * @property {Name[]} name
 * @property {Telecom[]} telecom
 * @property {Address[]} address
 * @property {string} gender
 * @property {string} birthDate
 */

/**
 * Contact Collection
 * @typedef {Object} Contact
 * @property {string} relationship
 * @property {string} name
 * @property {string} address
 * @property {string} telecom
 */

/**
 * Patient collection
 * @typedef {Object} Patient
 * @property {string} degreeCompleted High School or secondary school degree complete
 * @property {string} birthPlace
 * @property {string} occupationalData
 * @property {string} religion
 * @property {string} nationality
 * @property {string} curp
 * @property {Name[]} name
 * @property {string} gender
 * @property {string} birthDate
 * @property {Address[]} address
 * @property {string} maritalStatus
 * @property {Array<{reference: string, display: string}>} generalPractitioner
 * @property {Telecom[]} telecom
 * @property {Contact[]} contact
 * @property {string} bloodGroup
 * @property {string} insurancePolicy
 * @property {Coverage} coverage
 */

const collection = 'collection_institutional_Patient';

class institutional_Patient extends Contract {
  async initLedger (ctx) {
    console.info('Inicializar ledger');
    /**
     * @type {Patient[]} patients
     */
    const patients = [
      {
        degreeCompleted: 'HS',
        id: '6969840',
        birthPlace: 'Rio Verde, San Luis Potosí',
        religion: 'Católico',
        occupationalData: 'Agricultor y recolector',
        nationality: 'Mexican',
        curp: 'AABM410118HSPLRN01',
        name: [
          {
            use: 'official',
            text: 'Manuel Alejandro Alvarez Bravo',
            family: 'Alvarez',
            given: [
              'Manuel',
              'Alejandro'
            ]
          }
        ],
        gender: 'male',
        birthDate: '1941-01-18',
        address: [
          {
            use: 'home',
            line: [
              'calle niños héroes #18, colonia Bungambilias'
            ],
            postalCode: '79600',
            city: 'Rio Verde',
            state: 'San Luis Potosi'
          },
        ],
        maritalStatus: 'Widowed',
        generalPractitioner: [
          {
            reference: 'Practitioner/6969821',
            display: 'Juan Perez'
          }
        ],
        telecom: [
          {
            system: 'phone',
            value: '+522221384946',
            use: 'mobile'
          },
          {
            system: 'phone',
            use: 'home',
            value: '+522224150258'
          },
          {
            system: 'email',
            use: 'work',
            value: 'manuel.alejandro@itspr.gob.mx'
          }
        ],
        contact: [
          {
            relationship: 'EP'
            ,
            name: {
              family: 'du Marché',
              given: [
                'Mari'
              ]
            },
            address: {
              use: 'home',
              line: [
                'calle juarez #20, colonia Ixtenco'
              ],
              postalCode: '79600',
              city: 'Rio Verde',
              state: 'San Luis Potosi'
            },
            telecom: [
              {
                system: 'phone',
                value: '+522221036647',
                use: 'mobile'
              },
              {
                system: 'phone',
                use: 'home',
                value: '+522224251257'
              },
              {
                system: 'email',
                use: 'work',
                value: 'mari_du@gmail.com'
              }
            ],

          }
        ],
        bloodGroup: 'O-',
        insurancePolicy: 'A123456780',
        coverage: {
          status: 'active',
          identifier: 'A123456780',
          type: 'IMSS',
          startDate: '1989-08-23',
          endDate: '2024-12-31',
          subscriberId: 'A001235',
          beneficiary: 'urn:uuid:pat001',
          payor: 'ITSPR'
        }
      }
    ];
    for (let i = 0; i < patients.length; i++) {
      const patient = patients[i];
      await ctx.stub.putPrivateData(
        collection,
        patient.id,
        Buffer.from(JSON.stringify(patient))
      );
      console.info(`Added patient ${i+1}`);
    }
    console.info('Finaliza inicialización ledger');
  }

  async createPatient (ctx, patientData) {
    console.info(`### START: Create ${collection} ###`);
    const patient = JSON.parse(patientData.toString());
    const fhir = new Fhir();
    const results = fhir.validate(patient);
    if (results.valid){
      await ctx.stub.putPrivateData(
        collection,
        patient.id,
        Buffer.from(JSON.stringify(patient))
      );
    }
    console.info(`### END: Create ${collection} ###`);
    return JSON.stringify({results, patient});
  }

  async readPatient (ctx, patientData) {
    console.info(`### START: Read ${collection} ###`);
    const patient = JSON.parse(patientData.toString());
    const patientId = patient.id;
    const patientAsBytes = await ctx.stub.getPrivateData(collection, patientId);
    if (!patientAsBytes || patientAsBytes.length === 0) {
      throw new Error(`${patientId} does not exist`);
    }
    console.info(`### END: Read ${collection} ###`);
    return patientAsBytes.toString();
  }

  /**
   * Query patient
   * @param {Context} ctx
   */
  async readAllPatient (ctx) {
    console.info(`### START: Read ${collection} ###`);
    const startKey = '';
    const endKey = '';
    const allResults = [];
    for await (const {
      key,
      value
    } of ctx.stub.getPrivateDataByRange(collection, startKey, endKey)) {
      const strValue = Buffer.from(value).toString('utf8');
      let record;
      try {
        record = JSON.parse(strValue);
      } catch (err) {
        console.log(err);
        record = strValue;
      }
      allResults.push(record);
    }
    console.info(allResults);
    console.info(`### END: Read ${collection} ###`);
    return JSON.stringify(allResults);
  }

  async updatePatient (ctx, patientData) {
    console.info(`### START: Update ${collection} ###`);
    const patient = JSON.parse(patientData.toString());
    const {id: patientId} = patient;
    console.info(`Type of patientId: ${typeof patientId}`);
    const patientAsBytes = await ctx.stub.getPrivateData(collection, patientId);
    if (!patientAsBytes || patientAsBytes.length === 0) {
      throw new Error(`${patientId} does not exist`);
    }
    const fhir = new Fhir();
    const results = fhir.validate(patient);
    if (results.valid){
      await ctx.stub.putPrivateData(
        collection,
        patientId,
        Buffer.from(JSON.stringify(patient))
      );
    }
    console.info(`### END: Update ${collection} ###`);
    return JSON.stringify(patient);
  }

  async deletepatient (ctx, patientData) {
    console.info(`### START: Delete ${collection} ###`);
    const patient = JSON.parse(patientData.toString());
    await ctx.stub.deletePrivateData(collection, patient.id);
    console.info(`### END: Delete ${collection} ###`);
    return { deleted: true };
  }

  /**
   * Delete Logic patient
   * @param {Context} ctx
   * @param {string} patientData
   */
  async deleteLogicPatient (ctx, patientData) {
    console.info(`### START: Delete Logically ${collection} ###`);
    const patient = JSON.parse(patientData.toString());
    const {id: patientId} = patient;
    const patientAsBytes = await ctx.stub.getPrivateData(collection, patientId);
    if (!patientAsBytes || patientAsBytes.length === 0) {
      throw new Error(`${patientId} does not exist`);
    }
    const oldPatient = JSON.parse(patientAsBytes.toString());
    const deletedPatient = { ...oldPatient, active: false };
    await ctx.stub.putPrivateData(collection, patientId, Buffer.from(JSON.stringify(deletedPatient)));
    console.info(`### END: Delete Logically ${collection} ###`);
    return JSON.stringify(deletedPatient);
  }

  /**
   * Query patient
   * @param {Context} ctx
   * @param {string} patientData
   */
  async querypatient (ctx, patientData) {
    console.info(`### START: Query ${collection} ###`);
    const query = patientData.toString();
    const resultsResponse = await ctx.stub.getPrivateDataQueryResult(collection, query);
    const resultsIterator = resultsResponse.iterator;
    const allResults = [];
    let res = { done: false, value: null };
    while (true) {
      res = await resultsIterator.next();
      if (res.value && res.value.value.toString()) {
        // Verificamos que el valor exista
        allResults.push(JSON.parse(res.value.value.toString('utf8')));
      }
      if (res.done) {
        await resultsIterator.close();
        console.info(`### END: Query ${collection} ###`);
        return allResults;
      }
    }
  }
}

module.exports = institutional_Patient;
