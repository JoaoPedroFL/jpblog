const Sequelize = require("sequelize")
const connection = new Sequelize('jppress', 'root', 'Estudant@1', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection