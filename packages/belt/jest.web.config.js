/* eslint-disable @typescript-eslint/no-var-requires */
const configurator = require('../../.build/jest.web.configurator');

module.exports = configurator({
  directory: __dirname,
  testRegex: '(/__tests__/browser.*|\\.spec)\\.(ts|js)$',
});
