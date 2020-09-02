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

    return res.render("admins/edit", { recipe: data.recipes[index] })
}