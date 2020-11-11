const express = require('express')
const routes = express.Router()
const users = require('./app/controllers/users')
const admins = require('./app/controllers/admins')

routes.get('/', function (req, res) {
    return res.redirect("/index")
})

routes.get('/index', users.index)
routes.get('/recipes', users.recipes)
routes.get('/recipes/:id', users.show)
routes.get('/about', users.about)

routes.get('/admin/recipes', admins.index)
routes.get('/admin/recipes/create', admins.create)
routes.get('/admin/recipes/:id', admins.show)
routes.get('/admin/recipes/:id/edit', admins.edit)
routes.post("/admin/recipes", admins.post)
routes.put("/admin/recipes", admins.update)
routes.delete("/admin/recipes", admins.delete)

module.exports = routes