const express = require("express");
const app = express();
const quoteRoute = require("./routes/quoteRandom");
var cors = require('cors')


const port = 5000;

app.use(cors())
app.use(express.json());
app.use("/api", quoteRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
