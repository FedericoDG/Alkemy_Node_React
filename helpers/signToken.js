const jwt = require('jsonwebtoken');

const signToken = (user) => {
  return jwt.sign(user, process.env.SECRET);
};

module.exports = signToken;