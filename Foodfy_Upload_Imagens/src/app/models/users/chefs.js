const db = require('../../../config/db')

module.exports = {
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
    }
}