bday= window.prompt("when is your birthday (yyyy-mm-dd)?", "")
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

var CC = parseInt(century);
var YY = parseInt(bornyear);
var MM = parseInt( month);
var DD = parseInt( day);

var dayOfWeek   =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

function class date(dw){
    switch (dw) {
        case 1:
            alert("birthday is on Sunday ,akan name is Kwasi")
            break;
        case 2:
            alert("birthday is on Monday,Akan name is Kwado")
    
        default:
            break;
    }
}



