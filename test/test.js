var app = require('./src/index.js')
var expect = require('expect.js');

describe("simple", function(){
  it("should return true", function(){
    expect(app.math(1)).to.equal(true);
  });
  it("should return false", function(){
    expect(app.math(0)).to.equal(false);
  });
});