/**
 * author: Denis Kravchenko
 */
const express = require("express");
const port = 3500;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//making sure we get data in the json format
app.use(bodyParser.json());

//preventing the cors errors
app.use(cors());

mongoose.connect("mongodb://localhost/glossary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection is successful...");
});

//importing the routes
const termsRouter = require("./routes/terms");

//adding the API endpoints
app.use("/api", termsRouter);

app.listen(port, () => {
  console.log("Server is up, port: " + port);
});
