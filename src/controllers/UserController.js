// const UserService = require("../services/User.service"); // no need to import here. use as constructor parameter
// register => config/di-register.js

class UserController {

    constructor({ UserService }) {

        this.UserService = UserService;

        this.create = this.create.bind(this);
    }

    async create(req, res) {
      try {
          const { name, email, mobile } = req.body;
          const result = await this.UserService.create(name, email, mobile);
          res.send('user created');
      }catch (e) {
          res.send(e.message);
      }
    }
}

module.exports = UserController;
