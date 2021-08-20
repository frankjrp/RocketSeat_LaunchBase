const Admin = require('../../models/admins/recipes')
const Chefs = require('../../models/admins/chefs')

module.exports = {
    async index(req, res) {
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            page,
            limit,
            offset
        }

        let results =  await Admin.paginate(params)
        const recipes = results.rows

        let total = 0

        if (recipes[0]) {
            total = recipes[0].total
        }

        const pagination = {
            total: Math.ceil(total / limit),
            page
        }

        return res.render("admins/recipes/index", { recipes, pagination })
    },
    async create(req, res) {
        // get chefs
        let results = await Chefs.all()
        const chefOptions = results.rows

        return res.render("admins/recipes/create", { chefOptions })
    },
    async post(req, res) {
        await Admin.create(req.body)

        return res.redirect(`/admin/recipes`)
    },
    async show(req, res) {
        let results = await Admin.find(req.params.id)
        const recipe = results.rows[0]

        if(!recipe) return res.send("Recipe not found!")

        return res.render("admins/recipes/recipe", { recipe })
    },
    async edit(req, res) {
        let results = await Admin.find(req.params.id)
        const recipe = results.rows[0]
            
        if (!recipe) return res.send("Recipe not found!")

        // get chefs
        results = await Chefs.all()
        const chefOptions = results.rows

        return res.render("admins/recipes/edit", { recipe, chefOptions })
        
    },
    async update(req, res) {
        await Admin.update(req.body)

        return res.redirect(`/admin/recipes/${req.body.id}`)
    },
    async delete(req, res) {
        await Admin.delete(req.body.id)

        return res.redirect("/admin/recipes")
    }
}
