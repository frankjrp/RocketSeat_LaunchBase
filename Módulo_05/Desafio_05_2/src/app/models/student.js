const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM students ORDER BY name ASC`, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)

        })

    },
    create(data, callback) {
        const query = `
            INSERT INTO students (
                image_url,
                name,
                email,
                birth,
                school_year,
                course_load
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            data.image_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.school_year,
            data.course_load
        ]

        db.query(query, values, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })

    },
    find(id, callback) {
        db.query(`SELECT * FROM students WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })
    },
    update(data, callback) {
        const query = `
            UPDATE students SET
                image_url = ($1),
                name = ($2),
                email = ($3),
                birth = ($4),
                school_year = ($5),
                course_load = ($6)
            WHERE id = $7
        `

        const values = [
            data.image_url,
            data.name,
            data.email,
            date(data.birth).iso,
            data.school_year,
            data.course_load,
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
        db.query(`DELETE FROM students WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            return callback()

        })
    }
}