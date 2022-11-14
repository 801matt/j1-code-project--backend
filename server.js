const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const breaches = require("./Routes/breaches");

const app = express();

app.set("port", process.env.PORT || 80);

app.use(bodyParser.json());

app.use(cors());

app.use(breaches);

app.listen(4000, () => console.log("Example app is listening on port 4000."));
