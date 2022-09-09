const express = require("express");
const { gameController } = require("../../controllers");
const router = express.Router();

router.route("/").get(gameController.getMatches);
router.route("/init").get(gameController.initMatches);

module.exports = router;