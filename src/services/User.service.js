// const User = require("../models/User");
// no need to import, use as a constructor parameter

class UserService {

    constructor({ UserRepository }) {
        this.user = UserRepository;
    }
    // TODO Add DTO here
    async create( name, email, mobile) {
       return this.user.create(name, email, mobile);
    }
}

module.exports = UserService;
