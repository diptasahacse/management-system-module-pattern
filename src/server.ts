import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/explore-mongoose"); //explore-mongoose is the name of the database
    console.log("Database is connected");

    // show listen status after connected database
    // Listen
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect database");
  }
}
main();
