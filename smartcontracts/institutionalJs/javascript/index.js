/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const institutional_user = require('./lib/institutional_user');
const institutional_staff = require('./lib/institutional_staff');
const intitutional_institution = require('./lib/institutional_institution');

module.exports.institutional_user = institutional_user;
module.exports.institutional_staff = institutional_staff;
module.exports.intitutional_institution = intitutional_institution;
module.exports.contracts = [institutional_user, institutional_staff, intitutional_institution];
