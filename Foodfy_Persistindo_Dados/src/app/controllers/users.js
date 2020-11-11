const User = require('../models/user')

module.exports = {
    index(req, res) {
        User.sixRecipes(function (recipes) {
            return res.render("users/index", { recipes })
        })
    },
    recipes(req, res) {
        User.all(function (recipes) {
            return res.render("users/recipes", { recipes })
        })
    },
    show(req, res) {
        User.find(req.params.id, function (recipe) {
            if (!recipe) {
                res.send("Recipe not found!")
            }

            return res.render("users/recipe", { recipe })
        })
    },
    about(req, res) {
        User.about(function (about) {
            return res.render("users/about", { about })
        })
    }
}