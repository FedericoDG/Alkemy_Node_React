const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dataBase = require('../database/connection');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.apiPath = '/api';

    this.middlewares();
    this.routes();
    this.connection();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static('public'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes() {
    this.app.use(this.apiPath, require('../routes/api.routes.js'));
  }
  connection() {
    dataBase.connect(error => {
      if (error) {
        throw new Error(error);
      }
      console.log(`Connected to database: ${process.env.DB_NAME}`);
    });
  }
  listen() {
    this.app.listen(this.PORT, () => {
      console.clear();
      console.log(`API live on port: ${this.PORT}`);
    });
  }
}

module.exports = Server;