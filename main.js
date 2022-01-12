function myButton(event) {
    event.preventDefault()

var day = bdayArray[2];
var month = bdayArray [1];
var year = bdayArray [0];

if (bdayArray.length) ! == 3) {
    alert ("error on date");

} else if ( day <=0 || day > 31){
    alert("error on day");

}else if (month <= 0 || month  > 12) {
    alert ( "invalid month");

} else var century = year.slice (0,2);
console.log(century);

var bornyear = year.slice (2,5);
console.log(bornyear);

var century = document.getElementById('century').value
console.log(century)
var year = document.getElementById('year').value
console.log(year)
var month = parseInt(document.getElementById('month').value)
console.log(month)
var date = parseInt(document.getElementById('date').value)
console.log(date)
var gender = document.querySelector('input[name = gender]:checked').value
console.log(gender)

var CC = parseInt(century);
var YY = parseInt(bornyear);
var MM = parseInt( month);
var DD = parseInt( day);

var dayOfWeek =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7



