const router = require("express").Router();
const stripeController = require("../../controllers/stripeController");

// Matches with "/api/provider"
router.route("/")
  .post(stripeController);



module.exports = router;


