const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const mineRouter = require("./mine");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/mine", mineRouter);
  app.use("/", siteRouter);
}

module.exports = route;
