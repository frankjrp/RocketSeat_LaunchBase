const User = require('../models/user')

module.exports = {
    index(req, res) {
        User.sixRecipes(function (recipes) {
            return res.render("users/index", { recipes })
        })
    },
    recipes(req, res) {
        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(recipes) {

                let total = 0

                if (recipes[0]) {
                    total = recipes[0].total
                }

                const pagination = {
                    total: Math.ceil(total / limit),
                    page
                }

                return res.render("users/recipes", { recipes, pagination, filter, total })
            }
        }

        User.paginate(params)
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