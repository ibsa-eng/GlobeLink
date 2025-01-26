// const express = require("express");
// const mysql = require("mysql2");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Create MySQL connection pool
// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
// const cors = require("cors");
// app.use(cors());

// // Test database connection
// db.getConnection((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL:", err.message);
//   } else {
//     console.log("Connected to MySQL database");
//   }
// });

// // API endpoint to fetch properties
// app.get("/api/properties", (req, res) => {
//   const query = "SELECT * FROM properties";
//   db.query(query, (err, results) => {
//     if (err) {
//       res.status(500).json({ message: "Server error", error: err });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// const express = require("express");
// const app = express();

// app.get("/api/property/:id", (req, res) => {
//   const propertyId = req.params.id;
//   // Fetch property details from the database
//   res.json({
//     id: propertyId,
//     title: "Beautiful House",
//     price: "$500,000",
//     location: "Los Angeles, CA",
//     beds: 4,
//     baths: 2,
//     garage: 1,
//     size: "1200 m²",
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// const express = require("express");
// const mysql = require("mysql2");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MySQL Database Connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "real_admin",
//   password: process.env.DB_PASSWORD || "12345678",
//   database: process.env.DB_NAME || "realstate",
// });

// // Connect to Database
// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL database:", err.message);
//     return;
//   }
//   console.log("Connected to MySQL database.");
// });

// // Route to Fetch Buy Properties
// app.get("/buy", (req, res) => {
//   const query = "SELECT * FROM properties2 WHERE category = 'BUY'";
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error("Error fetching properties:", err.message);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     res.status(200).json(results);
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "real_admin",
  password: process.env.DB_PASSWORD || "12345678",
  database: process.env.DB_NAME || "realstate",
});

// Connect to Database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err.message);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Route to Fetch Buy Properties with Pagination and Search
app.get("/buy", (req, res) => {
  const { page = 1, query = "" } = req.query; // Get `page` and `query` from query parameters
  const limit = 10; // Number of properties per page
  const offset = (page - 1) * limit;

  // Query to count total matching properties
  const totalQuery = `SELECT COUNT(*) AS total FROM properties2 WHERE category = 'BUY' AND location LIKE ?`;

  // Query to fetch paginated properties
  const dataQuery = `SELECT * FROM properties2 WHERE category = 'BUY' AND location LIKE ? LIMIT ? OFFSET ?`;

  const searchTerm = `%${query}%`; // Use wildcard for partial matching

  // Get total count of matching properties
  db.query(totalQuery, [searchTerm], (err, totalResults) => {
    if (err) {
      console.error("Error fetching total properties:", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const total = totalResults[0].total; // Total number of matching properties
    const totalPages = Math.ceil(total / limit); // Calculate total pages

    // Fetch paginated data
    db.query(dataQuery, [searchTerm, limit, offset], (err, results) => {
      if (err) {
        console.error("Error fetching properties:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Send response with properties and pagination details
      res.status(200).json({
        properties: results,
        totalPages,
      });
    });
  });
});
app.post("/chat", (req, res) => {
  const { message } = req.body;

  // Basic message-response logic
  let reply;
  if (message.toLowerCase().includes("dubai")) {
    reply = "Yes, we have properties in Dubai!";
  } else if (message.toLowerCase().includes("addis ababa")) {
    reply = "Yes, we have properties in Addis Ababa!";
  } else {
    reply = "Sorry, I didn't understand. Could you please clarify?";
  }

  res.json({ reply });
});

// Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to start the server:", error);
}
