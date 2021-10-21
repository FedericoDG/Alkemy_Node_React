const jwt = require('jsonwebtoken');

const decodeToken = (token) => {
  return jwt.decode(token, process.env.SECRET).user_id;
};

module.exports = decodeToken;