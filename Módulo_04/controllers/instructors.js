const fs = require('fs') //file system, usado para criar um arquivo json com os dados enviados do formulário
const data = require('../data.json')
const { age, date } = require('../util')
const Intl = require('intl')

//pode ser usado qualquer nome para exportar, neste caso usaremos 'index', 'create', 'post', 'show', 'edit', 'put', 'delete'

//HTTP VERBS
//GET: receber RESOURCE
//POST: criar um novo RESOURCE com os dados enviados
//PUT: atualizar RESOURCE
//DELETE: deletar RESOURCE

//index
exports.index = function (req, res) {
    return res.render("instructors/index", { instructors: data.instructors })
}

//create
exports.create = function (req, res) {
    return res.render("instructors/create")
}

//post
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
    
    let id = 1
    const lastInstructor = data.instructors[data.instructors.length - 1]

    if (lastInstructor) {
        id = lastInstructor.id + 1
    }

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
        birth: date(foundInstructor.birth).iso
    }

    return res.render("instructors/edit", { instructor: instructor })
}

//put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
        if (id == instructor.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundInstructor) {
        res.send("Instructor not found!")
    }

    const instructor = {
        ...foundInstructor,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Write error!")
        }

        return res.redirect(`/instructors/${id}`)
    })
}

//delete
exports.delete = function (req, res) {
    const { id } = req.body

    const filteredInstructors = data.instructors.filter(function (instructor) {
        return instructor.id != id //retorna true ou false, se false (nesse caso), coloca o instructor dentro do filteredInstructors (array)
    })

    data.instructors = filteredInstructors

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Delete file error!")
        }

        return res.redirect("/instructors")
    })
}