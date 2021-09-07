const db = require('../../../config/db')

module.exports = {
    findFilesId(id) {
        return db.query(`
        SELECT files.*, recipe_files.file_id
        FROM files
        LEFT JOIN recipe_files ON (recipe_files.file_id = files.id)
        WHERE recipe_files.recipe_id = $1
        ORDER BY files.id`, [id])
    }
}