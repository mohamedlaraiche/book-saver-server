const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./databases/db");
const router = require("./routes/routes");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/books", router);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server connected on port ${PORT}`);
});
