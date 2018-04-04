const router = require("express").Router();
const providerController = require("../../controllers/providerController");

// Matches with "/api/provider"
router.route("/")
  .get(providerController.findAll);

// Matches with "/api/provider/:id"
router
  .route("/:id")
  .get(providerController.findById);

module.exports = router;


