const { date } = require('../../../lib/utils')
const db = require('../../../config/db')

module.exports = {
    paginate(params) {
        const { limit, offset } = params

        let query = "",
            totalQuery = `(SELECT count(*) FROM chefs) AS total`

        query = `
        SELECT chefs.*, ${totalQuery}
        FROM chefs
        ORDER BY name ASC
        LIMIT $1 OFFSET $2
        `

        return db.query(query, [limit, offset])
    },
    create(data, callback) {
        const query = `
            INSERT INTO chefs (
                name,
                avatar_url,
                created_at
            ) VALUES ($1, $2, $3)
            RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).iso
        ]

        db.query(query, values, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })
    },
    find(id) {
        let query = "",
            totalRecipes = `(SELECT count(*) FROM recipes WHERE recipes.chef_id = $1) AS total`

        query = `
        SELECT chefs.*, ${totalRecipes}
        FROM chefs
        WHERE chefs.id = $1
        `

        return db.query(query, [id])
    },
    findChefRecipes(params) {
        const { id, limit, offset } = params

        let query = "",
            totalQuery = `(SELECT count(*) FROM recipes WHERE recipes.chef_id = $1) AS total`

        query = `
        SELECT recipes.*, chefs.name AS chef_name, ${totalQuery}
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.chef_id = $1
        ORDER BY recipes.title ASC
        LIMIT $2 OFFSET $3
        `

        return db.query(query, [id, limit, offset])
    },
    update(data, callback) {
        const query = `
            UPDATE chefs SET
                name = ($1),
                avatar_url = ($2)
            WHERE id = $3
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback()
        })
    },
    delete(id, callback) {
        db.query(`DELETE FROM chefs WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            return callback()

        })
    },
    all() {
        return db.query(`
            SELECT name, id FROM chefs
            ORDER BY name
        `)
    }
}