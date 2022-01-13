function myButton(event) {
    event.preventDefault()
  
    var century = document.getElementById('century').value
    console.log(century)
    var year = document.getElementById('year').value
    console.log(year)
    var month = parseInt(document.getElementById('month').value)
    console.log(month)
    var date = parseInt(document.getElementById('date').value)
    console.log(date)
    var gender = document.querySelector('input[name = genderf]:checked').value
    console.log(gender)
    var gender = document.querySelector('input[name = genderm ]:checked').value
    console.log(gender)
  
    let akanGenderF =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    let akanGenderM =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
  
    if(gender==='female' && dayOfTheWeek===0) {
      alert('Your Akan name is ' + akanFemaleName['0'])
    }else if(gender==='female' && dayOfTheWeek==1) {
      alert('Your Akan name is ' + akanFemaleName['1'])
    }else if(gender==='female' && dayOfTheWeek==2) {
      alert('Your Akan name is ' + akanFemaleName['2'])
    }else if(gender==='female' && dayOfTheWeek==3) {
      alert('Your Akan name is ' + akanFemaleName['3'])
    }else if(gender==='female' && dayOfTheWeek==4) {
      alert('Your Akan name is ' + akanFemaleName['4'])
    }else if(gender==='female' && dayOfTheWeek==5) {
      alert('Your Akan name is ' + akanFemaleName['5'])
    }else if(gender==='female' && dayOfTheWeek==6) {
      alert('Your Akan name is ' + akanFemaleName['6'])
    }
  
    if(gender==='male' && dayOfTheWeek===0) {
      alert('Your Akan name is ' + akanMaleName['0'])
    }else if(gender==='male' && dayOfTheWeek===1) {
      alert('Your Akan name is ' + akanMaleName['1'])
    }if(gender==='male' && dayOfTheWeek===2) {
      alert('Your Akan name is ' + akanMaleName['2'])
    }if(gender==='male' && dayOfTheWeek===3) {
      alert('Your Akan name is ' + akanMaleName['3'])
    }if(gender==='male' && dayOfTheWeek===4) {
      alert('Your Akan name is ' + akanMaleName['4'])
    }if(gender==='male' && dayOfTheWeek===5) {
      alert('Your Akan name is ' + akanMaleName['5'])
    }if(gender==='male' && dayOfTheWeek===6) {
      alert('Your Akan name is ' + akanMaleName['6'])
    
    }function calculateDayValue(){
        year = document.getElementById("year").value;
        CC = parseInt(year.substring(0,2));
        YY = parseInt(year.substring(2,4));
        MM = parseInt(document.getElementById("month").value);
        DD = parseInt(document.getElementById("date").value);
        d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
        console.log(d);
        return (Math.floor(d));

}



