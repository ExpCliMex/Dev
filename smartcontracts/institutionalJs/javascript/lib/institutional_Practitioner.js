'use strict';
const { Contract, Context } = require('fabric-contract-api');
const Fhir = require('fhir').Fhir;

const collection = 'collection_institutional_Practitioner';

/**
 * Reference Type
 * @typedef {Object} Reference
 * @property {string} display Text alternative for the resource
 */

/**
 * Telecom type
 * @typedef {Object} Telecom
 * @property {'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other'} system
 * @property {string} value
 * @property {'home' | 'work' | 'temp' | 'old' | 'mobile'} use
 */

/**
 * Identifier Type
 * @typedef {Object} Identifier
 * @property {'official' | 'usual' | 'temp' | 'secondary' | 'old'} use
 * @property {string} system The namespace for the identifier value (uri)
 * @property {string} value The value that is unique
 * @property {Reference[]} assigner Organization that issued id
 */

/**
 * Name type
 * @typedef {Object} Name
 * @property {'official' | 'usual' | 'temp' | 'nickname' | 'anonymous' | 'old'} [use]
 * @property {string} family Family name (often called 'Surname')
 * @property {string[]} given Given names (not always 'first'). Includes middle names
 * @property {string[]} suffix Parts that come after the name
 * @property {string} [text] Text representation of the full name
 */

/**
 * Address type
 * @typedef {Object} Address
 * use, line city, postal code, country
 * @property {'home' | 'work' | 'temp' | 'old' | 'billing'} use Purpose of this address
 * @property {string[]} line Street name, number, direction & P.O. Box etc.
 * This repeating element order: The order in which lines should appear in an address label
 * @property {string} city Name of city, town etc.
 * @property {string} postalCode Postal code for area
 * @property {string} country Country
 */

/**
 * Practitioner collection
 * @typedef {Object} Practitioner
 * @property {string} id,
 * @property {'Practitioner'} resourceType
 * @property {Array<Identifier>} identifier
 * @property {Array<Name>} name
 * @property {Array<Telecom>} telecom
 * @property {Array<Address>} address
 * @property {'male' | 'female' | 'other' | 'unknown'} gender
 * @property {string} birthDate
 */

class institutional_Practitioner extends Contract {
  async initLedger (ctx) {
    console.info('Inicializar ledger');
    /**
     * @type {Practitioner[]} practitioners
     */
    const practitioners = [
      {
        resourceType: 'Practitioner',
        id: '6969821',
        identifier: [
          {
            use: 'official',
            system: 'urn:oid:2.16.840.1.113883.3.215.1.3.1.4',
            assigner: {
              display: 'GIIS Padrón de Profesionales de la Salud'
            },
            value: 'practioner001'
          }
        ],
        name: [
          {
            use: 'official',
            family: 'Perez',
            given: [
              'Juan'
            ],
            suffix: [
              'MD'
            ]
          }
        ],
        telecom: [
          {
            system: 'phone',
            value: '0205569336',
            use: 'work'
          },
          {
            system: 'email',
            value: 'juanPerez@jmail.com',
            use: 'work'
          },
          {
            system: 'fax',
            value: '0205669382',
            use: 'work'
          }
        ],
        address: [
          {
            use: 'work',
            line: [
              'continental 91'
            ],
            city: 'Den Burg',
            postalCode: '9105 PZ',
            country: 'NLD'
          }
        ],
        gender: 'male',
        birthDate: '1979-04-29'
      }
    ];
    for (let i = 0; i < practitioners.length; i++) {
      const practitioner = practitioners[i];
      await ctx.stub.putPrivateData(
        collection,
        practitioner.id,
        Buffer.from(JSON.stringify(practitioner))
      );
      console.info(`Added practitioner ${i + 1}`);
    }
    console.info('Finaliza inicialización ledger');
  }

  async createPractitioner (ctx, practitionerData) {
    console.info(`### START: Create ${collection} ###`);
    const practitioner = JSON.parse(practitionerData.toString());
    const fhir = new Fhir();
    const results = fhir.validate(practitioner);
    if (results.valid) {
      await ctx.stub.putPrivateData(
        collection,
        practitioner.id,
        Buffer.from(JSON.stringify(practitioner))
      );
    }
    console.info(`### END: Create ${collection} ###`);
    return JSON.stringify({ results, practitioner });
  }

  async readPractitioner (ctx, practitionerData) {
    console.info(`### START: Read ${collection} ###`);
    const practitioner = JSON.parse(practitionerData.toString());
    const practitionerId = practitioner.id;
    const practitionerAsBytes = await ctx.stub.getPrivateData(collection, practitionerId);
    if (!practitionerAsBytes || practitionerAsBytes.length === 0) {
      throw new Error(`${practitionerId} does not exist`);
    }
    console.info(`### END: Read ${collection} ###`);
    return practitionerAsBytes.toString();
  }

  /**
   * Query practitioner
   * @param {Context} ctx
   */
  async readAllPractitioner (ctx) {
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

  async updatePractitioner (ctx, practitionerData) {
    console.info(`### START: Update ${collection} ###`);
    const practitioner = JSON.parse(practitionerData.toString());
    const { id: practitionerId } = practitioner;
    console.info(`Type of practitionerId: ${typeof practitionerId}`);
    const practitionerAsBytes = await ctx.stub.getPrivateData(collection, practitionerId);
    if (!practitionerAsBytes || practitionerAsBytes.length === 0) {
      throw new Error(`${practitionerId} does not exist`);
    }
    const fhir = new Fhir();
    const results = fhir.validate(practitioner);
    if (results.valid) {
      await ctx.stub.putPrivateData(
        collection,
        practitionerId,
        Buffer.from(JSON.stringify(practitioner))
      );
    }
    console.info(`### END: Update ${collection} ###`);
    return JSON.stringify(practitioner);
  }

  async deletepractitioner (ctx, practitionerData) {
    console.info(`### START: Delete ${collection} ###`);
    const practitioner = JSON.parse(practitionerData.toString());
    await ctx.stub.deletePrivateData(collection, practitioner.id);
    console.info(`### END: Delete ${collection} ###`);
    return { deleted: true };
  }

  /**
   * Query practitioner
   * @param {Context} ctx
   * @param {string} practitionerData
   */
  async querypractitioner (ctx, practitionerData) {
    console.info(`### START: Query ${collection} ###`);
    const query = practitionerData.toString();
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

module.exports = institutional_Practitioner;
