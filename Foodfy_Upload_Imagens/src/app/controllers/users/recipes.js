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
    async allRecipes(req, res) {
        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
        }

        // get recipes
        let results = await Recipes.paginate(params)
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

        let total = 0

        if (recipes[0]) {
            total = recipes[0].total
        }

        const pagination = {
            total: Math.ceil(total / limit),
            page
        }

        return res.render("users/recipes", { recipes, pagination, filter })

    },
    async show(req, res) {
        let results = await Recipes.find(req.params.id)
        const recipe = results.rows[0]

        if (!recipe) return res.send("Recipe not found!")

        // get files
        results = await RecipeFile.findFilesId(recipe.id)
        let files = results.rows
        files = files.map(file => ({
            ...file,
            src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
        }))

        return res.render("users/recipe", { recipe, files })
    }
}