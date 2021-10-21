const dataBase = require('../database/connection');

const getAllOperations = (id) => {
  const query = 'SELECT id_operation, type, category, DATE_FORMAT(date, "%Y-%m-%d") AS date, description, amount FROM operations WHERE id_user = ?;';
  return new Promise((resolve, reject) => {
    dataBase.query(query, [id], (error, response) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(response);
      }
    });
  });
};

module.exports = getAllOperations;