// program to display current time
const date = new Date();
//get date as a string
const n = date.toDateString();
// get the time as a string
const time =  date.toLocaleTimeString();

// display the date
console.log('date: ' + n);
console.log('Time: ' + time);



