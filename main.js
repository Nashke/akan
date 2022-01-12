function myButton(event) {
    event.preventDefault()
bday = window.prompt("Please enter your birthdate (yyyy-mm-dd)?","");

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


