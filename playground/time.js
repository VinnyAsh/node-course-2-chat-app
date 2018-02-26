// Jan 1st 1970 00:00:00 am  the Unix Epoch time stamp
//  0 = the Unix Epoch time stamp
// numbers GT 0 are dates after the Epoch, LT 0 are before
// 1000 = 1 second
// moment is installed - moment.js.com for documentation

var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
