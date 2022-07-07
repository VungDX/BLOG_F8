const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const sort = require("./app/middlewares/sort");
const db = require("./config/db");

// Connect DB
db.connect();

const port = 3000;

const route = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));
app.use(sort);
// app.use(morgan('combined'))

// Template engine
app.engine(
  "handlebars",
  handlebars({
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default";
        const icons = {
          default: "oi oi-elevator",
          asc: "oi oi-sort-ascending",
          desc: "oi oi-sort-descending",
        };

        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        const icon = icons[sortType];
        const type = types[sortType];
        return ` <a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`;
      },
    },
  })
);
app.set("view-engine", "handlebars");
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
