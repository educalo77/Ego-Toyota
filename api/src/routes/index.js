const router = require("express").Router();
const ModelRoutes = require("./modelRoutes");
const DetailRoutes = require("./detailRoutes");
const OtherRoutes = require("./otherRoutes");

router.use("/models", ModelRoutes);
router.use("/details", DetailRoutes);
router.use("/otherdetails", OtherRoutes);

module.exports = router;