const dataBase = require('../database/connection');

const deleteInDB = (id) => {
  const query = "DELETE FROM operations WHERE id_operation = ?";
  return new Promise((resolve, reject) => {
    dataBase.query(query, [id], (error, operation) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(operation);
      }
    });
  });
};

module.exports = deleteInDB;