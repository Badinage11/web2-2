// var dbcon = require("../crowdfunding_db");

// var connection = dbcon.getconnection();

// connection.connect();

// var express = require('express');

// var router = express.Router();


// //Get all active fundraising activities, including categories
// router.get("/fundraisers", (req, res) => {
// 	const query = `
// 	  SELECT f.*, c.NAME AS category_name
// 	  FROM FUNDRAISER f
// 	  JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
// 	  WHERE f.ACTIVE = 1
// 	`;
	
// 	connection.query(query, (err, records, fields) => {
// 	  if (err) {
// 		console.error("Error while retrieving the data:", err);
		
// 	  } else {
// 		res.send(records);
// 	  }
// 	});
//   });


  
//   //Get all categories:
//   router.get("/categories", (req, res) => {
// 	const query = 'SELECT * FROM CATEGORY';
	
// 	connection.query(query, (err, records, fields) => {
// 	  if (err) {
// 		console.error("Error while retrieving the data:", err);
		
// 	  } else {
// 		res.send(records);
// 	  }
// 	});
//   });
  

//   //Search for fundraising activities that meet relevant criteria
//   router.get("/search", (req, res) => {
// 	const { CATEGORY, CITY, ORGANIZER } = req.query;
// 	let sql = "SELECT f.*, c.NAME AS category_name FROM FUNDRAISER f JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID WHERE f.ACTIVE = 1";
// 	let params = [];
  
// 	if (CATEGORY || CITY || ORGANIZER) {
// 	  if (CATEGORY) {
// 		sql += " AND c.CATEGORY_ID = ?";
// 		params.push(CATEGORY);
// 	  }
// 	  if (CITY) {
// 		sql += " AND f.CITY LIKE ?";
// 		params.push("%" + CITY + "%");
// 	  }
// 	  if (ORGANIZER) {
// 		sql += " AND f.ORGANIZER LIKE ?";
// 		params.push("%" + ORGANIZER + "%");
// 	  }
// 	}
  
// 	connection.query(sql, params, (err, results) => {
// 	  if (err) {
// 		console.log("Query error occurred:", err);
		
// 	  } else {
// 		res.send(records);
// 	  }
// 	});
//   });
  



//   //Query detailed information of activities through ID
//   router.get("/fundraiser/:id", (req, res) => {
// 	const { id } = req.params;
// 	const query = `
// 	  SELECT f.*, c.NAME AS category_name
// 	  FROM FUNDRAISER f
// 	  JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
// 	  WHERE f.FUNDRAISER_ID = ?
// 	`;
	
// 	connection.query(query, [id], (err, records, fields) => {
// 	  if (err) {
// 		console.error("Error while retrieving the data:", err);
// 	} else {
// 		res.send(records);
// 	  }
// 	});
//   });
  



// // module.exports = router;
// var dbcon = require("../crowdfunding_db");
// var connection = dbcon.getconnection();
// connection.connect();

// var express = require('express');
// var router = express.Router();

// // 获取所有活跃的募款活动，包括类别
// router.get("/fundraisers", (req, res) => {
//   const query = `
//     SELECT f.*, c.NAME AS category_name
//     FROM FUNDRAISER f
//     JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
//     WHERE f.ACTIVE = 1
//   `;
//   connection.query(query, (err, records) => {
//     if (err) {
//       console.error("检索数据时出错:", err);
//       res.status(500).send("检索数据时出错");
//     } else {
//       res.send(records);
//     }
//   });
// });

// // 获取所有类别
// router.get("/categories", (req, res) => {
//   const query = 'SELECT * FROM CATEGORY';
//   connection.query(query, (err, records) => {
//     if (err) {
//       console.error("检索数据时出错:", err);
//       res.status(500).send("检索数据时出错");
//     } else {
//       res.send(records);
//     }
//   });
// });

// // 根据条件搜索募款活动
// router.get("/search", (req, res) => {
//   const { CATEGORY, CITY, ORGANIZER } = req.query;
//   let sql = "SELECT f.*, c.NAME AS category_name FROM FUNDRAISER f JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID WHERE f.ACTIVE = 1";
//   let params = [];

//   if (CATEGORY || CITY || ORGANIZER) {
//     if (CATEGORY) {
//       sql += " AND c.CATEGORY_ID = ?";
//       params.push(CATEGORY);
//     }
//     if (CITY) {
//       sql += " AND f.CITY LIKE ?";
//       params.push("%" + CITY + "%");
//     }
//     if (ORGANIZER) {
//       sql += " AND f.ORGANIZER LIKE ?";
//       params.push("%" + ORGANIZER + "%");
//     }
//   }

//   connection.query(sql, params, (err, results) => {
//     if (err) {
//       console.log("查询时出错:", err);
//       res.status(500).send("查询时出错");
//     } else {
//       res.send(results);
//     }
//   });
// });

