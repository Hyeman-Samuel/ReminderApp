const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
host: process.env.DATABASE_HOST,
dialect: "mysql",
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Remainder = require("../models/remainder")(sequelize,Sequelize.DataTypes);


module.exports = db;