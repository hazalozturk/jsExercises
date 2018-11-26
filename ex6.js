/* determine whether a given year is a leap year in the Gregorian calendar */
function isLeap(year) {
  var result = false;
  if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0 ) {
    result = true;
  }
  return result;
}

var year = 2000;
if (isLeap(year)) {
  console.log(year + ' is a leap year');
} else {
 console.log(year + ' is NOT a leap year');
}
