const db = require("./db");

const User = db.sequelize.define("user", {
    name: {
        type: db.Sequelize.STRING
    },
    age: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    }
})

module.exports = User;

//criando tabela user no banco
User.sync({ force: true });
