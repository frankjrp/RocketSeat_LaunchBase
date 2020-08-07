const fs = require('fs') //file system, usado para criar um arquivo json com os dados enviados do formulário
const data = require('./data.json')


//pode ser usado qualquer nome para exportar, neste caso usamos o "post", "exports.post"
//create
exports.post = function (req, res) {
    const keys = Object.keys(req.body) //["avatar_url","name","birth","gender","services"]

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    let { avatar_url, birth, name, gender, services } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    }) //salva os dados do formulário no array do arquivo JSON

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Write file error!")
        }

        return res.redirect("/instructors")
    })

}

//update

//delete