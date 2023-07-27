const Sequelize = require('sequelize');

// apontamento pro banco
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db' 
});

module.exports = sequelize