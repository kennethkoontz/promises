/*
 * Example callback code.
 */

var async = require('./lib.js')

async.getUser({first_name: 'Clark'}, function(err, data) {
  if (err)
    console.log(err);

  console.log({message: 'Sending email.'});
  async.sendEmail(data, function(err, result) {
    if (err)
      console.log(err);

    console.log(result);
  });
});
