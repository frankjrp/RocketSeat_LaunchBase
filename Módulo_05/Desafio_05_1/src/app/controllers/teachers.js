const { age, graduation, date } = require('../../lib/utils')
const Intl = require('intl')

module.exports = {
    index(req, res) {
        return res.render("teachers/index")

    },
    create(req, res) {
        return res.render("teachers/create")

    },
    post(req, res) {
        let { image_url, name, birth, education_level, class_type, school_subjects } = req.body

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