const CFG = require("./config/config");
const app = require("./app");
const express = require("express");

app.use(express.json());

const connectToMongo = require('./config/db');

connectToMongo();

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Assingment 1 Backend is Running!');
});

// Start the server
app.listen(CFG.PORT, () => {
    console.log(`Server is running on http://localhost:${CFG.PORT}`);
});
