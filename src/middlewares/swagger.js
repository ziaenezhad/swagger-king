const swaggerTools = require('swagger-tools');
const apiSource = require('../helpers/swagger-loader').json;
const configs = require('../configs');
const security = require('../security');

/**
 * initializes the swagger tools
 * @param {string} apiSource
 * @returns {Promise<{}>}
 */
async function initializeSwagger() {
  return new Promise(resolve => swaggerTools.initializeMiddleware(apiSource, resolve));
}

module.exports.initialize = async (app) => {
  const middlewares = await initializeSwagger();
  // Interpret Swagger resources and attach metadata to request.
  // must be first in swagger-tools middleware chain
  app.use(middlewares.swaggerMetadata());
  // The Swagger Security middleware is used to
  // authenticate/authorize requests based on your Swagger document(s).
  app.use(middlewares.swaggerSecurity(security));
  // Validate Swagger requests
  app.use(middlewares.swaggerValidator(configs.swagger.validator));
  // Route validated requests to appropriate controller
  app.use(middlewares.swaggerRouter(configs.swagger.router));
  // Serve the Swagger documents and Swagger UI
  app.use(middlewares.swaggerUi());
};
