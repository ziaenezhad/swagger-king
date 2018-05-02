const hooks = require('hooks');
const Models = require('../src/models');
const Tests = require('require-dir')('./controllers/');

// Setup database connection before Dredd starts testing
hooks.beforeAll(async (transactions, done) => {
  const database = await Models.initialize();
  hooks.connection = database.connection;
  // Registering hooks inside ./controllers
  Object.keys(Tests).forEach(file => Tests[file](hooks, Models.models));
  done();
});

// Close database connection after Dredd finishes testing
hooks.afterAll(async (transactions, done) => {
  await hooks.connection.close();
  done();
});

// Before each test let's fix the media type - unfortunately current support
// of Swagger in Dredd works only for application/json as of now
hooks.beforeEach((transaction, done) => {
  // let contentType;

  /* if (transaction.expected.statusCode === '204') {
    transaction.request.headers.Accept = 'text/plain';
    delete transaction.expected.headers['Content-Type'];
  } else {
    transaction.request.headers.Accept = 'application/hal+json';
    transaction.expected.headers['Content-Type'] = 'application/hal+json';
  } */
  done();
});

// After each test clear contents of the database (we want isolated tests)
hooks.afterEach(async (transaction, done) => {
  const collections = await hooks.connection.db.collections();
  await Promise.all(Object.keys(collections).map(key => collections[key].remove()));
  done();
});
