const db = require('../../../config/db')

module.exports = {
    about() {
        return db.query(`SELECT * FROM about`)
    }
}