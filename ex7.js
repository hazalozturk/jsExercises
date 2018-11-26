/* find the years that 1st January of it is being a Sunday between 2014 and 2050 */

function isSunday() {
  for (i= 2014; i<= 2050; i++) {
    var date = new Date(i, 0, 1);
    if (date.getDay() === 0) {
      console.log(i);
    };
  };
};

isSunday();
