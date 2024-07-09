import { Sequelize, DataType } from "sequelize";
import dbConfig from "../config/dbConfig";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 3306,
  pool: {
    acquire: dbConfig.pool.acquire,
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully !!");
  })
  .catch((err) => {
    console.log(err);
  });

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes Migrated");
});

export default db;
