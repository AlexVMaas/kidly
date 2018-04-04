const router = require("express").Router();
const providerRoutes = require("./provider");
const userRoutes = require("./user");
const stripeRoutes = require("./stripe");

router.use("/provider", providerRoutes);
router.use("/user", userRoutes);
router.use("/stripe", stripeRoutes);

module.exports = router;

