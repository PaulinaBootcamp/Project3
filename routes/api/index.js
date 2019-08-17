const router = require("express").Router();
const bookRoutes = require("./books");
const unitsRoutes = require("./units");
// Book routes
router.use("/books", bookRoutes);
router.use("/units", unitsRoutes);

module.exports = router;
