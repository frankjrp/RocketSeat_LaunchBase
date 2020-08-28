const data = require('../data.json')

exports.index = function (req, res) {
    return res.render("users/index", { recipes: data.recipes })
}

exports.recipes = function (req, res) {
    return res.render("users/recipes", { recipes: data.recipes })
}

exports.show = function (req, res) {
    const { index } = req.params

    return res.render("users/recipe", { recipe: data.recipes[index] })
}

exports.about = function (req, res) {
    return res.render("users/about", { about: data.about })
}