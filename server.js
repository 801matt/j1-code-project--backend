const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const breaches = require("./Routes/breaches");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

app.use(cors());

app.use(breaches);

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is running on port 3000")
);
