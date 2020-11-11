const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`
        SELECT recipes.*, chefs.name AS chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ORDER BY recipes.title ASC
        `, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)

        })
    },
    sixRecipes(callback) {
        db.query(`
        SELECT recipes.*, chefs.name AS chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ORDER BY recipes.title ASC
        LIMIT $1`, [6], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)

        })
    },
    find(id, callback) {
        db.query(`
        SELECT recipes.*, chefs.name AS chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })
    },
    about(callback) {
        db.query(`
        SELECT * FROM about
        `, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })
    }
}