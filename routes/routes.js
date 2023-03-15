const router = require("express").Router();
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/controllers");

router.get("/", getBooks);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
