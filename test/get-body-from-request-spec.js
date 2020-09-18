const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    //Arrange
    const bodyPromise = getBodyFromRequest(fakeReq)
    //Act
    
    //Assert
  });

  it('returns the data read from the stream', done => {
    expect.fail('please write this test');
  });
});
