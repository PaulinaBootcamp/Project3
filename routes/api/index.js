const router = require("express").Router();

const unitsRoutes = require("./units");
const flashcardRoutes = require("./flashcard");

const userRoutes = require("./user");
const essayRoutes = require("./essay");

//Routes
router.use("/units", unitsRoutes);
router.use("/user", userRoutes);
router.use("/flashcard", flashcardRoutes);

router.use("/essay", essayRoutes);
module.exports = router;




