var agent = require("supertest").agent(require("./app.js"))
var should = require("should")


describe('node-express-custom-req-res', function(){
  it('GET /', function (done) {
    agent.get('/')
      .expect(200)
      .end(function (err, res) {
        done();
    });
  });

  it('POST /', function (done) {
    agent.post('/')
      .expect(200)
      .end(function (err, res) {
        done();
    });
  });

});