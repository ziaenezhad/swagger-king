module.exports = (hooks, models) => {
  hooks.before('Pets > /pets/{id} > GET > 200 > application/json', async (transaction, done) => {
    const pet = await models.Pet.create({ name: 'Cat' });
    // parse request body from API description
    transaction.request.uri = `/pets/${pet.id}`;
    transaction.fullPath = `/pets/${pet.id}`;
    done();
  });
};
