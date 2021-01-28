import base from './base';

if (window.ENV) {
  localStorage.setItem('@environment', window.ENV);

  delete window.ENV;
}

const envClient = localStorage.getItem('@environment');
const environments = envClient || 'base';

const env = require('./' + environments).default;

export default {
  ...base,
  ...env,
}
