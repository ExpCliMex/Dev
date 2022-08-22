'use strict';
const { Contract, Context } = require('fabric-contract-api');

const collection = 'collection_institutional_staff';

class institutional_staff extends Contract {
  async initLedger(ctx) {
    console.info('Inicializar ledger');
    const staffs = [{
      prefix: 'dr',
      specialty: 'general',
      specialty_text: 'Medicina General',
      subSpecialty: '',
      colleage: 'UV',
      curp: 'GACC010167HVZ12',
      professionalLicense: '',
      healtPersonalType: '',
      state: 'Veracruz',
      cellphone: '1234567890',
      telephone: '1234567891',
      id: 1
    }];
    for (let i = 0; i < staffs.length; i++) {
      await ctx.stub.putPrivateData(collection, `Staff${i + 1}`, Buffer.from(JSON.stringify(staffs[i])));
      console.info('Added <-->', staffs[i].curp);
    }
  }

  async createStaff(ctx, staffData) {
    console.info(`### START: Create ${collection} ###`);
    const staff = JSON.parse(staffData.toString());
    await ctx.stub.putPrivateData(collection, staff.id, Buffer.from(staffData));
    console.info(`### END: Create ${collection} ###`);
    return staffData;
  }

  async readStaff(ctx, staffData) {
    console.info(`### START: Read ${collection} ###`);
    const staff = JSON.parse(staffData.toString());
    const staffId = staff.id;
    const staffAsBytes = await ctx.stub.getPrivateData(collection, staffId);
    if (!staffAsBytes || staffAsBytes.length === 0) {
      throw new Error(`${staffId} does not exist`);
    }
    console.info(`### END: Read ${collection} ###`);
    return staffAsBytes.toString();
  }

  async updateStaff(ctx, staffData) {
    console.info(`### START: Update ${collection} ###`);
    const staff = JSON.parse(staffData.toString());
    const {
      prefix,
      specialty,
      specialty_text,
      subSpecialty,
      colleage,
      curp,
      professionalLicense,
      healtPersonalType,
      state,
      cellphone,
      telephone,
      id: staffId
    } = staff;
    const staffAsBytes = await ctx.stub.getPrivateData(collection, staffId);
    if (!staffAsBytes || staffAsBytes.length === 0) {
      throw new Error(`${staffId} does not exist`);
    }
    const oldStaff = JSON.parse(staffAsBytes.toString());
    const updatedStaff = {
      prefix,
      specialty,
      specialty_text,
      subSpecialty,
      colleage,
      curp,
      professionalLicense,
      healtPersonalType,
      state,
      cellphone,
      telephone,
    };
    const newStaff = { ...oldStaff, ...updatedStaff };
    await ctx.stub.putPrivateData(collection, staffId, Buffer.from(JSON.stringify(newStaff)));
    console.info(`### END: Update ${collection} ###`);
    return newStaff;
  }

  async deleteStaff(ctx, staffData) {
    console.info(`### START: Delete ${collection} ###`);
    const staff = JSON.parse(staffData.toString());
    await ctx.stub.deletePrivateData(collection, staff.id);
    console.info(`### END: Delete ${collection} ###`);
    return { deleted: true };
  }

  /**
   * Query staff
   * @param {Context} ctx
   * @param {string} staffData
   */
  async queryStaff(ctx, staffData) {
    console.info(`### START: Query ${collection} ###`);
    const query = staffData.toString();
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

module.exports = institutional_staff;
