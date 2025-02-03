const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const Data = require('./seedData.json');
const Restaurant = require('./models/restaurant');
const restaurantRoutes = require("./routes/restaurantRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection to Atlas:
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB Atlas');
    // Clear existing database
    await Restaurant.deleteMany({});
    console.log('Existing data cleared');
    // Insert data into database
    await Restaurant.insertMany(Data);
    console.log('Data inserted into the database');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  });

// Routes
app.use("/", restaurantRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
