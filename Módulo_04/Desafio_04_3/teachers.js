const fs = require('fs')
const data = require('./data.json')

//create
exports.post = function (req, res) {
    const keys = Object.keys(req.body)
    let item = ""

    for (key of keys) {
        if (req.body[key] == "") {

            switch (key) {
                case "image_url":
                    item = "URL da imagem"
                    break
                case "name":
                    item = "Nome do professor"
                    break
                case "birth":
                    item = "Data de nascimento"
                    break
                case "school_subjects":
                    item = "Área de atuação"
                    break
            }

            return res.send(`Por favor, preencha o campo: ${item}`)
        }
    }

    let { image_url, name, birth, education_level, class_type, school_subjects } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        image_url,
        name,
        birth,
        education_level,
        class_type,
        school_subjects,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro ao gravar os dados no arquivo!")
        }

        return res.redirect("/teachers")
    })

}