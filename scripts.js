//Uni Const
const test = "https://api.openweathermap.org/data/2.5/onecall?lat=29.6630&lon=-95.235489&exclude=minutely,hourly&units=imperial&appid=51e464ca4cdfb256e268caccccef8edf"
const commentsUrl = "http://localhost:3000/comments"

var date = new Date();
var today = date.toLocaleString('en-us', { weekday: 'long' });

const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() + 1).toLocaleString('en-us', { weekday: 'short' });

// fetching weather data
fetch(test)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    fetchTemp(data)
  })

let selDate = document.querySelector('.day')
let selHumidity = document.querySelector('.humidity')
let selDes = document.querySelector('.description')
let selTemp = document.querySelector('.temp')
let highs = document.querySelector('.highs')
let lows = document.querySelector('.lows')
let commentList = document.querySelector('.comments')
let newCommentInput = document.querySelector('.comment-input')
let addComment = document.createElement('li')

// this sections put the current temps and todays highs and lows

function fetchTemp(tempData) {
  selDate.innerText = today
  selHumidity.innerText = tempData.current.humidity + ' % Humidity Levels'
  selDes.innerText = tempData.current.weather[0].description
  selTemp.innerHTML = "Current Temp " + tempData.current.temp + '&deg;F'
  highs.innerHTML = "Highs " + tempData.daily[0].temp.max + '&deg;F'
  lows.innerHTML = "Lows " + tempData.daily[0].temp.min + '&deg;F'
}
//comment and submit

// fetching comments
fetch("http://localhost:3000/comments")
  .then(res => res.json())
  .then(newComments)


function newComments(content) {
  content.forEach(comment => {
    let lis = document.createElement('li')
    lis.innerText = comment.content
    commentList.appendChild(lis)
    console.log(comment)
  })

  document.querySelector('.comment-form').addEventListener('submit', event => {
    event.preventDefault()
    addComment.innerText = newCommentInput.value
    commentList.appendChild(addComment)
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
  }
  )
}


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
      .then(emptyObj => content.remove())
  })
})

// submit forecast button

let submitBtn = document.querySelector('.forecastDay')
submitBtn.addEventListener('submit', function (event) {
  event.preventDefault()
  let newDate = document.querySelector('.day')
  newDate.innerText = tomorrow
  let newHighs = document.querySelector('.highs')
  newHighs.innerHTML = "Highs " + tempData.daily[1].temp.max + '&deg;F';
  let newLows = document.querySelector('.lows')
  newLows.innerHTML = "Lows " + tempData.daily[1].temp.min + '&deg;F';

  if (event.target.subject.value = 't2') {
    return (newHighs + newLows + newDate)}
 
  
  }
)

  // console.log information for live feed

  //tomorrow forecast
//   console.log(tempData.daily[0].temp.max)
//   console.log(tempData.daily[0].temp.min)
//   console.log(tempData.daily[0].weather[0].description)
  // tomorrow + 1
//   console.log(tempData.daily[1].temp.max)
//   console.log(tempData.daily[1].temp.min)
//   console.log(tempData.daily[1].weather[0].description)
  // tomorrow + 2
//   console.log(tempData.daily[2].temp.max)
//   console.log(tempData.daily[2].temp.min)
//   console.log(tempData.daily[2].weather[0].description)
  // tomorrow + 3
//   console.log(tempData.daily[3].temp.max)
//   console.log(tempData.daily[3].temp.min)
//   console.log(tempData.daily[3].weather[0].description)
  // tomorrow + 4
//   console.log(tempData.daily[4].temp.max)
//   console.log(tempData.daily[4].temp.min)
//   console.log(tempData.daily[4].weather[0].description)
  // tomorrow + 5
//   console.log(tempData.daily[5].temp.max)
//   console.log(tempData.daily[5].temp.min)
//   console.log(tempData.daily[5].weather[0].description)
  // tomorrow + 6
//   console.log(tempData.daily[6].temp.max)
//   console.log(tempData.daily[6].temp.min)
//   console.log(tempData.daily[6].weather[0].description)
  // tomorrow + 7
//   console.log(tempData.daily[7].temp.max)
//   console.log(tempData.daily[7].temp.min)
//   console.log(tempData.daily[7].weather[0].description)
// 