const express = require("express");
// const UserController = require("../controllers/UserController"); couldn't import directly.

const { container } = require("../config/di-register");

const UserController = container.resolve('UserController');



const router = express.Router();

router.post('/user', UserController.create);

module.exports = router;
