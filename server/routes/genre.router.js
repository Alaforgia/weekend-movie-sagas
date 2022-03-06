const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("re.params: ", req.params.name);
  const query = `SELECT "movies"."title", "genres"."name", "movies"."description", "movies"."poster" 
  FROM "movies"
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "movies_genres"."genre_id" = "genres"."id"
  WHERE "movies"."title" = "${req.params.name}";`;
  pool
    .query(query)
    .then((result) => {
      // console.log(result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(query);
      console.log("ERROR: Get Details", err);
      res.sendStatus(500);
    });
});

module.exports = router;
