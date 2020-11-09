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

    },
    edit(req, res) {

    },
    put(req, res) {

    },
    delete(req, res) {

    }
}
