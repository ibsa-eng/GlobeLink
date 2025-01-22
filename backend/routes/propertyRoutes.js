const express = require("express");
const { getPropertiesForSale } = require("../controllers/propertyController");
const { getPropertiesForRent } = require("../controllers/propertyController");
const router = express.Router();

// Route to get properties for sale
router.get("/buy", getPropertiesForSale);

// Route to get properties for rent
router.get("/rent", getPropertiesForRent);
// Backend Route for Property Details
app.get("/buy/:id", (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM properties2 WHERE id = ?";
  db.query(query, [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.json(results[0]);
  });
});

module.exports = router;