// // 通过 ID 查询活动详细信息
// router.get("/fundraiser/:id", (req, res) => {
//   const { id } = req.params;
//   const query = `
//     SELECT f.*, c.NAME AS category_name
//     FROM FUNDRAISER f
//     JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
//     WHERE f.FUNDRAISER_ID = ?
//   `;
//   connection.query(query, [id], (err, records) => {
//     if (err) {
//       console.error("检索数据时出错:", err);
//       res.status(500).send("检索数据时出错");
//     } else {
//       res.send(records);
//     }
//   });
// });

// module.exports = router;

// var dbcon = require("../crowdfunding_db");

// var connection = dbcon.getconnection();

// connection.connect();

// var express = require('express');

// var router = express.Router();


// //Get all active fundraising activities, including categories
// router.get("/fundraisers", (req, res) => {
// 	const query = `
// 	  SELECT f.*, c.NAME AS category_name
// 	  FROM FUNDRAISER f
// 	  JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
// 	  WHERE f.ACTIVE = 1
// 	`;
	
// 	connection.query(query, (err, records, fields) => {
// 	  if (err) {
// 		console.error("Error while retrieving the data:", err);
		
// 	  } else {
// 		res.send(records);
// 	  }
// 	});
//   });


  
//   //Get all categories:
//   router.get("/categories", (req, res) => {
// 	const query = 'SELECT * FROM CATEGORY';
	
// 	connection.query(query, (err, records, fields) => {
// 	  if (err) {
// 		console.error("Error while retrieving the data:", err);
		
// 	  } else {
// 		res.send(records);
// 	  }
// 	});
//   });
  

//   //Search for fundraising activities that meet relevant criteria
//   router.get("/search", (req, res) => {
// 	const { CATEGORY, CITY, ORGANIZER } = req.query;
// 	let sql = "SELECT f.*, c.NAME AS category_name FROM FUNDRAISER f JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID WHERE f.ACTIVE = 1";
// 	let params = [];
  
// 	if (CATEGORY || CITY || ORGANIZER) {
// 	  if (CATEGORY) {
// 		sql += " AND c.CATEGORY_ID = ?";
// 		params.push(CATEGORY);
// 	  }
// 	  if (CITY) {
// 		sql += " AND f.CITY LIKE ?";
// 		params.push("%" + CITY + "%");
// 	  }
// 	  if (ORGANIZER) {
// 		sql += " AND f.ORGANIZER LIKE ?";
// 		params.push("%" + ORGANIZER + "%");
// 	  }
// 	}
  
// 	connection.query(sql, params, (err, results) => {
// 	  if (err) {
// 		console.log("Query error occurred:", err);
		
// 	  } else {
// 		res.send(records);
// 	  }
// 	});
//   });
  



//   //Query detailed information of activities through ID
//   router.get("/fundraiser/:id", (req, res) => {
// 	const { id } = req.params;
// 	const query = `
// 	  SELECT f.*, c.NAME AS category_name
// 	  FROM FUNDRAISER f
// 	  JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
// 	  WHERE f.FUNDRAISER_ID = ?
// 	`;
	
// 	connection.query(query, [id], (err, records, fields) => {
// 	  if (err) {
// 		console.error("Error while retrieving the data:", err);
// 	} else {
// 		res.send(records);
// 	  }
// 	});
//   });
  



// module.exports = router;
var dbcon = require("../crowdfunding_db");
var connection = dbcon.getconnection();
connection.connect();

var express = require('express');
var router = express.Router();

// 获取所有活跃的募款活动，包括类别
router.get("/fundraisers", (req, res) => {
  const query = `
    SELECT f.*, c.NAME AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.ACTIVE = 1
  `;
  connection.query(query, (err, records) => {
    if (err) {
      console.error("检索数据时出错:", err);
      res.status(500).send("检索数据时出错");
    } else {
      res.send(records);
    }
  });
});

// 获取所有类别
router.get("/categories", (req, res) => {
  const query = 'SELECT * FROM CATEGORY';
  connection.query(query, (err, records) => {
    if (err) {
      console.error("检索数据时出错:", err);
      res.status(500).send("检索数据时出错");
    } else {
      res.send(records);
    }
  });
});

// 根据条件搜索募款活动
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
      console.log("查询时出错:", err);
      res.status(500).send("查询时出错");
    } else {
      res.send(results);
    }
  });
});

// 通过 ID 查询活动详细信息
router.get("/fundraiser/:id", (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT f.*, c.NAME AS category_name
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.FUNDRAISER_ID = ?
  `;
  connection.query(query, [id], (err, records) => {
    if (err) {
      console.error("检索数据时出错:", err);
      res.status(500).send("检索数据时出错");
    } else {
      res.send(records);
    }
  });
});

module.exports = router;
