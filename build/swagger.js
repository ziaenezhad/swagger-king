const resolve = require('json-refs').resolveRefs;
const YAML = require('js-yaml');
const fs = require('fs');

const apis = fs
  .readdirSync('./swagger')
  .filter(file => file.match(/.*\.yaml/gi) && !file.match(/.*\.merged\.yaml/gi));
const resolveOptions = {
  filter: ['relative', 'remote'],
  loaderOptions: { processContent: (res, callback) => callback(null, YAML.safeLoad(res.text)) },
};
apis.forEach(async (api) => {
  const source = YAML.safeLoad(fs.readFileSync(`./swagger/${api}`).toString());
  const results = await resolve(source, resolveOptions);
  const mergedContent = YAML.safeDump(results.resolved);
  fs.writeFileSync(`./swagger/${api.split('.yaml')[0]}.merged.yaml`, mergedContent);
});
