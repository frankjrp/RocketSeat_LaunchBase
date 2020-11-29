const express = require('express')
const routes = express.Router()
const users = require('./app/controllers/users/users')
const recipes = require('./app/controllers/admins/recipes')
const chefs = require('./app/controllers/admins/chefs')

routes.get('/', function (req, res) {
    return res.redirect("/index")
})

routes.get('/index', users.index)
routes.get('/recipes', users.recipes)
routes.get('/recipes/:id', users.show)
routes.get('/chefs', users.chefs)
routes.get('/about', users.about)

routes.get('/admin/recipes', recipes.index)
routes.get('/admin/recipes/create', recipes.create)
routes.get('/admin/recipes/:id', recipes.show)
routes.get('/admin/recipes/:id/edit', recipes.edit)
routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.update)
routes.delete("/admin/recipes", recipes.delete)

routes.get('/admin/chefs', chefs.index)

module.exports = routes