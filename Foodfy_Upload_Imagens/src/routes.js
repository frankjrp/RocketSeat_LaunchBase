const express = require('express')
const routes = express.Router()
const multer = require('./app/middlewares/multer')
const UserRecipes = require('./app/controllers/users/recipes')
const UserChefs = require('./app/controllers/users/chefs')
const UserAbout = require('./app/controllers/users/about')
const AdminRecipes = require('./app/controllers/admins/recipes')
const AdminChefs = require('./app/controllers/admins/chefs')

routes.get('/', function (req, res) {
    return res.redirect("/index")
})

routes.get('/admin', function (req, res) {
    return res.redirect("/admin/recipes")
})

routes.get('/index', UserRecipes.index)
routes.get('/recipes', UserRecipes.recipes)
routes.get('/recipes/:id', UserRecipes.show)
routes.get('/chefs', UserChefs.chefs)
routes.get('/about', UserAbout.about)

routes.get('/admin/recipes', AdminRecipes.index)
routes.get('/admin/recipes/create', AdminRecipes.create)
routes.get('/admin/recipes/:id', AdminRecipes.show)
routes.get('/admin/recipes/:id/edit', AdminRecipes.edit)
routes.post("/admin/recipes", multer.array("photos", 5), AdminRecipes.post)
routes.put("/admin/recipes", multer.array("photos", 5), AdminRecipes.update)
routes.delete("/admin/recipes", AdminRecipes.delete)

routes.get('/admin/chefs', AdminChefs.index)
routes.get('/admin/chefs/create', AdminChefs.create)
routes.get('/admin/chefs/:id', AdminChefs.show)
routes.get('/admin/chefs/:id/edit', AdminChefs.edit)
routes.post("/admin/chefs", AdminChefs.post)
routes.put("/admin/chefs", AdminChefs.update)
routes.delete("/admin/chefs", AdminChefs.delete)

module.exports = routes