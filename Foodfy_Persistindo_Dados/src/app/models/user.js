const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM recipes ORDER BY title ASC`, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)

        })

    }
}