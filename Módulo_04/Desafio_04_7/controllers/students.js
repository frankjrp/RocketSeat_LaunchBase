const fs = require('fs')
const data = require('../data.json')
const { grade, date } = require('../util')

//index
exports.index = function (req, res) {
    return res.render("students/index", { students: data.students })
}

//create
exports.create = function(req, res) {
    return res.render("students/create")
}

//post
exports.post = function (req, res) {

    let { image_url, name, email, birth, school_year, course_load } = req.body

    birth = Date.parse(birth)

    let id = 1
    const lastStudent = data.students[data.students.length - 1]

    if (lastStudent) {
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        image_url,
        name,
        email,
        birth,
        school_year,
        course_load
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao gravar os dados no arquivo!")
        }

        return res.redirect("/students")
    })
}

//show
exports.show = function (req, res) {
    const { id } = req.params

    const foundStudent = data.students.find(function (student) {
        return student.id == id
    })

    if (!foundStudent) {
        res.send("Estudante não encontrado!")
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        school_year: grade(foundStudent.school_year)
    }

    return res.render("students/show", { student: student })
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundStudent = data.students.find(function (student) {
        return student.id == id
    })

    if (!foundStudent) {
        res.send("Estudante não encontrado!")
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }

    return res.render("students/edit", { student: student })
}

//update
exports.update = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find(function (student, foundIndex) {
        if (id == student.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundStudent) {
        res.send("Estudante não encontrado!")
    }

    const student = {
        ...foundStudent,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao salvar os dados!")
        }

        return res.redirect(`/students/${id}`)
    })
}

//delete
exports.delete = function (req, res) {
    const { id } = req.body

    const filteredStudents = data.students.filter(function (student) {
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao deletar o registro!")
        }

        return res.redirect("/students")
    })
}