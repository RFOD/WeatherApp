// Gather All Necessary Information!
let city
fetch('https://api.ipify.org?format=json', {mode: 'cors'})
  .then(response => response.json())
  .then(location => {
    console.log('Your Public IP Address:', location);
    fetch(`http://ip-api.com/json/${location.ip}?fields=status,message,regionName,city`,{mode: 'cors'})
        .then(result => result.json())
        .then(result => {
            city = result.city
            fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + `${city}` + '?unitGroup=metric&include=fcst%2Cdays%2Ccurrent&key=LSKVJSNUZRML83YMQ5K2MCNKE&options=stnslevel1&contentType=json', {
                "method": "GET",
                "headers": {
                }
                })
              .then(response => {
                  return response.json()
              })
              .then(response => console.log())
              .catch(err => {
                console.error(err);
              });
        })
  })
  .catch(error => {
    console.error('Error fetching IP:', error);
  })
// Initiating DOM elements to be changed!
const currLocation = document.querySelector('[data-location]')
const currState = document.querySelector('[data-curr-state]')
const currImg = document.querySelector('[data-curr-img]')
const currTemp = document.querySelector('[data-curr-temp]')
const currHum = document.querySelector('[data-curr-hum]')
const currWind = document.querySelector('[data-curr-wind]')
const currPrecip = document.querySelector('[data-curr-precip]')
const currWetherDescription = document.querySelector('[data-curr-desc]')
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
const hourOneImg = document.querySelector('[data-time-one-img]')
const hourTwoImg = document.querySelector('[data-time-two-img]')
const hourThreeImg = document.querySelector('[data-time-three-img]')
const hourFourImg = document.querySelector('[data-time-four-img]')
const hourOneTemp = document.querySelector('[data-time-one-temp]')
const hourTwoTemp = document.querySelector('[data-time-two-temp]')
const hourThreeTemp = document.querySelector('[data-time-three-temp]')
const hourFourTemp = document.querySelector('[data-time-four-temp]')
// Functions
function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

// getDayOfWeek(response.days[].datetime)) Get The day for week forecast

function updateData()
{
  currLocation.textContent = `${city}`
  currState.textContent = `${}`
  currImg.src = `${currImgSrc}`
  currTemp.textContent = `${}`
  currHum.textContent = `${}`
  currWind.textContent = `${}`
  currPrecip.textContent = `${}`
  currWetherDescription.textContent = `${}`
  dayOne.textContent = `${}`
  dayTwo.textContent = `${}`
  dayThree.textContent = `${}`
  dayFour.textContent = `${}`
  dayOneImg.src = `${dayOneImgSrc}`
  dayTwoImg.src = `${dayTwoImgSrc}`
  dayThreeImg.src = `${dayThreeImgSrc}`
  dayFourImg.src = `${dayFourImgSrc}`
  dayOneTemp.textContent = `${}`
  dayTwoTemp.textContent = `${}`
  dayThreeTemp.textContent = `${}`
  dayFourTemp.textContent = `${}`
  hourTwo.textContent = `${}`
  hourThree.textContent = `${}`
  hourFour.textContent = `${}`
  hourOneImg.src = `${hourOnwImgSrc}`
  hourTwoImg.src = `${hourTwoImgSrc}`
  hourThreeImg.src = `${hourThreeImgSrc}`
  hourFourImg.src = `${hourFourImgSrc}`
  hourOneTemp.textContent = `${}`
  hourTwoTemp.textContent = `${}`
  hourThreeTemp.textContent = `${}`
  hourFourTemp.textContent = `${}`
}