const mongoose = require("../../util/mongoose");
const Course = require("../model/Course");

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", {
          course: mongoose.mongooseToObject(course),
        });
      })
      .catch(next);
  }
}
module.exports = new CourseController();
