const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../config/DBConfig");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.usersPath = "/api/users";
    this.menusPath = "/api/menus";
    this.ordersPath = "/api/orders";
    this.searchPath = "/api/search";
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
    this.app.use(this.usersPath, require("../routes/UserRoute"));
    this.app.use(this.menusPath, require("../routes/MenuRoute"));
    this.app.use(this.ordersPath, require("../routes/OrderRoute"));
    this.app.use(this.searchPath, require("../routes/SearchRoute"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port ", this.port);
    });
  }
}

module.exports = Server;