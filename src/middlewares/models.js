const Models = require('../models');
/**
 * Appents list of mongoos models to the request object
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  req.models = Models.models;
  next();
};
