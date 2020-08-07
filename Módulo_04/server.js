const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes') //arquivo responsável pelas rotas

const server = express()

server.use(express.urlencoded({ extended: true })) //responsável pela leitura do req.body
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log("Server is running")
})