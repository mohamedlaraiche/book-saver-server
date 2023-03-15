const mongoose = require("mongoose");
const DBLINK = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DBLINK);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
