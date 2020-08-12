const fs = require('fs')
const data = require('./data.json')
const { age, graduation, date } = require('./util')
const Intl = require('intl')

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

//create
exports.post = function (req, res) {

    let { image_url, name, birth, education_level, class_type, school_subjects } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

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
        birth: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", { teacher: teacher })
}