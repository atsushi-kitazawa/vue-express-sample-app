const request = require("supertest")
const app = require("../app")
const dbConfig = require('../configs/db.config.js')[process.env.NODE_ENV || 'development']
var { Client } = require('pg');

var client = new Client({
  user: dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD,
  port: dbConfig.PORT
})

const expect_users = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' }
]

beforeAll(() => {
  client.connect();
  client.query('create table account (id integer primary key, name varchar(50))')
  client.query({
    text: 'insert into account values($1, $2)',
    values: [1, 'aaa']
  })
  client.query({
    text: 'insert into account values($1, $2)',
    values: [2, 'bbb']
  })
})

afterAll(async () => {
  client.query('drop table account')
  client.end();
})

describe("Test get user list", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect_users);
      });
  });
});

describe("Test get specific user", () => {
  test("", () => {
    return request(app)
      .get("/users/1")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ id: 1, name: 'aaa' });
      })
  })
})