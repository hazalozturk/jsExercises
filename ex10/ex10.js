/* calculate multiplication and division of two numbers that user provided
*/

function multiply() {
  let num1 = document.getElementById('firstNum').value;
  let num2 = document.getElementById('secondNum').value;
  document.getElementById('result').innerHTML =  (num1 * num2);
}

function divide() {
  let num1 = document.getElementById('firstNum').value;
  let num2 = document.getElementById('secondNum').value;
  document.getElementById('result').innerHTML =  (num1 / num2);
}
