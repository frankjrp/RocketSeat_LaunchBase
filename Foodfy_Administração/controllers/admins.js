const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {
    return res.render("admins/index", { recipes: data.recipes })
}

exports.show = function (req, res) {
    const { index } = req.params

    return res.render("admins/recipe", { recipe: data.recipes[index] })
}

exports.edit = function (req, res) {
    const { index } = req.params

    const recipe = {
        ...data.recipes[index],
        id: index
    }

    return res.render("admins/edit", { recipe: recipe })
}

exports.put = function (req, res) {
    const { id } = req.body

    let { image, title, author, ingredients, preparation, information  } = req.body

    const recipe = {
        ...data.recipes[id],
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    }

    data.recipes[id] = recipe

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao salvar os dados!")
        }

        return res.redirect(`/admin/recipes/${id}`)
    })
}

exports.delete = function (req, res) {
    const { id } = req.body

    const filteredRecipes = data.recipes.filter(function (recipe, position) {
        return position != id
    })

    data.recipes = filteredRecipes

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao deletar o registro!")
        }

        return res.redirect("/admin/recipes")
    })
}