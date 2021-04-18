const awilix = require("awilix");

const UserService = require("../services/User.service");
const UserController = require("../controllers/UserController");
const UserRepository = require("../repositories/UserRepository");
const User = require("../models/User");
const mongoose = require("../config/db");

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

const setup = () => {
    container.register({
        // register your services here
        'UserService': awilix.asClass(UserService),

        // register your controllers here
        'UserController': awilix.asClass(UserController),

        // register repositories here
        'UserRepository': awilix.asClass(UserRepository),

        // register models
        'User': awilix.asValue(User),

        // register configs here
        'mongoose': awilix.asValue(mongoose),

    });
}

module.exports = {
    container,
    setup
};
