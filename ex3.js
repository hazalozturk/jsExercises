/*
get the current date as yy/mm/dd
*/

function getCurrentDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDate();
  console.log(year + '/' + month + '/' + day);
}

getCurrentDate();
