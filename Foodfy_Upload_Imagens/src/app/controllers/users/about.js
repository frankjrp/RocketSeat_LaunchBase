const About = require('../../models/users/about')

module.exports = {
    async about(req, res) {
        let results = await About.about()
        const about = results.rows[0]

        return res.render("users/about", { about })
    }
}