'use strict';
const { Contract, Context } = require('fabric-contract-api');
const fs = require('fs');

/**
 * Dropdown constants collection
 * @typedef {Object} ConstantOption
 * @property {string} id
 * @property {string} key El valor del atributo "value" de cada option en los selects.
 * @property {string} value El texto en descripción
 * @property {string} description
 * @property {'es' | 'en'} language
 * @property {string} constant_type Género, escolaridad, etc.
 * @property {string} id_father Id del registro de constante asociada
 */

const collection = 'collection_institutional_ConstantsOptions';
const labels_filename = './lib/Etiquetas_EhyaTech.json';

class institutional_ConstantsOptions extends Contract {
  async initLedger (ctx) {
    console.info('Inicializar ledger Constants Options');
    /**
     * @type {ConstantOption[]} constantsOptions
     */
    const rawdata = fs.readFileSync(labels_filename);
    const constantsOptionsData = JSON.parse(rawdata);
    const constantsOptions = [
      {
        id: 'ConstantOption1',
        key: 'M',
        value: 'Masculino',
        description: 'Sexo Masculino',
        language: 'es',
        constant_type: 'sex',
        id_father: ''
      },
      {
        id: 'ConstantOption2',
        key: 'F',
        value: 'Femenino',
        description: 'Sexo Femenino',
        language: 'es',
        constant_type: 'sex',
        id_father: ''
      },
      {
        id: 'ConstantOption3',
        key: 'Yes',
        value: 'Si',
        description: 'Si',
        language: 'es',
        constant_type: 'yes-or-no',
        id_father: ''
      },
      {
        id: 'ConstantOption4',
        key: 'No',
        value: 'No',
        description: 'No',
        language: 'es',
        constant_type: 'yes-or-no',
        id_father: ''
      },
      {
        id: 'ConstantOption5',
        key: 'GNP',
        value: 'GNP',
        description: 'Seguro médico GNP',
        language: 'es',
        constant_type: 'medical_insurance',
        id_father: ''
      },
      {
        id: 'ConstantOption6',
        key: 'Qualitas',
        value: 'GNP',
        description: 'Seguro médico Qualitas',
        language: 'es',
        constant_type: 'medical_insurance',
        id_father: ''
      },
      {
        id: 'ConstantOption7',
        key: '',
        value: 'Selecciona una opción',
        language: 'es',
        constant_type: 'empty_choice',
        id_father: ''
      }

    ];
    for (let i = 0; i < constantsOptionsData.length; i++) {
      const constantOption = constantsOptionsData[i];
      await ctx.stub.putPrivateData(
        collection,
        constantOption.Id,
        Buffer.from(JSON.stringify(constantOption))
      );
      console.info(`Added constant_type: ${constantOption.constant_type}, language ${constantOption.Lenguage}`);
    }
    console.info('Finaliza inicialización ledger');
  }

  async createConstantOption (ctx, constantOptionData) {
    console.info(`### START: Create ${collection} ###`);
    const constantOption = JSON.parse(constantOptionData.toString());
    await ctx.stub.putPrivateData(
      collection,
      constantOption.id,
      Buffer.from(constantOptionData)
    );
    console.info(`### END: Create ${collection} ###`);
    return constantOptionData;
  }

  async readConstantOption (ctx, constantOptionData) {
    console.info(`### START: Read ${collection} ###`);
    const constantOption = JSON.parse(constantOptionData.toString());
    const constantOptionId = constantOption.id;
    const constantOptionAsBytes = await ctx.stub.getPrivateData(collection, constantOptionId);
    if (!constantOptionAsBytes || constantOptionAsBytes.length === 0) {
      throw new Error(`${constantOptionId} does not exist`);
    }
    console.info(`### END: Read ${collection} ###`);
    return constantOptionAsBytes.toString();
  }

  /**
   * Query constantOption
   * @param {Context} ctx
   */
  async readAllConstantOption (ctx) {
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

  async updateConstantOption (ctx, constantOptionData) {
    console.info(`### START: Update ${collection} ###`);
    const constantOption = JSON.parse(constantOptionData.toString());
    const {
      constantOptionname,
      name,
      email,
      password,
      role,
      id: constantOptionId
    } = constantOption;
    console.info(`Type of constantOptionId: ${typeof constantOptionId}`);
    const constantOptionAsBytes = await ctx.stub.getPrivateData(collection, constantOptionId);
    if (!constantOptionAsBytes || constantOptionAsBytes.length === 0) {
      throw new Error(`${constantOptionId} does not exist`);
    }
    const oldconstantOption = JSON.parse(constantOptionAsBytes.toString());
    const updatedconstantOption = {
      constantOptionname,
      name,
      email,
      password,
      role
    };
    const newconstantOption = { ...oldconstantOption, ...updatedconstantOption };
    await ctx.stub.putPrivateData(collection, constantOptionId, Buffer.from(JSON.stringify(newconstantOption)));
    console.info(`### END: Update ${collection} ###`);
    return newconstantOption;
  }

  async deleteconstantOption (ctx, constantOptionData) {
    console.info(`### START: Delete ${collection} ###`);
    const constantOption = JSON.parse(constantOptionData.toString());
    await ctx.stub.deletePrivateData(collection, constantOption.id);
    console.info(`### END: Delete ${collection} ###`);
    return { deleted: true };
  }

  /**
   * Query constantOption
   * @param {Context} ctx
   * @param {string} constantOptionData
   */
  async queryconstantOption (ctx, constantOptionData) {
    console.info(`### START: Query ${collection} ###`);
    const query = constantOptionData.toString();
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

module.exports = institutional_ConstantsOptions;
