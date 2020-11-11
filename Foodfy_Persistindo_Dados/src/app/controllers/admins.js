const Admin = require('../models/admin')

module.exports = {
    index(req, res) {
        Admin.all(function (recipes) {
            return res.render("admins/index", { recipes })
        })
    },
    create(req, res) {
        Admin.chefsSelectOptions(function (options) {
            return res.render("admins/create", { chefOptions: options })

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

            return res.render("admins/recipe", { recipe })
        })
    },
    edit(req, res) {
        Admin.find(req.params.id, function (recipe) {
            if (!recipe) {
                res.send("Recipe not found!")
            }

            Admin.chefsSelectOptions(function (options) {
                return res.render("admins/edit", { recipe, chefOptions: options })
    
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
