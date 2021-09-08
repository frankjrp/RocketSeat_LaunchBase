const db = require('../../../config/db')

module.exports = {
    sixRecipes() {
        return db.query(`
        SELECT recipes.*, chefs.name AS chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        ORDER BY recipes.title ASC
        LIMIT $1`, [6])
    },
    find(id) {
        return db.query(`
        SELECT recipes.*, chefs.name AS chef_name
        FROM recipes
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        WHERE recipes.id = $1`, [id])
    },
    paginate(params) {
        const { filter, limit, offset } = params

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

        return db.query(query, [limit, offset])
    }
}