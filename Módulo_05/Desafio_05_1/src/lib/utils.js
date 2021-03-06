module.exports = {
    age: function (timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age--
        }

        return age
    },
    graduation: function (level) {
        let desc = ""

        switch (level) {
            case "1":
                desc = "Ensino Médio Completo"
                break
            case "2":
                desc = "Ensino Superior Completo"
                break
            case "3":
                desc = "Mestrado"
                break
            case "4":
                desc = "Doutorado"
                break
        }

        return desc

    },
    grade: function (grade) {
        let year = ""

        switch (grade) {
            case "1":
                year = "5º ano do ensino fundamental"
                break
            case "2":
                year = "6º ano do ensino fundamental"
                break
            case "3":
                year = "7º ano do ensino fundamental"
                break
            case "4":
                year = "8º ano do ensino fundamental"
                break
            case "5":
                year = "1º ano do ensino médio"
                break
            case "6":
                year = "2º ano do ensino médio"
                break
            case "7":
                year = "3º ano do ensino médio"
                break
        }

        return year

    },
    date: function (timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }
}