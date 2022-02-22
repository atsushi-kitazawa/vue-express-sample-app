const request = require("supertest")
const app = require("../app")

const expect_users = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' },
  { id: 3, name: 'ccc' }
]

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
      expect(response.body).toEqual({id: 1, name: 'aaa'});
    })
  })
})