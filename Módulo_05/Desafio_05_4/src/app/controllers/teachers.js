const { age, graduation, date } = require('../../lib/utils')
const Teacher = require('../models/teacher')

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 3
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(teachers) {

                let total = 0

                if (teachers[0]) {
                    total = teachers[0].total
                }

                const pagination = {
                    total: Math.ceil(total / limit),
                    page
                }

                return res.render("teachers/index", { teachers, pagination, filter })
            }
        }

        Teacher.paginate(params)
    },
    create(req, res) {
        return res.render("teachers/create")

    },
    post(req, res) {
        Teacher.create(req.body, function (teacher) {
            return res.redirect(`/teachers/${teacher.id}`)

        })
    },
    show(req, res) {
        Teacher.find(req.params.id, function (teacher) {
            if (!teacher) {
                res.send("Teacher not found!")
            }

            teacher.age = `${age(teacher.birth)} anos`
            teacher.education_level = graduation(teacher.education_level)
            teacher.school_subjects = teacher.school_subjects.split(", ")
            teacher.created_at = date(teacher.created_at).format

            return res.render("teachers/show", { teacher })
        })
    },
    edit(req, res) {
        Teacher.find(req.params.id, function (teacher) {
            if (!teacher) {
                res.send("Teacher not found!")
            }

            teacher.birth = date(teacher.birth).iso

            return res.render("teachers/edit", { teacher })
        })
    },
    update(req, res) {
        Teacher.update(req.body, function () {
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res) {
        Teacher.delete(req.body.id, function () {
            return res.redirect("/teachers")
        })
    }
}