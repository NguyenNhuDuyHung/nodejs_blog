const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, "public")));

// Http logger
app.use(morgan("combined"));

// Template Engine
app.engine("hbs", hbs.engine({extname: '.hbs'}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

console.log(__dirname);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
