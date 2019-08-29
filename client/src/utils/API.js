import axios from "axios";

export default {
  // Gets all units
  getUnits: function () {
    return axios.get("/api/units");
  },
  // Gets the unit with the given id
  getUnit: function (id) {
    return axios.get("/api/units/" + id);
  },
  // Deletes the unit with the given id
  deleteUnit: function (id) {
    return axios.delete("/api/units/" + id);
  },
  // Edits the unit with the given id
  updateUnit: function (unit) {
    return axios.put("/api/units/" + unit.id, unit);
  },
  // Saves a unit to the database
  saveUnit: function (unitData) {
    return axios.post("/api/units", unitData);
  },

  // Gets all flashacrds
  getFlashcards: function () {
    return axios.get("/api/flashcard");
  },
  // Gets the unit with the given id
  getFlashcard: function (id) {
    return axios.get("/api/flashcard/" + id);
  },
  // Deletes the unit with the given id
  deleteFLashcard: function (id) {
    return axios.delete("/api/flashcard/" + id);
  },
  // Edits the unit with the given id
  updateFlashcard: function (flashcard) {
    return axios.put("/api/flashcard/" + flashcard.id, flashcard);
  },
  // Saves a unit to the database
  saveFlashcard: function (flashcardData) {
    return axios.post("/api/flashcard", flashcardData);
  },




  authUser: function (email, password) {
    return axios.post("/api/user/auth", { email, password });
  }
};
