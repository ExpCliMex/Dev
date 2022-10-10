'use strict';
const { Contract, Context } = require('fabric-contract-api');

const collection = 'collection_institutional_user';
class institutional_user extends Contract {
  async initLedger(ctx) {
    console.info('Inicializar ledger');
    const users = [
      {
        email: 'admin@example.com',
        username: 'admin',
        password: 'strong-and-complicated-password',
        first_name: 'John',
        last_name: 'Doe',
        role: 'admin',
        id: '1'
      },
      {
        email: 'root@example.com',
        username: 'root',
        password: 'another-strong-and-complicated-password',
        first_name: 'Jack',
        last_name: 'Lawrence',
        role: 'root',
        id: '2'
      }
    ];
    for (let i = 0; i < users.length; i++) {
      await ctx.stub.putPrivateData(collection, `User${i + 1}`, Buffer.from(JSON.stringify(users[i])));
      console.info('Added <-->', users[i].first_name);
    }
    console.info('Finaliza inicialización ledger');
  }

  async createUser(ctx, userData) {
    console.info(`### START: Create ${collection} ###`);
    const user = JSON.parse(userData.toString());
    await ctx.stub.putPrivateData(collection, user.id, Buffer.from(userData));
    console.info(`### END: Create ${collection} ###`);
    return userData;
  }

  async readUser(ctx, userData) {
    console.info(`### START: Read ${collection} ###`);
    const user = JSON.parse(userData.toString());
    const userId = user.id;
    const userAsBytes = await ctx.stub.getPrivateData(collection, userId);
    if (!userAsBytes || userAsBytes.length === 0) {
      throw new Error(`${userId} does not exist`);
    }
    console.info(`### END: Read ${collection} ###`);
    return userAsBytes.toString();
  }

  async updateUser(ctx, userData) {
    console.info(`### START: Update ${collection} ###`);
    const user = JSON.parse(userData.toString());
    const { username, name, email, password, role, id: userId } = user;
    console.info(`Type of userId: ${typeof userId}`);
    const userAsBytes = await ctx.stub.getPrivateData(collection, userId);
    if (!userAsBytes || userAsBytes.length === 0) {
      throw new Error(`${userId} does not exist`);
    }
    const oldUser = JSON.parse(userAsBytes.toString());
    const updatedUser = { username, name, email, password, role };
    const newUser = { ...oldUser, ...updatedUser };
    await ctx.stub.putPrivateData(collection, userId, Buffer.from(JSON.stringify(newUser)));
    console.info(`### END: Update ${collection} ###`);
    return newUser;
  }

  async deleteUser(ctx, userData) {
    console.info(`### START: Delete ${collection} ###`);
    const user = JSON.parse(userData.toString());
    await ctx.stub.deletePrivateData(collection, user.id);
    console.info(`### END: Delete ${collection} ###`);
    return { deleted: true };
  }

  /**
   * Query user
   * @param {Context} ctx
   * @param {string} userData
   */
  async queryUser(ctx, userData) {
    console.info(`### START: Query ${collection} ###`);
    const query = userData.toString();
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

module.exports = institutional_user;
