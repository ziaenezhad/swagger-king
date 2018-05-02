/**
 * The Swagger Security middleware is used to authenticate/authorize requests
 * based on the authorization/security definitions and references in your Swagger document(s).
 * https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swagger-security
 */
module.exports = {
  JWT(req, authOrSecDef, token, next) {
    // if token not passed in the header maybe it pased as a param
    const safeToken = token || (req.swagger.params.token ? req.swagger.params.token.value : null);
    console.log(safeToken);
    // TODO: right the logic
    next();
  },
};
