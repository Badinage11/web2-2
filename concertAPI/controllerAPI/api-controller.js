// Import the database connection module
var dbcon = require("../crowdfunding_db");
// Get a connection from the database connection module
var connection = dbcon.getconnection();
connection.connect();

// Import the Express framework
var express = require('express');
var router = express.Router();

//Get all active fundraising activities, including categories
router.get("/fundraisers", (req, res) => {
  const query = `
    SELECT f.*, c.NAME AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.ACTIVE = 1
  `;
  connection.query(query, (err, records) => {
    if (err) {
      console.error("Error retrieving data:", err);
      res.status(500).send("Error retrieving data");
    } else {
      res.send(records);
    }
  });
});

// Route to get all categories
router.get("/categories", (req, res) => {
  const query = 'SELECT * FROM CATEGORY';
  // Execute the SQL query
  connection.query(query, (err, records) => {
    if (err) {
      console.error("Error retrieving data:", err);
      res.status(500).send("Error retrieving data");
    } else {
      res.send(records);
    }
  });
});


// Search for fundraising activities based on criteria
router.get("/search", (req, res) => {
  const { CATEGORY, CITY, ORGANIZER } = req.query;
  let sql = "SELECT f.*, c.NAME AS category_name FROM FUNDRAISER f JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID WHERE f.ACTIVE = 1";
  let params = [];

  // Add conditions based on query parameters
  if (CATEGORY || CITY || ORGANIZER) {
    if (CATEGORY) {
      sql += " AND c.CATEGORY_ID = ?";
      params.push(CATEGORY);
    }
    if (CITY) {
      sql += " AND f.CITY LIKE ?";
      params.push("%" + CITY + "%");
    }
    if (ORGANIZER) {
      sql += " AND f.ORGANIZER LIKE ?";
      params.push("%" + ORGANIZER + "%");
    }
  }

  // Execute the SQL query with parameters
  connection.query(sql, params, (err, results) => {
    if (err) {
      console.log("Error occurred during query:", err);
      res.status(500).send("Error occurred during query");
    } else {
      res.send(results);
    }
  });
});

// Route to get fundraiser details by ID
router.get("/fundraiser/:id", (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT f.*, c.NAME AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.FUNDRAISER_ID = ?
  `;

  // Execute the SQL query with the fundraiser ID
  connection.query(query, [id], (err, records) => {
    if (err) {
      console.error("Error retrieving data:", err);
      res.status(500).send("Error retrieving data");
    } else {
      res.send(records);
    }
  });
});

// Export the router to be used in other parts of the application
module.exports = router;
