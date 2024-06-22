const mongoose = require("../../util/mongoose");
const Course = require("../model/Course");

class MeController {
  // [GET] /search
  async storedCourses(req, res, next) {
    // solve async problem when get count of courses with deleted

    // Promise.all

    // Promise.all([Course.countDocumentsWithDeleted({deleted: true}), Course.find({})])
    //   .then(([count, courses]) => {
    //     res.render("me/stored-courses", {
    //       courses: mongoose.multipleMongooseToObject(courses),
    //       count,
    //     });
    //   })
    //   .catch(next);

    // Async/Await
    const count = await Course.countDocumentsWithDeleted({ deleted: true });

    const courses = await Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: mongoose.multipleMongooseToObject(courses),
          count,
        });
      })
      .catch(next);
  }

  // [GET] /trash/courses
  async trashCourses(req, res, next) {
    const courses = await Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render("me/trash-courses", {
          courses: mongoose.multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
