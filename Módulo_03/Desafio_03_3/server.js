const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const courses = require('./data_courses')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    return res.render("courses", { courses: courses })
})

server.get("/about", function (req, res) {
    const data_about = {
        description: `As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa. <br><br> Imagine você dominando as mesmas tecnologias adotadas pelos melhores times do mundo, construindo aplicações de alta performance e se destacando entre os maiores programadores.`,
        techTitle: `Principais tecnologias utilizadas: <br><br>`,
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Nodejs",
            "Sqlite",
            "Nunjucks"
        ],
        links: [
            { name: "GitHub", url: "https://github.com/rocketseat" },
            { name: "Instagram", url: "https://instagram.com/rocketseat_oficial" },
            { name: "Facebook", url: "https://fb.com/rocketseat" }
        ]
    }

    return res.render("about", { about: data_about })
})

server.get("/courses/:courseId", function (req, res) {
    const id = req.params.courseId

    const course = courses.find(function(course){
        return course.id == id
    })

    if (!course) {
        return res.render("not-found")
    }

    return res.render("course", { item: course })
})

server.use(function (req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, function () {
    console.log("Server is running")
})