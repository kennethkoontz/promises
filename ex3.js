/*
 * Example of using `promisify` to automatically promisify code.
 */
var Promise = require('bluebird');
var lib = require('./lib.js');

var promisifiedGetUser = Promise.promisify(lib.getUser);

promisifiedGetUser({})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
