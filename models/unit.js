const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  title: { type: String, required: true },
  section1: { type: String, required: true },
  section2: String,
  section3: String,
  date: { type: Date, default: Date.now }
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
