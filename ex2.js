/*
 * Example of promisifying a callback code using deferred;
 * Bluebird is a Promises/A+ compliant library.
 */

var Promise = require('bluebird');
var lib = require('./lib.js');

function promisifiedGetUser(qry) {
  var deferred = Promise.defer();

  lib.getUser(qry, function(err, result) {
    if (err)
      return deferred.reject(err);
    deferred.resolve(result);
  });

  return deferred.promise;
}

promisifiedGetUser({})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

/*
 * We can do better than this...
 */
