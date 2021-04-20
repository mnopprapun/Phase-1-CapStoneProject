
const test = "https://api.openweathermap.org/data/2.5/onecall?lat=29.6630&lon=-95.235489&exclude=minutely,hourly&units=imperial&appid=51e464ca4cdfb256e268caccccef8edf"
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());

fetch(test)
        .then(res => res.json())
        .then(data => {
         console.log(data) 
         fetchTemp(data)
        })

function fetchTemp(tempData){
  let selDate = document.querySelector('.day')
  selDate.innerText = date

let selHumidity = document.querySelector('.humidity')
selHumidity.innerText = tempData.current.humidity + ' % Humidity Levels'

let selDescription = document.querySelector('.description')
selDescription.innerText = tempData.current.weather[0].description
  
  let selTemp = document.querySelector('.temp')
  selTemp.innerHTML = "Current Temp " + tempData.current.temp + '&deg;F' 
}
let submitBtn = document.querySelector('.submitbtn')
submitBtn.addEventListener('click', function(event){
  event.preventDefault()
  let newBox = {
    "humidity": tempData.current.humidity,
    "description": tempData.current.weather[0].description,
    "temp":tempData.current.temp + '&deg;F' 
  }
});

