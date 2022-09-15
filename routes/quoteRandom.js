const router = require("express").Router();
const axios = require("axios");

router.get("/random", async (req, res) => {
  await axios
    .get("https://api.quotable.io/random")
    .then((resp) => {
      res.send(resp.data)
      // const random = Math.floor(Math.random() * resp.data.quotes.length);
      // res.send(resp.data.quotes[random]);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
