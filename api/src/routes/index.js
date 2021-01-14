const router = require("express").Router();
const ModelRoutes = require("./modelRoutes");

router.use("/models", ModelRoutes);


module.exports = router;