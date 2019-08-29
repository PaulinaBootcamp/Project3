const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const essaySchema = new Schema({
    essayImage: { type: String, required: false },
    essayInstructions: { type: String, required: true },
    essayAssigned: { type: Boolean, default: false },
    essayGraded: { type: Boolean, default: false },
    essayDue: { type: Date, required: false }
});

const Essay = mongoose.model("Essay", essaySchema);

module.exports = Essay;
