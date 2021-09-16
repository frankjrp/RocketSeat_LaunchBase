const db = require('../../../config/db')

module.exports = {
    create({recipeId, fileId}) {
        const query = `
            INSERT INTO recipe_files (
                recipe_id,
                file_id
            ) VALUES ($1, $2)
            RETURNING id
        `

        const values = [
            recipeId,
            fileId
        ]

        return db.query(query, values)

    },
    findFilesId(id) {
        return db.query(`
        SELECT files.*, recipe_files.file_id
        FROM files
        LEFT JOIN recipe_files ON (recipe_files.file_id = files.id)
        WHERE recipe_files.recipe_id = $1
        ORDER BY files.id`, [id])
    },
    delete(id) {
        try {
            return db.query(`DELETE FROM recipe_files WHERE file_id = $1`, [id])

        }catch(err) {
            console.error(err)
        }

    }
}