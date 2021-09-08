const Chefs = require('../../models/admins/chefs')
const RecipeFile = require('../../models/admins/recipe_files')

module.exports = {
    async index(req, res) {
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 12
        let offset = limit * (page - 1)

        const params = {
            page,
            limit,
            offset,
        }

        // get chefs
        let results = await Chefs.paginate(params)
        const chefs = results.rows

        let total = 0

        if (chefs[0]) {
            total = chefs[0].total
        }

        const pagination = {
            total: Math.ceil(total / limit),
            page
        }

        return res.render("admins/chefs/index", { chefs, pagination })
    },
    create(req, res) {
        return res.render("admins/chefs/create")

    },
    post(req, res) {
        Chefs.create(req.body, function (chef) {
            return res.redirect(`/admin/chefs`)

        })
    },
    async show(req, res) {
        const { id } = req.params
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            id,
            page,
            limit,
            offset
        }

        // get chef
        let results = await Chefs.find(id)
        const chef = results.rows[0]

        if (!chef) return res.send("Chef not found!")

        // get recipes
        results = await Chefs.findChefRecipes(params)
        const prepRecipes = results.rows

        //get recipe files
        let recipes = []

        for (let recipe of prepRecipes) {
            results = await RecipeFile.findFilesId(recipe.id)
            const files = results.rows.map(file => ({
                ...file,
                src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
            }))

            recipe = ({
                ...recipe, 
                files
            })

            recipes.push(recipe)
        }

        let total = 0

        if (recipes[0]) {
            total = recipes[0].total
        }

        const pagination = {
            total: Math.ceil(total / limit),
            page
        }

        return res.render("admins/chefs/chef", { chef, recipes, total, pagination })
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
        const { id } = req.body

        Chefs.find(id, function (chef) {
            if (!chef) {
                res.send("Chef not found!")
            }

            if (chef.total < 1) {
                Chefs.delete(id, function () {
                    return res.redirect("/admin/chefs")
                })
                
            } else {
                let quant = ""

                if (chef.total == 1) {
                    quant = "receita cadastrada"
                } else {
                    quant = "receitas cadastradas"
                }

                let message = `${chef.name} possui ${chef.total} ${quant} em seu nome`
                return res.render("admins/chefs/delete-error", { chef, message })
            }
        })
    }
}
