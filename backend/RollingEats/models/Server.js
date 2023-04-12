const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../config/DBConfig");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.connectToDB();
    this.middlewares();
    this.routes();
  }

  // Function that establishes the connection to the DB.
  async connectToDB() {
    await dbConnection();
  }

  // Function that allows CORS to work and 
  // lets the application read JSON format
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.authPath, require("../routes/AuthRoute"));
    this.app.use(this.usuariosPath, require("../routes/MenuRoute"));
    this.app.use(this.usuariosPath, require("../routes/OrderRoute"));
    this.app.use(this.usuariosPath, require("../routes/SearchRoute"));
    this.app.use(this.usuariosPath, require("../routes/UserRoute"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port ", this.port);
    });
  }
}

module.exports = Server;