const { response } = require('express');

const middlewarePostOneOperation = (req, res = response, next) => {
  const { type, category, date, description, amount } = req.body;
  if (!type || !category || !date || !description || !amount) {
    return res.status(400).json({
      message: 'Todos los campos son requeridos: type, category, date, description, amount.'
    });
  }
  req.operation = { type, category, date, description, amount };
  next();
};

module.exports = middlewarePostOneOperation;