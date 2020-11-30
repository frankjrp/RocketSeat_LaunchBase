const Chefs = require('../../models/admins/chefs')

module.exports = {
    index(req, res) {
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 12
        let offset = limit * (page - 1)

        const params = {
            page,
            limit,
            offset,
            callback(chefs) {

                let total = 0

                if (chefs[0]) {
                    total = chefs[0].total
                }

                const pagination = {
                    total: Math.ceil(total / limit),
                    page
                }

                return res.render("admins/chefs/index", { chefs, pagination })
            }
        }

        Chefs.paginate(params)
    },
    create(req, res) {
        return res.render("admins/chefs/create")

    },
    post(req, res) {
        Chefs.create(req.body, function (chef) {
            return res.redirect(`/admin/chefs`)

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
        Chefs.find(req.params.id, function (chef) {
            if (!chef) {
                res.send("Chef not found!")
            }

            return res.render("admins/chefs/edit", { chef })
            
        })
    },
    update(req, res) {
        Chefs.update(req.body, function () {
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })
    },
    delete(req, res) {
        Admin.delete(req.body.id, function () {
            return res.redirect("/admin/recipes")
        })
    }
}
