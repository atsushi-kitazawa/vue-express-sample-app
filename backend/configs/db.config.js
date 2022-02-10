module.exports = {
    HOST: "172.25.199.119",
    PORT: 15432,
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
  };