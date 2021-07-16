const Course = require("../models/Course");

const { multipleMongooseToObject } = require("../../config/utils/mongoose");

class MineController {
  // [GET] /mine/stored/courses
  storedCourse(req, res, next) {
    let courseQuery = Course.find({});
    if (req.query.hasOwnProperty("_sort")) {
      courseQuery = courseQuery.sort({
        [req.query.column]: req.query.type,
      });
    }

    Promise.all([courseQuery, Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        // render view folder
        res.render("mine/stored-courses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [DELETE]
  trashCourse(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render("mine/trash-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MineController();
