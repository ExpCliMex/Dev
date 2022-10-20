/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const institutional_user = require('./lib/institutional_user');
const institutional_staff = require('./lib/institutional_staff');
const intitutional_institution = require('./lib/institutional_institution');
const institutional_ConstantsOptions = require('./lib/institutional_ConstantsOptions');
const institutional_Patient = require('./lib/institutional_Patient');
const institutional_Practitioner = require('./lib/institutional_Practitioner');

module.exports.institutional_user = institutional_user;
module.exports.institutional_staff = institutional_staff;
module.exports.intitutional_institution = intitutional_institution;
module.exports.institutional_ConstantsOptions = institutional_ConstantsOptions;
module.exports.institutional_Patient = institutional_Patient;
module.exports.institutional_Practitioner = institutional_Practitioner;

module.exports.contracts = [
  institutional_user,
  institutional_staff,
  intitutional_institution,
  institutional_ConstantsOptions,
  institutional_Patient,
  institutional_Practitioner,
];
