/*  get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
*/

function clearDiv() {
  document.getElementById('result').innerHTML = '';
}

function getDifference(number) {
  number = document.getElementById('givenNum').value;
  if (number>13) {
    document.getElementById('result').innerHTML =  (number-13)*2;
  } else {
    document.getElementById('result').innerHTML =  (number-13);
  };
}

getDifference();
