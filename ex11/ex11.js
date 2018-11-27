/* convert temperatures to and from Celsius, Fahrenheit
*/

function fToC() {
  let numF = document.getElementById('value').value;
  let resultC = 5*(numF-32)/9;
  document.getElementById('result').innerHTML = `${numF} &deg;F is ${resultC} &deg;C `;
}

function cToF() {
  let numC = document.getElementById('value').value;
  let resultF = (9*numC/5)+32 ;
  document.getElementById('result').innerHTML = `${numC} &deg;C is ${resultF} &deg;F `;
}
