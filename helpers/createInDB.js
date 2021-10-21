const dataBase = require('../database/connection');

const insertInDB = (data) => {
  const query = 'INSERT INTO operations SET ?';
  return new Promise((resolve, reject) => {
    dataBase.query(query, [data], (error, operation) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(operation);
      }
    });
  });
};

module.exports = insertInDB;