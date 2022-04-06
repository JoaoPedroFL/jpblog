const Sequelize = require("sequelize")
const connection = new Sequelize('jppress', 'root', 'Estudant@1', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection