module.exports = (error, req, res, next) => {
  const responce = {
    code: 400,
    body: error,
  };
  switch (error.code) {
    case 'SCHEMA_VALIDATION_FAILED':
      // Validation fails
      responce.body = error.results.errors;
      break;
    case 11000:
      // Key duplication
      responce.code = 409;
      responce.body = { message: error.errmsg };
      break;
    default:
      break;
  }
  res.writeHead(responce.code);
  res.json(responce.body);
  next();
};
