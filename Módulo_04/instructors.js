const fs = require('fs') //file system, usado para criar um arquivo json com os dados enviados do formulário
const data = require('./data.json')
const { age, date } = require('./util')
const Intl = require('intl')

//pode ser usado qualquer nome para exportar, neste caso usaremos 'show', 'create', 'update', 'delete'

//show
exports.show = function (req, res) {
    const { id } = req.params //req.params.id - assim foi usado a desestruturação para tirar o id do req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id //find retorna true ou false
    })

    if (!foundInstructor) {
        res.send("Instructor not found!")
    }

    const instructor = {
        ...foundInstructor, //spread operator, joga todos os campos da variável aqui dentro
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)
    }

    return res.render("instructors/show", { instructor: instructor }) //ou só 'instructor' por ser o mesmo nome
}

//create
exports.post = function (req, res) {
    const keys = Object.keys(req.body) //["avatar_url","name","birth","gender","services"]

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    let { avatar_url, birth, name, gender, services } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    }) //salva os dados do formulário no array do arquivo JSON

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Write file error!")
        }

        return res.redirect("/instructors")
    })

}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id
    })

    if (!foundInstructor) {
        res.send("Instructor not found!")
    }

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    }

    return res.render("instructors/edit", { instructor: instructor })
}

//delete