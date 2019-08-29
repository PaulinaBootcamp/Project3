const router = require("express").Router();
const flashcardController = require("../../controllers/flashcardController");

// Matches with "/api/flashcard"
router.route("/")
  .get(flashcardController.findAll)
  .post(flashcardController.create);

// Matches with "/api/flashcard/:id"
router
  .route("/:id")
  .get(flashcardController.findById)
  .put(flashcardController.update)
  .delete(flashcardController.remove);

module.exports = router;
