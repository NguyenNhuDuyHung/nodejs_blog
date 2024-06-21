const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

const route = require("./routes");

// Connect DB
const db = require("./config/db");
db.connect();

// Static file
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json

// Http logger
// app.use(morgan("combined"));

// Template Engine
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes
// res: response from server to client
// req: request from client to server

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
