const dbConfig = require('../configs/db.config.js')['postgres'][process.env.NODE_ENV || 'development']
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.account = require('./user.js')(sequelize, Sequelize);
module.exports = db;