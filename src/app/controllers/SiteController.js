const Course = require("../model/Course");

class SiteController {
  // [GET] /search
  async index(req, res) {
    try {
      const data = await Course.find({});
      res.json(data);
    } catch (error) {
      res.status(400).json(error);
    }
    // res.render("home");
  }

  // [GET] /search/:slug
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
