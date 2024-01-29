const mongoose = require("mongoose");
const databaseConnection = mongoose.connect(
  "mongodb://127.0.0.1:27017/task"
);

// Get the default connection
const db = mongoose.connection;

// Event handlers for the connection
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});


module.exports = databaseConnection;