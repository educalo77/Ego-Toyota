const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");

require("./db.js");

const app = express();

app.name = "API";

app.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb"
}));
app.use(bodyParser.json({
  limit: "50mb"
}));

app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());


app.use("/", routes);


module.exports = app;