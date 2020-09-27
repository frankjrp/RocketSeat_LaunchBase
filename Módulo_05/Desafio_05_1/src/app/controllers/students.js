const { grade, date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        return res.render("students/index")

    },
    create(req, res) {
        return res.render("students/create")

    },
    post(req, res) {
        let { image_url, name, email, birth, school_year, course_load } = req.body

        return

    },
    show(req, res) {
        return

    },
    edit(req, res) {
        return

    },
    update(req, res) {
        return

    },
    delete(req, res) {
        return

    }

}