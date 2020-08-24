const fs = require('fs')
const data = require('../data.json')
const { age, graduation, date } = require('../util')
const Intl = require('intl')

//index
exports.index = function (req, res) {
    return res.render("teachers/index", { teachers: data.teachers })
}

//create
exports.create = function(req, res) {
    return res.render("teachers/create")
}

//post
exports.post = function (req, res) {

    let { image_url, name, birth, education_level, class_type, school_subjects } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()

    let id = 1
    const lastTeacher = data.teachers[data.teachers.length - 1]

    if (lastTeacher) {
        id = lastTeacher.id + 1
    }

    data.teachers.push({
        id,
        image_url,
        name,
        birth,
        education_level,
        class_type,
        school_subjects,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao gravar os dados no arquivo!")
        }

        return res.redirect("/teachers")
    })
}

//show
exports.show = function (req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) {
        res.send("Professor não encontrado!")
    }

    const teacher = {
        ...foundTeacher,
        age: `${age(foundTeacher.birth)} anos`,
        education_level: graduation(foundTeacher.education_level),
        school_subjects: foundTeacher.school_subjects.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render("teachers/show", { teacher: teacher })
}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundTeacher = data.teachers.find(function (teacher) {
        return teacher.id == id
    })

    if (!foundTeacher) {
        res.send("Professor não encontrado!")
    }

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso
    }

    return res.render("teachers/edit", { teacher: teacher })
}

//update
exports.update = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function (teacher, foundIndex) {
        if (id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) {
        res.send("Professor não encontrado!")
    }

    const teacher = {
        ...foundTeacher,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao salvar os dados!")
        }

        return res.redirect(`/teachers/${id}`)
    })
}

//delete
exports.delete = function (req, res) {
    const { id } = req.body

    const filteredTeachers = data.teachers.filter(function (teacher) {
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao deletar o registro!")
        }

        return res.redirect("/teachers")
    })
}