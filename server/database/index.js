const sqlite3 = require("sqlite3").verbose();

let transaction1 = {
  payer: "DANNON",
  points: 1000,
  timestamp: "2020-11-02T14:00:00Z",
};
let transaction2 = {
  payer: "UNILEVER",
  points: 200,
  timestamp: "2020-10-31T11:00:00Z",
};
let transaction3 = {
  payer: "DANNON",
  points: -200,
  timestamp: "2020-10-31T15:00:00Z",
};
let transaction4 = {
  payer: "MILLER COORS",
  points: 10000,
  timestamp: "2020-11-01T14:00:00Z",
};
let transaction5 = {
  payer: "DANNON",
  points: 300,
  timestamp: "2020-10-31T10:00:00Z",
};

// open database in memory
let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

db.run(`CREATE TABLE fetch_rewards (
	payer TEXT NOT NULL,
	points integer NOT NULL,
	timestamp TEXT NOT NULL UNIQUE,
)`);


module.exports = db;
