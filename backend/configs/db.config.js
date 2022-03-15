module.exports = {
  postgres: {
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
  },
  mysql: {
    development: {
      HOST: process.env.IP_ADDRESS || "localhost",
      PORT: process.env.POSTGRES_PORT || 13306,
      USER: "root",
      PASSWORD: "password",
      DB: "express_db",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
    test: {
      HOST: process.env.IP_ADDRESS || "localhost",
      PORT: process.env.POSTGRES_PORT || 13306,
      USER: "root",
      PASSWORD: "password",
      DB: "express_db_test",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
  }
};