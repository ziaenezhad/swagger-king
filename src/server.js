require('dotenv').config();
const http = require('http');
const app = require('express')();
const models = require('./models');
const middlewares = require('./middlewares');

const PORT = process.env.PORT || 8080;

(async () => {
  const database = await models.initialize();
  await middlewares.initialize(app);
  http.createServer(app).listen(PORT, () => {
    console.log(`Listening on [http://localhost:${PORT}]`);
    console.log(`Swagger-ui is available on http://localhost:${PORT}/docs`);
  });
})();
module.exports = app;
