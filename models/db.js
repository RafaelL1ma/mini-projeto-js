//implantando sequelize
const Sequelize = require("sequelize");

//conexão com o banco
const sequelize = new Sequelize("projeto", "root", "balisacar96382980", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}