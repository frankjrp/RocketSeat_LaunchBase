const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`
            SELECT * FROM categories
            ORDER by name            
        `)
    }
}