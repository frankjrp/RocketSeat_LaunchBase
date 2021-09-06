const Admin = require('../../models/admins/recipes')
const Chefs = require('../../models/admins/chefs')
const File = require('../../models/admins/files')
const RecipeFile = require('../../models/admins/recipe_files')

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

        // get recipes
        let results = await Admin.paginate(params)
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

        return res.render("admins/recipes/index", { recipes, pagination })
    },
    async create(req, res) {
        // get chefs
        let results = await Chefs.all()
        const chefOptions = results.rows

        return res.render("admins/recipes/create", { chefOptions })
    },
    async post(req, res) {
        let results = await Admin.create(req.body)
        const recipeId = results.rows[0].id

        const filesPromise = req.files.map(file => {
            File.create({ ...file })
                .then(file => {
                    const fileId = file.rows[0].id
                    RecipeFile.create({ recipeId, fileId })
                })
        })

        await Promise.all(filesPromise)

        return res.redirect(`/admin/recipes`)
    },
    async show(req, res) {
        let results = await Admin.find(req.params.id)
        const recipe = results.rows[0]

        if (!recipe) return res.send("Recipe not found!")

        // get files
        results = await RecipeFile.findFilesId(recipe.id)
        let files = results.rows
        files = files.map(file => ({
            ...file,
            src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
        }))

        return res.render("admins/recipes/recipe", { recipe, files })
    },
    async edit(req, res) {
        let results = await Admin.find(req.params.id)
        const recipe = results.rows[0]

        if (!recipe) return res.send("Recipe not found!")

        // get chefs
        results = await Chefs.all()
        const chefOptions = results.rows

        // get files
        results = await RecipeFile.findFilesId(recipe.id)
        let files = results.rows
        files = files.map(file => ({
            ...file,
            src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
        }))

        return res.render("admins/recipes/edit", { recipe, chefOptions, files })

    },
    async update(req, res) {
        if (req.body.removed_files) {
            // 1,2,3,
            const removedFiles = req.body.removed_files.split(",") // [1,2,3,]
            const lastIndex = removedFiles.length - 1
            removedFiles.splice(lastIndex, 1) // [1,2,3]

            const removedFilesPromise = removedFiles.map(id => {
                RecipeFile.delete(id)
                    .then(File.delete(id))
            })

            await Promise.all(removedFilesPromise)
        }

        if (req.files.length != 0) {
            const recipeId = req.body.id

            const newFilesPromise = req.files.map(file => {
                File.create({ ...file })
                    .then(file => {
                        const fileId = file.rows[0].id
                        RecipeFile.create({ recipeId, fileId })
                    })
            })

            await Promise.all(newFilesPromise)
        }

        await Admin.update(req.body)

        return res.redirect(`/admin/recipes/${req.body.id}`)
    },
    async delete(req, res) {
        let results = await RecipeFile.findFilesId(req.body.id)
        let files = results.rows

        const removeRecipeFiles = files.map(file => {
            console.log("Remove File: " + file.id)

            RecipeFile.delete(file.id)
        })

        const removeFiles = files.map(file => {
            File.delete(file.id)
        })

        await Promise.all(removeRecipeFiles)
        await Promise.all(removeFiles)
        await Admin.delete(req.body.id)

        return res.redirect("/admin/recipes")
    }
}
