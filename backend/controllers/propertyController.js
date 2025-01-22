const { fetchBuyProperties } = require("../models/propertyModel");
const { fetchRentProperties } = require("../models/propertyModel");
exports.getPropertiesForSale = (req, res) => {
  fetchBuyProperties((err, results) => {
    if (err) {
      console.error("Error fetching properties:", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json(results);
  });
};
// Fetch properties for rent
exports.getPropertiesForRent = (req, res) => {
  fetchRentProperties((err, results) => {
    if (err) {
      console.error("Error fetching properties:", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(200).json(results);
  });
};
