const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
    all(callback) {
        db.query(`SELECT * FROM teachers ORDER BY name ASC`, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows)

        })

    },
    create(data, callback) {
        const query = `
            INSERT INTO teachers (
                image_url,
                name,
                birth,
                education_level,
                class_type,
                school_subjects,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id
        `

        const values = [
            data.image_url,
            data.name,
            date(data.birth).iso,
            data.education_level,
            data.class_type,
            data.school_subjects,
            date(Date.now()).iso
        ]

        db.query(query, values, function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })

    },
    find(id, callback) {
        db.query(`SELECT * FROM teachers WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            callback(results.rows[0])

        })
    },
    findBy(filter, callback) {
        db.query(`
        SELECT * FROM teachers
        WHERE teachers.name ILIKE '%${filter}%'
        OR teachers.school_subjects ILIKE '%${filter}%'
        ORDER BY name ASC
        `, function(err, results) {
            if (err) {
                throw `Database error! ${err}`
            }
            
            callback(results.rows)
        })
    },
    update(data, callback) {
        const query = `
            UPDATE teachers SET
                image_url = ($1),
                name = ($2),
                birth = ($3),
                education_level = ($4),
                class_type = ($5),
                school_subjects = ($6)
            WHERE id = $7
        `

        const values = [
            data.image_url,
            data.name,
            date(data.birth).iso,
            data.education_level,
            data.class_type,
            data.school_subjects,
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
        db.query(`DELETE FROM teachers WHERE id = $1`, [id], function (err, results) {
            if (err) {
                throw `Database error! ${err}`
            }

            return callback()

        })
    }
}