const dataBase = require('../database/connection');

const getOperationsByType = (id, type) => {
  const query = 'SELECT id_operation, type, category, DATE_FORMAT(date, "%Y-%m-%d") AS date, description, amount FROM operations WHERE id_user = ? AND type = ? ORDER BY id_operation DESC;';
  return new Promise((resolve, reject) => {
    dataBase.query(query, [id, type], (error, response) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(response);
      }
    });
  });
};

module.exports = getOperationsByType;