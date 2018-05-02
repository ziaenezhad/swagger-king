const path = require('path');

module.exports = {
  swagger: {
    source: path.join(path.dirname(__dirname), './swagger/api.merged.yaml'),
    router: {
      swaggerUi: './swagger.json',
      controllers: path.join(path.dirname(__dirname), './src/controllers'),
      useStubs: process.env.NODE_ENV === 'development', // Conditionally turn on stubs (mock mode)
    },
    validator: {
      // validateResponse: true
    },
  },
  database: {
    mongodb: process.env.MONGO_URL,
  },
};
