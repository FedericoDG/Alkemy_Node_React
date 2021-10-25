const { response } = require('express');
const bcrypt = require('bcrypt');

const dataBase = require('../database/connection');

const middlewareLogin = (req, res = response, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Todos los campos son requeridos: email, password.'
    });
  }
  const query = 'SELECT * FROM users WHERE email = ?';
  dataBase.query(query, [email], (error, response) => {
    if (error) {
      throw new Error(error);
    } else {
      if (response.length < 1) {
        return res.status(401).json({
          message: 'Usuario inexistente.'
        });
      }
      if (!bcrypt.compareSync(password, response[0].password)) {
        return res.status(401).json({
          message: 'Contraseña inválida.'
        });
      }
      req.user = {
        user_id: response[0].id_user,
        email: response[0].email,
      };
      next();
    }
  });
};

module.exports = middlewareLogin;