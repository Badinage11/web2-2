var dbcon = require("../crowdfunding_db");

var connection = dbcon.getconnection();

connection.connect();

var express = require('express');

var router = express.Router();

// router.get("/", (req, res)=>{
// 	connection.query("select * from FUNDRAISER", (err, records,fields)=> {
// 		 if (err){
// 			 console.error("Error while retrieve the data");
// 		 }else{
// 			 res.send(records);
// 		 }
// 	})
// })

// router.get("/category", (req, res)=>{
// 	connection.query("select * from CATEGORY", (err, records,fields)=> {
// 		 if (err){
// 			 console.error("Error while retrieve the data");
// 		 }else{
// 			 res.send(records);
// 		 }
// 	})
// })


//Get all active fundraising activities, including categories
router.get("/fundraisers", (req, res) => {
	const query = `
	  SELECT f.*, c.NAME AS category_name
	  FROM FUNDRAISER f
	  JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
	  WHERE f.ACTIVE = 1
	`;
	
	connection.query(query, (err, records, fields) => {
	  if (err) {
		console.error("Error while retrieving the data:", err);
		
	  } else {
		res.send(records);
	  }
	});
  });


  
  //Get all categories:
  router.get("/categories", (req, res) => {
	const query = 'SELECT * FROM CATEGORY';
	
	connection.query(query, (err, records, fields) => {
	  if (err) {
		console.error("Error while retrieving the data:", err);
		
	  } else {
		res.send(records);
	  }
	});
  });
  

  //Search for fundraising activities that meet relevant criteria
  router.get("/search", (req, res) => {
	const { CATEGORY, CITY, ORGANIZER } = req.query;
	let sql = "SELECT f.*, c.NAME AS category_name FROM FUNDRAISER f JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID WHERE f.ACTIVE = 1";
	let params = [];
  
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
  
	connection.query(sql, params, (err, results) => {
	  if (err) {
		console.log("Query error occurred:", err);
		
	  } else {
		res.json(results);
	  }
	});
  });
  
  
  
  
  
  


module.exports = router;
