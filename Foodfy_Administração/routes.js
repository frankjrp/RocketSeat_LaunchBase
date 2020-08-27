const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/users')

routes.get('/', function (req, res) {
    return res.redirect("/index")
})

routes.get('/index', recipes.index)
routes.get('/recipes', recipes.recipes)
routes.get('/recipes/:index', recipes.show)
routes.get('/about', recipes.about)

module.exports = routes