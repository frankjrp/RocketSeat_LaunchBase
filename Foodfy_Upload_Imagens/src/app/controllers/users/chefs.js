const Chefs = require('../../models/users/chefs')

module.exports = {
    chefs(req, res) {
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 12
        let offset = limit * (page - 1)

        const params = {
            page,
            limit,
            offset,
            callback(chefs) {

                let total = 0

                if (chefs[0]) {
                    total = chefs[0].total
                }

                const pagination = {
                    total: Math.ceil(total / limit),
                    page
                }

                return res.render("users/chefs", { chefs, pagination })
            }
        }

        Chefs.chefsPaginate(params)
    }        
}