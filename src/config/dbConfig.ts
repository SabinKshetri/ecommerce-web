type Database = {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  dialect: "mysql" | "postgres" | "sqlite";
  pool: {
    max: number;
    min: number;
    idle: number;
    acquire: number;
  };
};

const dbConfig: Database = {
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

export default dbConfig;
