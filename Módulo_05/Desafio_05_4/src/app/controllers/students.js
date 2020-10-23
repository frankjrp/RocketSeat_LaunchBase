const { grade, date } = require('../../lib/utils')
const Student = require('../models/student')

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
            callback(students) {

                let total = 0

                if (students[0]) {
                    total = students[0].total
                }

                const pagination = {
                    total: Math.ceil(total / limit),
                    page
                }

                return res.render("students/index", { students, pagination, filter })
            }
        }

        Student.paginate(params)
    },
    create(req, res) {
        Student.teachersSelectOptions(function (options) {
            return res.render("students/create", { teacherOptions: options })

        })
    },
    post(req, res) {
        Student.create(req.body, function (student) {
            return res.redirect(`/students/${student.id}`)

        })
    },
    show(req, res) {
        Student.find(req.params.id, function (student) {
            if (!student) {
                res.send("Student not found!")
            }

            student.birth = date(student.birth).birthDay
            student.school_year = grade(student.school_year)

            return res.render("students/show", { student })
        })
    },
    edit(req, res) {
        Student.find(req.params.id, function (student) {
            if (!student) {
                res.send("Student not found!")
            }

            student.birth = date(student.birth).iso

            Student.teachersSelectOptions(function (options) {
                return res.render("students/edit", { student, teacherOptions: options })

            })
        })
    },
    update(req, res) {
        Student.update(req.body, function () {
            return res.redirect(`/students/${req.body.id}`)
        })
    },
    delete(req, res) {
        Student.delete(req.body.id, function () {
            return res.redirect("/students")
        })
    }
}