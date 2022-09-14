const express = require("express");
const { gameController } = require("../../controllers");
const auth = require('../../middleware/auth.middleware');
const router = express.Router();

router.route("/").get(auth(), gameController.getMatches);
router.route("/init").get(auth(), gameController.initMatches);

module.exports = router;