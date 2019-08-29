const router = require("express").Router();
const essayController = require("../../controllers/essayController");

// Matches with "/api/units"
router.route("/")
  .get(essayController.findAll)
  .post(essayController.create);

// Matches with "/api/units/:id"
router
  .route("/:id")
  .get(essayController.findById)
  .put(essayController.update)
  .delete(essayController.remove);

module.exports = router;
