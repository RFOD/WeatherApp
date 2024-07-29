// Gather All Necessary Information!
let data
let city
fetch('https://api.ipify.org?format=json', {mode: 'cors'})
  .then(response => response.json())
  .then(location => {
    console.log('Your Public IP Address:', location);
    fetch(`http://ip-api.com/json/${location.ip}?fields=status,message,regionName,city`,{mode: 'cors'})
        .then(result => result.json())
        .then(result => {
            city = result.city
            fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + `${city}` + '?unitGroup=metric&include=days%2Chours%2Ccurrent&key=LSKVJSNUZRML83YMQ5K2MCNKE&contentType=json', {
                "method": "GET",
                "headers": {
                }
                })
              .then(response => {
                  return response.json()
              })
              .then(response => data = response)
              .catch(err => {
                console.error(err);
              });
        })
  })
  .catch(error => {
    console.error('Error fetching IP:', error);
  })
// Carousel

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'center',
  contain: false,
  groupCells: true,
  autoPlay: true
});

// Initiating DOM elements to be changed!
const currLocation = document.querySelector('[data-location]')
const currState = document.querySelector('[data-curr-state]')
const currImg = document.querySelector('[data-curr-img]')
const currTemp = document.querySelector('[data-curr-temp]')
const currFeel = document.querySelector('[data-curr-feel]')
const currWind = document.querySelector('[data-curr-wind]')
const currHum = document.querySelector('[data-curr-hum]')
const dayOne = document.querySelector('[data-first-day]')
const dayTwo = document.querySelector('[data-first-day]')
const dayThree = document.querySelector('[data-first-day]')
const dayFour = document.querySelector('[data-first-day]')
const dayOneImg = document.querySelector('[data-first-day-img]')
const dayTwoImg = document.querySelector('[data-sec-day-img]')
const dayThreeImg = document.querySelector('[data-third-day-img]')
const dayFourImg = document.querySelector('[data-fourth-day-img]')
const dayOneTemp = document.querySelector('[data-first-day-temp]')
const dayTwoTemp = document.querySelector('[data-sec-day-temp]')
const dayThreeTemp = document.querySelector('[data-third-day-temp]')
const dayFourTemp = document.querySelector('[data-fourth-day-temp]')
const hourOne = document.querySelector('[data-time-one]')
const hourTwo = document.querySelector('[data-time-two]')
const hourThree = document.querySelector('[data-time-three]')
const hourFour = document.querySelector('[data-time-four]')
const hourFive = document.querySelector('[data-time-five]')
const hourFiveImg = document.querySelector('[data-time-five-img]')
const hourFiveTemp = document.querySelector('[data-time-five-temp]')
const hourOneImg = document.querySelector('[data-time-one-img]')
const hourTwoImg = document.querySelector('[data-time-two-img]')
const hourThreeImg = document.querySelector('[data-time-three-img]')
const hourFourImg = document.querySelector('[data-time-four-img]')
const hourOneTemp = document.querySelector('[data-time-one-temp]')
const hourTwoTemp = document.querySelector('[data-time-two-temp]')
const hourThreeTemp = document.querySelector('[data-time-three-temp]')
const hourFourTemp = document.querySelector('[data-time-four-temp]')
let address
let state
let curr_temp
let curr_feel
let curr_hum
let curr_wind
let desc
let dayOneIconSrc
let dayTwoIconSrc
let dayThreeIconSrc
let dayFourIconSrc
let dayOneTempSrc
let dayTwoTempSrc
let dayThreeTempSrc
let dayFourTempSrc
let dayOneName
let dayTwoName
let dayThreeName
let dayFourName
let oneHour
let twoHour
let threeHour
let fourHour
let oneHourImg
let twoHourImg
let threeHourImg
let fourHourImg
let oneHourTemp
let twoHourTemp
let threeHourTemp
let fourHourTemp

// Functions
function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}
  setTimeout(() => {
    console.log(data)
    address = data.resolvedAddress
    state = data.currentConditions.conditions
    curr_temp = Math.round(data.currentConditions.temp)
    curr_feel = data.currentConditions.feelslike
    curr_hum = data.currentConditions.humidity
    curr_wind = data.currentConditions.windspeed
    desc = data.description
    curr_icon = data.currentConditions.icon
    dayOneIconSrc = data.days[0].icon
    dayTwoIconSrc = data.days[1].icon
    dayThreeIconSrc = data.days[2].icon
    dayFourIconSrc = data.days[3].icon
    dayOneTempSrc = data.days[0].temp
    dayTwoTempSrc = data.days[1].temp
    dayThreeTempSrc = data.days[2].temp
    dayFourTempSrc = data.days[3].temp
    dayOneName = getDayOfWeek(data.days[0].datetime)
    dayTwoName = getDayOfWeek(data.days[1].datetime)
    dayThreeName = getDayOfWeek(data.days[2].datetime)
    dayFourName = getDayOfWeek(data.days[3].datetime)
    // oneHour = data.currentConditions.
    // twoHour = data.currentConditions.
    // threeHour = data.currentConditions.
    // fourHour = data.currentConditions.
    // oneHourImg = data.currentConditions.
    // twoHourImg = data.currentConditions.
    // threeHourImg = data.currentConditions.
    // fourHourImg = data.currentConditions.
    // oneHourTemp = data.currentConditions.
    // twoHourTemp = data.currentConditions.
    // threeHourTemp = data.currentConditions.
    // fourHourTemp = data.currentConditions.
    hourOne
    updateData()
  }, 1000)
  
//  Get The day for week forecast

function updateData()
{
  currLocation.textContent = `${address}`
  currState.textContent = `${state}`
  currImg.src = `/src/images/${curr_icon}.svg`
  currTemp.textContent = `${curr_temp}°C`
  currFeel.textContent = `${Math.round(curr_feel)}°C`
  currWind.textContent = `${curr_wind} m/s`
  currHum.textContent = `${curr_hum} %`
  dayOne.textContent = `${dayOneName}`
  dayTwo.textContent = `${dayTwoName}`
  dayThree.textContent = `${dayThreeName}`
  dayFour.textContent = `${dayFourName}`
  dayOneImg.src = `/src/images/${dayOneIconSrc}.svg`
  dayTwoImg.src = `/src/images/${dayTwoIconSrc}.svg`
  dayThreeImg.src = `/src/images/${dayThreeIconSrc}.svg`
  dayFourImg.src = `/src/images/${dayFourIconSrc}.svg`
  dayOneTemp.textContent = `${Math.round(dayOneTempSrc)}°C`
  dayTwoTemp.textContent = `${Math.round(dayTwoTempSrc)}°C`
  dayThreeTemp.textContent = `${Math.round(dayThreeTempSrc)}°C`
  dayFourTemp.textContent = `${Math.round(dayFourTempSrc)}°C`
//   hourTwo.textContent = `${}`
//   hourThree.textContent = `${}`
//   hourFour.textContent = `${}`
//   hourFive.textContent = `${}`
//   hourOneImg.src = `${hourOnwImgSrc}`
//   hourTwoImg.src = `${hourTwoImgSrc}`
//   hourThreeImg.src = `${hourThreeImgSrc}`
//   hourFourImg.src = `${hourFourImgSrc}`
//   hourFiveImg.src = `${hourFiveImgSrc}`
//   hourOneTemp.textContent = `${}`
//   hourTwoTemp.textContent = `${}`
//   hourThreeTemp.textContent = `${}`
//   hourFourTemp.textContent = `${}`
//   hourFiveTemp.textContent = `${}`
}