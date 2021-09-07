const db = require('../../../config/db')

module.exports = {
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