const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
    flashcardName: { type: String, required: true },
    flashcardImage: { type: String, required: true }


});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

module.exports = Flashcard;
