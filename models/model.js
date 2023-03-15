const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  detials: {
    type: String,
    required: false,
  },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
