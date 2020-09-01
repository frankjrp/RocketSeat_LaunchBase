const data = require('../data.json')

exports.index = function (req, res) {
    return res.render("admins/index", { recipes: data.recipes })
}