const router = require("express").Router();

const UserController = require("../../controllers/userController");

const userController = new UserController();

router.route("/")
    .post(userController.create);

router.route("/auth")
    .post(userController.authWithPassword);

module.exports = router;
