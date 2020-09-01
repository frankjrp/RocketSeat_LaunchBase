const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/users')
const admins = require('./controllers/admins')

routes.get('/', function (req, res) {
    return res.redirect("/index")
})

routes.get('/index', recipes.index)
routes.get('/recipes', recipes.recipes)
routes.get('/recipes/:index', recipes.show)
routes.get('/about', recipes.about)

routes.get('/admin/recipes', admins.index)

module.exports = routes