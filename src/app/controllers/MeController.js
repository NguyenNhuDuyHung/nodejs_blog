const mongoose = require("../../util/mongoose");
const Course = require("../model/Course");

class MeController {
  // [GET] /search
  async storedCourses(req, res, next) {
    const courses = await Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses: mongoose.multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
