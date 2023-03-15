const mongoose = require("mongoose");
const DBLINK =
  "mongodb+srv://molaraiche:Mern$2023@cluster0.zlvjlom.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(DBLINK);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
