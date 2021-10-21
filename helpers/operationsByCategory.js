const dataBase = require('../database/connection');

const getOperationsByCategory = (id, category) => {
  const query = 'SELECT id_operation, type, category, DATE_FORMAT(date, "%Y-%m-%d") AS date, description, amount FROM operations WHERE id_user = ? AND category = ?;';
  return new Promise((resolve, reject) => {
    dataBase.query(query, [id, category], (error, response) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(response);
      }
    });
  });
};

module.exports = getOperationsByCategory;