const { date } = require('../../../lib/utils')
const db = require('../../../config/db')

module.exports = {
    paginate(params) {
        const { limit, offset, callback } = params

        let query = "",
            totalQuery = `(SELECT count(*) FROM chefs) AS total`

        query = `
        SELECT chefs.*, ${totalQuery}
        FROM chefs
        ORDER BY name ASC
        LIMIT $1 OFFSET $2
        `

        db.query(query, [limit, offset], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)
        })
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
    find(id, callback) {
        db.query(`
        SELECT * FROM chefs
        WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })
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
        db.query(`DELETE FROM recipes WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            return callback()

        })
    }
}