const mongoose = require("../../util/mongoose");
const Course = require("../model/Course");

class SiteController {
  // [GET] /search
  async index(req, res, next) {
    Course.find({})
      .then((courses) => {
        // solve access denied error of handlebars when render
        res.render("home", {
          courses: mongoose.multipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // throw error to middleware

    // res.render("home");
  }

  // [GET] /search/:slug
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
