'use strict';

describe('Service: firebaseFactory', function () {

  // load the service's module
  beforeEach(module('battleshipApp'));

  // instantiate service
  var firebaseFactory;
  beforeEach(inject(function (_firebaseFactory_) {
    firebaseFactory = _firebaseFactory_;
  }));

  it('should do something', function () {
    expect(!!firebaseFactory).toBe(true);
  });

});
