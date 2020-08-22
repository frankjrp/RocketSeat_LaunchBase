const fs = require('fs') //file system, usado para criar um arquivo json com os dados enviados do formulário
const data = require('../data.json')
const { age, date } = require('../util')

//pode ser usado qualquer nome para exportar, neste caso usaremos 'index', 'show', 'create', 'post', 'edit', 'put', 'delete'

//HTTP VERBS
//GET: receber RESOURCE
//POST: criar um novo RESOURCE com os dados enviados
//PUT: atualizar RESOURCE
//DELETE: deletar RESOURCE

//index
exports.index = function (req, res) {
    return res.render("members/index", { members: data.members })
}

//show
exports.show = function (req, res) {
    const { id } = req.params //req.params.id - assim foi usado a desestruturação para tirar o id do req.params

    const foundMember = data.members.find(function (member) {
        return member.id == id //find retorna true ou false
    })

    if (!foundMember) {
        res.send("Member not found!")
    }

    const member = {
        ...foundMember, //spread operator, joga todos os campos da variável aqui dentro
        age: age(foundMember.birth)
    }

    return res.render("members/show", { member: member }) //ou só 'member' por ser o mesmo nome
}

//create
exports.create = function (req, res) {
    return res.render("members/create")
}

//post
exports.post = function (req, res) {
    const keys = Object.keys(req.body) //["avatar_url","name", "email", "birth","gender","blood", "weight", "height"]

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastMember = data.members[data.members.length - 1]

    if (lastMember) {
        id = lastMember.id + 1
    }

    data.members.push({
        id,
        ...req.body,
        birth
    }) //salva os dados do formulário no array do arquivo JSON

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Write file error!")
        }

        return res.redirect(`/members/${id}`)
    })

}

//edit
exports.edit = function (req, res) {
    const { id } = req.params

    const foundMember = data.members.find(function (member) {
        return member.id == id
    })

    if (!foundMember) {
        res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    }

    return res.render("members/edit", { member: member })
}

//put
exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundMember = data.members.find(function (member, foundIndex) {
        if (id == member.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundMember) {
        res.send("Member not found!")
    }

    const member = {
        ...foundMember,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Write error!")
        }

        return res.redirect(`/members/${id}`)
    })
}

//delete
exports.delete = function (req, res) {
    const { id } = req.body

    const filteredMembers = data.members.filter(function (member) {
        return member.id != id //retorna true ou false, se false (nesse caso), coloca o member dentro do filteredMembers (array)
    })

    data.members = filteredMembers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Delete file error!")
        }

        return res.redirect("/members")
    })
}