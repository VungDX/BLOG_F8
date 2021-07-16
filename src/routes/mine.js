var express = require("express");
const router = express.Router();
const mineController = require("../app/controllers/MineController");

router.get("/stored/courses", mineController.storedCourse);

router.get("/trash/courses", mineController.trashCourse);

module.exports = router;
