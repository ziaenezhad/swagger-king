const fs = require('fs');
const jsyaml = require('js-yaml');
const configs = require('../configs');

module.exports.fileContent = fs.readFileSync(configs.swagger.source, 'utf8');
module.exports.json = jsyaml.safeLoad(module.exports.fileContent);
