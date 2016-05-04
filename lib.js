/*
 * Callback based asyncronous code. We use the common (err, data) for the callback to propagate errors and data;
 * `setTimeout` is used to mimic asyncronous code.
 */

function getUser(qry, callback) {
  setTimeout(function() {
    // return callback({'message': 'A problem occured finding the user.'});
    
    callback(null, {
      _id: 1,
      first_name: 'Clark',
      last_name: 'Kent'
    });
  }, 1000);
}

function sendEmail(email, callback) {
  setTimeout(function() {
    // return callback({'message': 'A problem occured sending the email.'});
    
    callback(null, {
      message: 'Email sent.'
    });
  }, 1000);
}

exports.getUser = getUser;
exports.sendEmail = sendEmail;
