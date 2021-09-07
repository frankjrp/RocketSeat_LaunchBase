const About = require('../../models/users/about')

module.exports = {
    about(req, res) {
        About.about(function (about) {
            return res.render("users/about", { about })
        })
    }
}