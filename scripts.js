
const test = "https://api.openweathermap.org/data/2.5/onecall?lat=29.6630&lon=-95.235489&exclude=minutely,hourly&units=imperial&appid=51e464ca4cdfb256e268caccccef8edf"
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());

fetch(test)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    fetchTemp(data)
  })

let currentTemp 

function fetchTemp(tempData) {
  
  currentTemp = tempData

  let selDate = document.querySelector('.day')
  selDate.innerText = date

  let selHumidity = document.querySelector('.humidity')
  selHumidity.innerText = tempData.current.humidity + ' % Humidity Levels'

  let selDescription = document.querySelector('.description')
  selDescription.innerText = tempData.current.weather[0].description

  let selTemp = document.querySelector('.temp')
  selTemp.innerHTML = "Current Temp " + tempData.current.temp + '&deg;F'

  let submitBtn = document.querySelector('.submitbtn')
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // POST forecast
    fetch("http://localhost:3000/forecasts", {
      method: 'POST',
      body:JSON.stringify(tempData),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(json =>console.log(json))
  })

  //tomorrow forecast
  console.log(tempData.daily[0].temp.max)
  console.log(tempData.daily[0].temp.min)
  console.log(tempData.daily[0].weather[0].description)
// tomorrow + 1
  console.log(tempData.daily[1].temp.max)
  console.log(tempData.daily[1].temp.min)
  console.log(tempData.daily[1].weather[0].description)
// tomorrow + 2
  console.log(tempData.daily[2].temp.max)
  console.log(tempData.daily[2].temp.min)
  console.log(tempData.daily[2].weather[0].description)
// tomorrow + 3
  console.log(tempData.daily[3].temp.max)
  console.log(tempData.daily[3].temp.min)
  console.log(tempData.daily[3].weather[0].description)
// tomorrow + 4
  console.log(tempData.daily[4].temp.max)
  console.log(tempData.daily[4].temp.min)
  console.log(tempData.daily[4].weather[0].description)
// tomorrow + 5
  console.log(tempData.daily[5].temp.max)
  console.log(tempData.daily[5].temp.min)
  console.log(tempData.daily[5].weather[0].description)
// tomorrow + 6
  console.log(tempData.daily[6].temp.max)
  console.log(tempData.daily[6].temp.min)
  console.log(tempData.daily[6].weather[0].description)
// tomorrow + 7
  console.log(tempData.daily[7].temp.max)
  console.log(tempData.daily[7].temp.min)
  console.log(tempData.daily[7].weather[0].description)
}

let deleteButton = document.querySelector('.delete-button')
deleteButton.addEventListener('click', function (event) {
  event.preventDefault()
  //Backend delete
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
})