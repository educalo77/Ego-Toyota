require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const CarModel = require("./models/carmodels");
const CarDetail = require("./models/cardetails");
const OtherDetails = require("./models/otherdetails");


const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
   
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

const Models = CarModel(sequelize, DataTypes);
const Details = CarDetail(sequelize, DataTypes);
const Other = OtherDetails(sequelize, DataTypes);

Models.hasMany(Details);
Details.belongsTo(Models);

Models.hasMany(Other);
Other.belongsTo(Models);

module.exports = {
    conn: sequelize,
  Models,
  Details,
  Other
};