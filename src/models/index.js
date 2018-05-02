const mongoose = require('mongoose');
const swaggerMongoose = require('swagger-mongoose');
const _ = require('lodash');
const apiSource = require('../helpers/swagger-loader').json;
const models = require('require-dir')();
const configs = require('../configs');

mongoose.Promise = global.Promise;

try {
  // Creating Schemas based on swagger document
  module.exports.schemas = swaggerMongoose.compile(apiSource).schemas;
} catch (error) {
  throw new Error('loading models from swagger failed. is the syntax right?');
}
module.exports.models = {};
module.exports.initialize = async () => {
  console.log('Connecting to MongoDB ...');
  const database = await mongoose.connect(configs.database.mongodb);

  // applying schemas
  _.forEach(
    models,
    (model, key) => _.isFunction(model.hooks) && model.hooks(module.exports.schemas[key]),
  );
  // creating models
  _.forEach(module.exports.schemas, (schema, key) => {
    module.exports.models[key] = mongoose.model(key, schema);
  });
  // Initializing models extra features
  _.forEach(
    models,
    (model, key) => _.isFunction(model.statics) && model.statics(module.exports.models[key]),
  );
  console.log(`Connected to MongoDB @[${database.connection.host}].`);
  return database;
};
