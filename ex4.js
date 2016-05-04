/*
 * Example of chaining promises.
 */

var Promise = require('bluebird');
var lib = Promise.promisifyAll(require('./lib.js'));

// Explain Async suffix.
lib.getUserAsync({})
  .then(lib.sendEmailAsync)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

