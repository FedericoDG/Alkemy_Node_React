const { response } = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res = response, next) => {
  try {
    jwt.verify(req.token, process.env.SECRET);
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'Token inválido.'
    });
  }
};

module.exports = verifyToken;