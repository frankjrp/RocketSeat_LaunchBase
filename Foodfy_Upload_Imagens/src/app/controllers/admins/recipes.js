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
        if (req.files.lenght == 0)
            return res.send('Please, send at least one image.')

        let results = await Admin.create(req.body)
        const recipeId = results.rows[0].id

        const filesPromise = req.files.map(file => {
            File.create({...file})
            .then(file => {
                const fileId = file.rows[0].id
                RecipeFile.create({recipeId, fileId})
            })
        })

        await Promise.all(filesPromise)

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

        // get images
        results = await Admin.files(recipe.id)
        let files = results.rows
        files = files.map(file => ({
            ...file,
            src: `${req.protocol}://${req.headers.host}${file.path.replace("public", "")}`
        }))

        return res.render("admins/recipes/edit", { recipe, chefOptions, files })
        
    },
    async update(req, res) {
        if (req.files.length != 0) {
            const newFilesPromise = req.files.map(file => File.create({...file}))

            await Promise.all(newFilesPromise)
        }

        if (req.body.removed_files) {
            // 1,2,3,
            const removedFiles = req.body.removed_files.split(",") // [1,2,3,]
            const lastIndex = removedFiles.length - 1
            removedFiles.splice(lastIndex, 1) // [1,2,3]

            const removedFilesPromise = removedFiles.map(id => File.delete(id))

            await Promise.all(removedFilesPromise)
        }
        
        await Admin.update(req.body)

        return res.redirect(`/admin/recipes/${req.body.id}`)
    },
    async delete(req, res) {
        await Admin.delete(req.body.id)

        return res.redirect("/admin/recipes")
    }
}
