const router = require("express").Router();

const unitsRoutes = require("./units");
const userRoutes = require("./user");

//Routes
router.use("/units", unitsRoutes);
router.use("/user", userRoutes);
module.exports = router;




