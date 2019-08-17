import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },


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







};
