class SiteController {
    // [GET] /search
    index(req, res) {
        res.render("home");
    }

    // [GET] /search/:slug
    search (req, res) {
        res.render("search");
    }
}
module.exports = new SiteController;