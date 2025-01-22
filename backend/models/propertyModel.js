const db = require("../config/db");

exports.fetchBuyProperties = (callback) => {
  const query = "SELECT * FROM properties2 WHERE type = 'BUY'";
  db.query(query, callback);
};
// Fetch properties for rent
exports.fetchRentProperties = (callback) => {
  const query = "SELECT * FROM properties2 WHERE type = 'RENT'";
  db.query(query, callback);
};
