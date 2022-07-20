const should = require("should");
const chai = require("chai");
const expect = chai.expect;
const assert = require('chai').assert;
const request = require('supertest')('https://jsonplaceholder.typicode.com');

// Create our test case, we need to inform the description
describe("Exercise 2 – API Automation",function(){

  it("Should return status code 200 (OK)", async () => {
    return request.get('/todos')
      .expect(200)
      .set('Accept', 'application/json')
      .then((res) => {
        // assert data bieng return to not be empty
        var data = res.body;
        assert.isNotEmpty(data);
        assert.equal(200 , res.statusCode);

        expect(data[2].completed).to.equal(false);
      });
  });

  it("Completed of Id 2 is equal to false", async () => {
    return request.get('/todos')
      .set('Accept', 'application/json')
      .then((res) => {
        // assert completed of id 2 is false
        var data = res.body;
        assert.equal(false , data[2].completed);
      });
  });

  it("we should have 200 records of todos", async () => {
    return request.get('/todos')
      .set('Accept', 'application/json')
      .then((res) => {
        var data = res.body;
        assert.equal(false , data[2].completed);
        expect(data.length).to.equal(200);
      });
  });



});