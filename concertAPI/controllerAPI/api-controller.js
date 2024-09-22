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
		res.status(500).json({ error: 'Internal server error' });
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
		res.status(500).json({ error: 'Internal server error' });
	  } else {
		res.send(records);
	  }
	});
  });
  
  
  
  


module.exports = router;
