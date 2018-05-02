const Models = require('../models').models;

module.exports.getPets = async (req, res, next) => {
  const result = await Models.Pet.find({});
  res.json(result);
};

module.exports.getPetById = async (req, res, next) => {
  const result = await Models.Pet.findById(req.swagger.params.id.value);
  res.json(result);
};
