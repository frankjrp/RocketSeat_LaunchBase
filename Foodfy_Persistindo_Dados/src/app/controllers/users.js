const { date } = require('../../lib/utils')
const User = require('../models/user')

module.exports = {
    index(req, res) {
        User.all(function (users) {
            return res.render("users/index", { recipes: users })
        })
    },
    recipes(req, res) {

    },
    show(req, res) {

    },
    about(req, res) {

    }
}