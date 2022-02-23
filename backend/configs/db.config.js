module.exports = {
  development: {
    HOST: process.env.IP_ADDRESS || "localhost",
    PORT: process.env.POSTGRES_PORT || 15432,
    USER: "postgres",
    PASSWORD: "mysecretpassword",
    DB: "express_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    HOST: process.env.IP_ADDRESS || "localhost",
    PORT: process.env.POSTGRES_PORT || 15432,
    USER: "postgres",
    PASSWORD: "mysecretpassword",
    DB: "express_db_test",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};