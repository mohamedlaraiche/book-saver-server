const Books = require("../models/model");

const getBooks = (req, res) => {
  Books.find()
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(400).json({ message: err.message }));
};

const createBook = (req, res) => {
  Books.create(req.body)
    .then((data) => res.status(201).json({ data }))
    .catch((err) => res.status(404).json({ message: err.message }));
};

const updateBook = (req, res) => {
  Books.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(400).json({ message: err.message }));
};

const deleteBook = (req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json({ data }))
    .catch((err) => res.status(404).json({ message: err.message }));
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
