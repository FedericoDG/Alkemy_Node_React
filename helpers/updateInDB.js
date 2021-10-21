const dataBase = require('../database/connection');

const updateInDB = (id, data) => {
  const query = 'UPDATE operations SET ? WHERE id_operation = ?';
  return new Promise((resolve, reject) => {
    dataBase.query(query, [data, id], (error, operation) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(operation);
      }
    });
  });
};

module.exports = updateInDB;