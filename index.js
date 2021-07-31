//implantando express
const express = require("express");
//atribuindo o express a variavel app
const app = express();
//implantando handlebars
const handlebars = require("express-handlebars");
//body-parser
const bodyParser = require("body-parser");
//model user
const User = require("./models/User");
//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//config
//template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Rotas
app.get("/", function (req, res) {
    res.render("home");
})
app.get("/new-user", function (req, res) {
    res.render("newUser");
})
app.post("/user-new", function (req, res) {
    User.create({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }).then(function () {
        res.redirect("/");
    }).catch(function () {
        res.send("Houve um erro: " + erro);
    })
})
app.get("/list-user", function (req, res) {
    User.findAll().then(function (user) {
        res.render("listUsers", { user: user });
    })

})

app.listen("8080", function () {
    console.log("Conexão estabelecida");
})