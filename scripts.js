
const test = "https://api.openweathermap.org/data/2.5/onecall?lat=29.6630&lon=-95.235489&exclude=minutely,hourly&units=imperial&appid=51e464ca4cdfb256e268caccccef8edf"
var today = new Date();
var date = today.toLocaleString('en-us', { weekday: 'short' });

fetch(test)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    fetchTemp(data)
  })

let currentTemp

// this sections put the current temps and todays highs and lows

function fetchTemp(tempData) {

  currentTemp = tempData

  let selDate = document.querySelector('.day')
  selDate.innerText = date

  let selHumidity = document.querySelector('.humidity')
  selHumidity.innerText = tempData.current.humidity + ' % Humidity Levels'

  let selDes = document.querySelector('.description')
  selDes.innerText = tempData.current.weather[0].description

  let selTemp = document.querySelector('.temp')
  selTemp.innerHTML = "Current " + tempData.current.temp + '&deg;F'

  document.querySelector('.highs').innerHTML = "Highs " + tempData.daily[0].temp.max + '&deg;F'

  document.querySelector('.lows').innerHTML = "Lows " + tempData.daily[0].temp.min + '&deg;F'

 //comment and submit

  const commentList = document.querySelector('.comments')

  document.querySelector('.comment-form').addEventListener('submit', event => {
    event.preventDefault()
    const addComment = document.createElement('li')
    console.log(addComment)
    commentList.appendChild(addComment)
    const newCommentInput = document.querySelector('.comment-input')
    addComment.innerText = newCommentInput.value
    event.target.reset()

    let newCommentData = {
      "imageId": 1,
      "content": addComment.innerText
    }
    postComments(newCommentData)

    function postComments(newComment) {
      let optionsPost = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newComment)

      }
      fetch("http://localhost:3000/comments", optionsPost)
        .then(res => res.json())
        .then(data => console.log(data))
    }
  })

  // delete comment button

  let deleteButton = document.querySelector('.delete-button')
  deleteButton.addEventListener('click', function (event) {
    event.preventDefault('click', () => {
      let options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
      fetch("http://localhost:3000/comments", options)
        .then(response => response.json())
        .then(comments => comments.remove())
    })
  })

// submit forecast button

  let submitBtn = document.querySelector('.submitbtn')
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault()

  }
  )

// console.log information for live feed

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