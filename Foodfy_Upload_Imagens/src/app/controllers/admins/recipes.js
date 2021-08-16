const Admin = require('../../models/admins/recipes')

module.exports = {
    index(req, res) {
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
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

                return res.render("admins/recipes/index", { recipes, pagination })
            }
        }

        Admin.paginate(params)
    },
    create(req, res) {
        Admin.chefsSelectOptions(function (options) {
            return res.render("admins/recipes/create", { chefOptions: options })

        })
    },
    post(req, res) {
        Admin.create(req.body, function (recipe) {
            return res.redirect(`/admin/recipes`)

        })
    },
    show(req, res) {
        Admin.find(req.params.id, function (recipe) {
            if (!recipe) {
                res.send("Recipe not found!")
            }

            return res.render("admins/recipes/recipe", { recipe })
        })
    },
    edit(req, res) {
        Admin.find(req.params.id, function (recipe) {
            if (!recipe) {
                res.send("Recipe not found!")
            }

            Admin.chefsSelectOptions(function (options) {
                return res.render("admins/recipes/edit", { recipe, chefOptions: options })
    
            })
        })
    },
    update(req, res) {
        Admin.update(req.body, function () {
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },
    delete(req, res) {
        Admin.delete(req.body.id, function () {
            return res.redirect("/admin/recipes")
        })
    }
}
