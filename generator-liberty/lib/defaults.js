/*
 * © Copyright IBM Corp. 2017, 2018
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//module for storing default configuration values

'use strict';

const defaultModule = require('ibm-java-codegen-common').defaults;

const DEFAULTS = {
  technologies: {
    desc: 'Technologies to configure when using the prompt:liberty promptType',
    type: (value) => {
      return Array.isArray(value) ? value : value.split(",");
    },
    default: ['rest']
  }
};

module.exports = class extends defaultModule {
  constructor() {
    super(DEFAULTS);
  }
}