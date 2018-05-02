const swaggerMiddlewares = require('./swagger');
const errorHandler = require('./error-handler');
const headers = require('./headers');
const models = require('./models');
// const configs = require('./configs');

module.exports.initialize = async (app) => {
  console.log('Initializeing Middlewares ...');
  app.use(headers);
  app.use(models);
  await swaggerMiddlewares.initialize(app);
  app.use(errorHandler);
  console.log('Middlewares initialized.');
};
