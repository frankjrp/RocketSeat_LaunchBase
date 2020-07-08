const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function (req, res) {
    const data = {
        avatar_url: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="http://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "GitHub", url: "https://github.com/maykbrito/" },
            { name: "Twitter", url: "https://twitter.com/maykbrito/" },
            { name: "Linkedin", url: "https://linkedin.com/in/maykbrito/" }
        ]
    }

    return res.render("about", { about: data })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function () {
    console.log("Server is running")
})