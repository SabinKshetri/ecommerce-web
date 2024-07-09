"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    HOST: "localhost",
    USER: "sabin",
    PASSWORD: "Mysql@123",
    DB: "ecommerce",
    dialect: "mysql",
    pool: {
        idle: 1000,
        max: 5,
        min: 0,
        acquire: 10000,
    },
};
exports.default = dbConfig;
