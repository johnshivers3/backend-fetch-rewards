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
let db = new sqlite3.Database(
  "./transaction_ledger.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);



db.serialize(function () {
  db.run(`DROP TABLE IF EXISTS payer_subs`);
  db.run(`CREATE TABLE payer_subs (
    id INTEGER  NOT NULL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    total_points INTEGER
    )`);
  db.run(`
    INSERT INTO payer_subs (name, total_points)
    VALUES
      ('UNILEVER', 4000),
      ('DANNON', 4000),
      ('MILLER COORS', 10000)
    `);

  db.run(`

DROP TABLE IF EXISTS fetch_rewards`).run(`

CREATE TABLE fetch_rewards (
    payer_id  INTEGER  NOT NULL,
    points    INTEGER  NOT NULL,
    timestamp DATETIME NOT NULL
)`).run(`

INSERT INTO fetch_rewards (
                              payer_id,
                              points,
                              timestamp
                          )
                          VALUES (
                              1,
                              200,
                              '2020-10-31T11:00:00Z'
                          ),(
                              2,
                              -200,
                              '2020-10-31T15:00:00Z'
                          ),(
                              3,
                              10000,
                              '2020-11-01T14:00:00Z'
                          ),(
                              2,
                              300,
                              '2020-10-31T10:00:00Z'
                          ),(
                              2,
                              1000,
                              '2020-11-02T14:00:00Z'
                          )
`);

  db.each(
    `SELECT *
           FROM payer_subs`,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    }
  );
});

module.exports = db;
