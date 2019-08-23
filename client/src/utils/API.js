import axios from "axios";

export default {
   // Gets all units
  getUnits: function () {
    return axios.get("/api/units");
  },
  // Gets the book with the given id
  getUnit: function (id) {
    return axios.get("/api/units/" + id);
  },
  // Deletes the book with the given id
  deleteUnit: function (id) {
    return axios.delete("/api/units/" + id);
  },
  // Saves a book to the database
  saveUnit: function (unitData) {
    return axios.post("/api/units", unitData);
  },
 authUser: function(email, password) {
    return axios.post("/api/user/auth", { email, password });
  }
};
