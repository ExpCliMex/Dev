'use strict';
const { Contract } = require('fabric-contract-api');

const collection = 'collection_institutional_institution';

class institutional_institution extends Contract {
  async initLedger(ctx) {
    console.info('Inicializar ledger');
    const institutions = [{
      highway: 'street',
      highwayName: 'Atenas Veracruzana',
      streetNumber: 1,
      suiteNumber: '',
      settlement: 'neighborhood',
      settlementName: 'Obrero Campesina',
      locality: 'Xalapa',
      municipalty: 'Xalapa',
      state: 'Veracruz',
      postalCode: '91100',
      country: 'Mexico',
      telephone: '1234567890',
      cellphone: '1234567890',
      email: 'example@institution.com',
      timezone: 'Mexico City',
      // Clave única de establecimientos de salud
      clues: 'VZSSA000310',
      name: 'Hospital Regional de Xalapa',
      sanitaryLicense: 'KSDF8-9SD7F8SD-7F9D',
      establishmentName: 'Hospital Regional',
      // Identificador de la institution
      oid: '12314343255',
      id: '1'
    }];
    for (let i = 0; i < institutions.length; i++) {
      await ctx.stub.putPrivateData(collection, `Institution${i + 1}`, Buffer.from(JSON.stringify(institutions[i])));
      console.info('Added <-->', institutions[i].curp);
    }
  }

  async createInstitution(ctx, institutionData) {
    console.info(`### START: Create ${collection} ###`);
    const institution = JSON.parse(institutionData.toString());
    await ctx.stub.putPrivateData(collection, institution.id, Buffer.from(institutionData));
    console.info(`### END: Create ${collection} ###`);
    return institutionData;
  }

  async readInstitution(ctx, institutionData) {
    console.info(`### START: Read ${collection} ###`);
    const institution = JSON.parse(institutionData.toString());
    const institutionId = institution.id;
    const institutionAsBytes = await ctx.stub.getPrivateData(collection, institutionId);
    if (!institutionAsBytes || institutionAsBytes.length === 0) {
      throw new Error(`${institutionId} does not exist`);
    }
    console.info(`### END: Read ${collection} ###`);
    return institutionAsBytes.toString();
  }

  async updateInstitution(ctx, institutionData) {
    console.info(`### START: Update ${collection} ###`);
    const institution = JSON.parse(institutionData.toString());
    const {
      highway,
      highwayName,
      streetNumber,
      suiteNumber,
      settlement,
      settlementName,
      locality,
      municipalty,
      state,
      postalCode,
      country,
      telephone,
      cellphone,
      email,
      timezone,
      clues,
      name,
      sanitaryLicense,
      establishmentName,
      oid,
      id: institutionId,
    } = institution;
    console.info(`Type of institutionId: ${typeof institutionId}`);
    const institutionAsBytes = await ctx.stub.getPrivateData(collection, institutionId);
    if (!institutionAsBytes || institutionAsBytes.length === 0) {
      throw new Error(`${institutionId} does not exist`);
    }
    const oldInstitution = JSON.parse(institutionAsBytes.toString());
    const updatedInstitution = {
      highway,
      highwayName,
      streetNumber,
      suiteNumber,
      settlement,
      settlementName,
      locality,
      municipalty,
      state,
      postalCode,
      country,
      telephone,
      cellphone,
      email,
      timezone,
      clues,
      name,
      sanitaryLicense,
      establishmentName,
      oid,
    };
    const newInstitution = { ...oldInstitution, ...updatedInstitution };
    await ctx.stub.putPrivateData(collection, institutionId, Buffer.from(JSON.stringify(newInstitution)));
    console.info(`### END: Update ${collection} ###`);
    return newInstitution;
  }

  async deleteInstitution(ctx, institutionData) {
    console.info(`### START: Delete ${collection} ###`);
    const institution = JSON.parse(institutionData.toString());
    await ctx.stub.deletePrivateData(collection, institution.id);
    console.info(`### END: Delete ${collection} ###`);
    return { deleted: true };
  }

  /**
   * Query institution
   * @param {Context} ctx
   * @param {string} institutionData
   */
  async queryInstitution(ctx, institutionData) {
    console.info(`### START: Query ${collection} ###`);
    const query = institutionData.toString();
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

module.exports = institutional_institution;
