const { response } = require('express');

const dataBase = require('../database/connection');

const middlewareOperations = (req, res = response, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Debe enviar un token.'
    });
  }
  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: 'Debe enviar un token válido.'
    });
  }
  req.token = token;
  next();
};

module.exports = middlewareOperations;