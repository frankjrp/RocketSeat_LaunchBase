const Recipes = require('../../models/users/recipes')
const RecipeFile = require('../../models/users/recipe_files')

module.exports = {
    async index(req, res) {
        // get recipes
        let results =  await Recipes.sixRecipes()
        const prepRecipes = results.rows

        // get files
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

        return res.render("users/index", { recipes })

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

        Recipes.paginate(params)
    },
    show(req, res) {
        Recipes.find(req.params.id, function (recipe) {
            if (!recipe) {
                res.send("Recipe not found!")
            }

            return res.render("users/recipe", { recipe })
        })
    }
}