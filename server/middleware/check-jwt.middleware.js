const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const dotenv = require("dotenv");

dotenv.config();
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
  getToken: function fromHeaderOrQuerystring(req) {
    console.log('getToken');
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      console.log('Found token in header');
      console.log(req.headers.authorization.split(" ")[1]);
      return req.headers.authorization.split(" ")[1];
    } else if (req.query && req.query.token) {
      console.log('Found token in query');
      return req.query.token;
    }
    console.log('Found no token');
    return null;
  }
});

module.exports = {
  checkJwt,
};