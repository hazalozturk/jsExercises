/* make a basic app that generates a random integer between 1 to 10 and that allows the user to input a guess number. If the user input matches with guess number, the app will display a success message; otherwise will display a message "Not matched" message. 
*/

function getRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function isMatched() {
  let randomNumber = getRandom(1, 10);

  let number = document.getElementById('yourGuess').value;

  if (number == randomNumber) {
    alert (`MATCHED! ${number}`);
  } else {
    alert (`NOT MATCHED! The number was ${randomNumber}`);
  };

};
