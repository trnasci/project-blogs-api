const { decodeToken } = require('../utils/JWT');

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

 const authUser = decodeToken(authorization);

 if (!authUser) {
  return res.status(401).json({ message: 'Expired or invalid token' });
 }

 req.body.user = authUser;

 return next();
};

module.exports = {
    validateJWT,
};