const express = require("express");
const { userController } = require("../../controllers");
const auth = require('../../middleware/auth.middleware');
const router = express.Router();

router.route("/").get(auth(), userController.getUser);

module.exports = router;