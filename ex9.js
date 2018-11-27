/* calculate calculate days left until next Christmas
*/

let today = new Date;
let christmas = new Date(today.getFullYear(), 11, 25);
const conversion = 24*60*60*1000;

console.log(Math.ceil((christmas.getTime() - today.getTime())/conversion)
              + ' days until Christmas!');
