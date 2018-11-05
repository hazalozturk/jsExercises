/* display the current day and time in the following format
  Today is:
  Current time is:
*/
var date = new Date();

function getCurrentDay() {
  var today = date.getDay();
  var weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ];

  console.log('Today is: ' + weekdays[today]);
}

function getCurrentTime() {
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  if (hour < 12) {
    tag = ' AM : '
  } else {
    tag = ' PM : '
  }

  console.log('Current time is: ' + hour + tag + minute + ' : ' + second );
}

getCurrentDay();
getCurrentTime();
