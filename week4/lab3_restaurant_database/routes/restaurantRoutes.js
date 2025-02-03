const express = require('express');
const Restaurant = require("../models/restaurant");
const router = express.Router();

// Get all restaurants
router.get("/restaurants", async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  // Get restaurants by cuisine
  router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const { cuisine } = req.params;
    try {
        const restaurants = await Restaurant.find({ cuisine: cuisine });
        if (restaurants.length === 0) {
            return res.status(404).json({ message: 'No restaurants found for this cuisine' });
        }
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
  
  // Get sorted restaurants by restaurant_id
  router.get("/restaurants", async (req, res) => {
    const sortBy = req.query.sortBy === "DESC" ? -1 : 1;
    try {
      const restaurants = await Restaurant.find({}, "id cuisines name city restaurant_id").sort({ restaurant_id: sortBy });
      res.json(restaurants);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  // Get delicatessen restaurants (not Brooklyn) sorted by name
  router.get("/restaurants/Delicatessen", async (req, res) => {
    try {
      const restaurants = await Restaurant.find({
        cuisine: "Delicatessen",    
        city: { $ne: "Brooklyn" }  // Exclude Brooklyn
      })
      .sort({ name: 1 })           
      .select("cuisine name city"); 
  
      // If no restaurants are found
      if (restaurants.length === 0) {
        return res.status(404).json({ message: 'No Delicatessen restaurants found (excluding Brooklyn).' });
      }
  
      res.json(restaurants);       
    } catch (err) {
      res.status(500).send(err.message); 
    }
  });
  
  module.exports = router;