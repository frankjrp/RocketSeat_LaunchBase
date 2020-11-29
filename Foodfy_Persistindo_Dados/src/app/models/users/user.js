const db = require('../../../config/db')

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
    paginate(params) {
        const { filter, limit, offset, callback } = params

        let query = "",
            filterQuery = "",
            totalQuery = `(SELECT count(*) FROM recipes) AS total`

        if (filter) {
            filterQuery = `
            WHERE recipes.title ILIKE '%${filter}%'
            `

            totalQuery = `(
                SELECT count(*) FROM recipes
                ${filterQuery}
            ) AS total`
        }

        query = `
        SELECT recipes.*, chefs.name AS chef_name, ${totalQuery}
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ${filterQuery}
        ORDER BY recipes.title ASC
        LIMIT $1 OFFSET $2
        `

        db.query(query, [limit, offset], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)
        })
    },
    chefsPaginate(params) {
        const { limit, offset, callback } = params

        let query = "",
            totalRecipes = `(SELECT count(*) FROM recipes WHERE recipes.chef_id = chefs.id ) AS recipes`,
            totalQuery = `(SELECT count(*) FROM chefs) AS total`

        query = `
        SELECT chefs.*, ${totalRecipes}, ${totalQuery}
        FROM chefs
        ORDER BY chefs.name ASC
        LIMIT $1 OFFSET $2
        `

        db.query(query, [limit, offset], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)
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