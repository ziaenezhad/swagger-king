/**
 * Sets defauilt content type and appends 2 helper methos to the response object
 * for handling jsons/errors simply.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  res.setHeader('Content-Type', req.headers.accept);
  // res.setHeader('Content-Type', 'application/json');
  res.json = (what) => {
    res.end(JSON.stringify(what));
  };
  res.error = (code, details) => {
    res.writeHead(code);
    res.json(details);
  };
  next();
};
