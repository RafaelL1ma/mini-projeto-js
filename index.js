//implantando express
const express = require("express");
//atribuindo o express a variavel app
const app = express();
//implantando handlebars
const handlebars = require("express-handlebars");

//config
//template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Rotas



app.listen("8080", function () {
    console.log("Conexão estabelecida");
})