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
const currWeekday = document.querySelector('[data-curr-weekday]')
const currState = document.querySelector('[data-curr-state]')
const currImg = document.querySelector('[data-curr-img]')
const currTemp = document.querySelector('[data-curr-temp]')
const currFeel = document.querySelector('[data-curr-feel]')
const currWind = document.querySelector('[data-curr-wind]')
const currHum = document.querySelector('[data-curr-hum]')
const dayOne = document.querySelector('[data-first-day]')
const dayTwo = document.querySelector('[data-sec-day]')
const dayThree = document.querySelector('[data-third-day]')
const dayFour = document.querySelector('[data-fourth-day]')
const dayOneImg = document.querySelector('[data-first-day-img]')
const dayTwoImg = document.querySelector('[data-sec-day-img]')
const dayThreeImg = document.querySelector('[data-third-day-img]')
const dayFourImg = document.querySelector('[data-fourth-day-img]')
const dayOneTemp = document.querySelector('[data-first-day-temp]')
const dayTwoTemp = document.querySelector('[data-sec-day-temp]')
const dayThreeTemp = document.querySelector('[data-third-day-temp]')
const dayFourTemp = document.querySelector('[data-fourth-day-temp]')
const hourZeroImg = document.querySelector('[data-time-zero-img]')
const hourZeroTemp = document.querySelector('[data-time-zero-temp]')
const hourOneImg = document.querySelector('[data-time-one-img]')
const hourTwoImg = document.querySelector('[data-time-two-img]')
const hourThreeImg = document.querySelector('[data-time-three-img]')
const hourFourImg = document.querySelector('[data-time-four-img]')
const hourOneTemp = document.querySelector('[data-time-one-temp]')
const hourTwoTemp = document.querySelector('[data-time-two-temp]')
const hourThreeTemp = document.querySelector('[data-time-three-temp]')
const hourFourTemp = document.querySelector('[data-time-four-temp]')
const hourFiveImg = document.querySelector('[data-time-five-img]')
const hourFiveTemp = document.querySelector('[data-time-five-temp]')
const hour6Img = document.querySelector('[data-time-6-img]')
const hour6Temp = document.querySelector('[data-time-6-temp]')
const hour7Img = document.querySelector('[data-time-7-img]')
const hour7Temp = document.querySelector('[data-time-7-temp]')
const hour8Img = document.querySelector('[data-time-8-img]')
const hour8Temp = document.querySelector('[data-time-8-temp]')
const hour9Img = document.querySelector('[data-time-9-img]')
const hour9Temp = document.querySelector('[data-time-9-temp]')
const hour10Img = document.querySelector('[data-time-10-img]')
const hour10Temp = document.querySelector('[data-time-10-temp]')
const hour11Img = document.querySelector('[data-time-11-img]')
const hour11Temp = document.querySelector('[data-time-11-temp]')
const hour12Img = document.querySelector('[data-time-12-img]')
const hour12Temp = document.querySelector('[data-time-12-temp]')
const hour13Img = document.querySelector('[data-time-13-img]')
const hour13Temp = document.querySelector('[data-time-13-temp]')
const hour14Img = document.querySelector('[data-time-14-img]')
const hour14Temp = document.querySelector('[data-time-14-temp]')
const hour15Img = document.querySelector('[data-time-15-img]')
const hour15Temp = document.querySelector('[data-time-15-temp]')
const hour16Img = document.querySelector('[data-time-16-img]')
const hour16Temp = document.querySelector('[data-time-16-temp]')
const hour17Img = document.querySelector('[data-time-17-img]')
const hour17Temp = document.querySelector('[data-time-17-temp]')
const hour18Img = document.querySelector('[data-time-18-img]')
const hour18Temp = document.querySelector('[data-time-18-temp]')
const hour19Img = document.querySelector('[data-time-19-img]')
const hour19Temp = document.querySelector('[data-time-19-temp]')
const hour20Img = document.querySelector('[data-time-20-img]')
const hour20Temp = document.querySelector('[data-time-20-temp]')
const hour21Img = document.querySelector('[data-time-21-img]')
const hour21Temp = document.querySelector('[data-time-21-temp]')
const hour22Img = document.querySelector('[data-time-22-img]')
const hour22Temp = document.querySelector('[data-time-22-temp]')
const hour23Img = document.querySelector('[data-time-23-img]')
const hour23Temp = document.querySelector('[data-time-23-temp]')
let address
let zeroTemp
let zeroImg
let state
let currDay
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
let oneHourImg
let twoHourImg
let threeHourImg
let fourHourImg
let fiveHourImg
let oneHourTemp
let twoHourTemp
let threeHourTemp
let fourHourTemp
let fiveHourTemp
let hour6TempSrc
let hour7TempSrc
let hour8TempSrc
let hour9TempSrc
let hour10TempSrc
let hour11TempSrc
let hour12TempSrc
let hour13TempSrc
let hour14TempSrc
let hour15TempSrc
let hour16TempSrc
let hour17TempSrc
let hour18TempSrc
let hour19TempSrc
let hour20TempSrc
let hour21TempSrc
let hour22TempSrc
let hour23TempSrc
let hour6ImgSrc
let hour7ImgSrc
let hour8ImgSrc
let hour9ImgSrc
let hour10ImgSrc
let hour11ImgSrc
let hour12ImgSrc
let hour13ImgSrc
let hour14ImgSrc
let hour15ImgSrc
let hour16ImgSrc
let hour17ImgSrc
let hour18ImgSrc
let hour19ImgSrc
let hour20ImgSrc
let hour21ImgSrc
let hour22ImgSrc
let hour23ImgSrc


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
    dayOneIconSrc = data.days[1].icon
    dayTwoIconSrc = data.days[2].icon
    dayThreeIconSrc = data.days[3].icon
    dayFourIconSrc = data.days[4].icon
    dayOneTempSrc = data.days[1].tempmax
    dayTwoTempSrc = data.days[2].tempmax
    dayThreeTempSrc = data.days[3].tempmax
    dayFourTempSrc = data.days[4].tempmax
    dayOneName = getDayOfWeek(data.days[1].datetime)
    dayTwoName = getDayOfWeek(data.days[2].datetime)
    dayThreeName = getDayOfWeek(data.days[3].datetime)
    dayFourName = getDayOfWeek(data.days[4].datetime)
    currDay = getDayOfWeek(data.days[0].datetime)

    zeroTemp = Math.round(data.days[0].hours[0].temp)
    oneHourTemp =Math.round( data.days[0].hours[1].temp)
    twoHourTemp =Math.round( data.days[0].hours[2].temp)
    threeHourTemp =Math.round( data.days[0].hours[3].temp)
    fourHourTemp =Math.round( data.days[0].hours[4].temp)
    fiveHourTemp =Math.round( data.days[0].hours[5].temp)
    hour6TempSrc =Math.round( data.days[0].hours[6].temp)
    hour7TempSrc =Math.round( data.days[0].hours[7].temp)
    hour8TempSrc =Math.round( data.days[0].hours[8].temp)
    hour9TempSrc =Math.round( data.days[0].hours[9].temp)
    hour10TempSrc =Math.round( data.days[0].hours[10].temp)
    hour11TempSrc = Math.round(data.days[0].hours[11].temp)
    hour12TempSrc = Math.round(data.days[0].hours[12].temp)
    hour13TempSrc = Math.round(data.days[0].hours[13].temp)
    hour14TempSrc = Math.round(data.days[0].hours[14].temp)
    hour15TempSrc = Math.round(data.days[0].hours[15].temp)
    hour16TempSrc = Math.round(data.days[0].hours[16].temp)
    hour17TempSrc = Math.round(data.days[0].hours[17].temp)
    hour18TempSrc = Math.round(data.days[0].hours[18].temp)
    hour19TempSrc = Math.round(data.days[0].hours[19].temp)
    hour20TempSrc = Math.round(data.days[0].hours[20].temp)
    hour21TempSrc = Math.round(data.days[0].hours[21].temp)
    hour22TempSrc = Math.round(data.days[0].hours[22].temp)
    hour23TempSrc = Math.round(data.days[0].hours[23].temp)
    oneHourImg = data.days[0].hours[0].icon
    twoHourImg = data.days[0].hours[1].icon
    threeHourImg = data.days[0].hours[2].icon
    fourHourImg = data.days[0].hours[3].icon
    fiveHourImg = data.days[0].hours[4].icon
    hour6ImgSrc = data.days[0].hours[5].icon
    hour7ImgSrc = data.days[0].hours[6].icon
    hour9ImgSrc = data.days[0].hours[7].icon
    hour8ImgSrc = data.days[0].hours[8].icon
    hour10ImgSrc = data.days[0].hours[9].icon
    hour11ImgSrc = data.days[0].hours[10].icon
    hour12ImgSrc = data.days[0].hours[11].icon
    hour13ImgSrc = data.days[0].hours[12].icon
    hour14ImgSrc = data.days[0].hours[13].icon
    hour15ImgSrc = data.days[0].hours[14].icon
    hour16ImgSrc = data.days[0].hours[15].icon
    hour17ImgSrc = data.days[0].hours[16].icon
    hour18ImgSrc = data.days[0].hours[17].icon
    hour19ImgSrc = data.days[0].hours[18].icon
    hour20ImgSrc = data.days[0].hours[19].icon
    hour21ImgSrc = data.days[0].hours[20].icon
    hour23ImgSrc = data.days[0].hours[22].icon
    hour22ImgSrc = data.days[0].hours[21].icon
    updateData()
  }, 1000)
  
//  Get The day for week forecast

function updateData()
{
  currWeekday.textContent = `${currDay}`
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
  // hourOneImg.src = `${}`
  // hourTwoImg.src = `${}`
  // hourThreeImg.src = `${}`
  // hourFourImg.src = `${}`
  // hourFiveImg.src = `${}`
  hourZeroTemp.textContent = `${zeroTemp}°C`
  hourOneTemp.textContent = `${oneHourTemp}°C`
  hourTwoTemp.textContent = `${twoHourTemp}°C`
  hourThreeTemp.textContent = `${threeHourTemp}°C`
  hourFourTemp.textContent = `${fourHourTemp}°C`
  hourFiveTemp.textContent = `${fiveHourTemp}°C`
  hour6Temp.textContent = `${hour6TempSrc}°C`
  hour7Temp.textContent = `${hour7TempSrc}°C`
  hour8Temp.textContent = `${hour8TempSrc}°C`
  hour9Temp.textContent = `${hour9TempSrc}°C`
  hour10Temp.textContent = `${hour10TempSrc}°C`
  hour11Temp.textContent = `${hour11TempSrc}°C`
  hour12Temp.textContent = `${hour12TempSrc}°C`
  hour13Temp.textContent = `${hour13TempSrc}°C`
  hour14Temp.textContent = `${hour14TempSrc}°C`
  hour15Temp.textContent = `${hour15TempSrc}°C`
  hour16Temp.textContent = `${hour16TempSrc}°C`
  hour17Temp.textContent = `${hour17TempSrc}°C`
  hour18Temp.textContent = `${hour18TempSrc}°C`
  hour19Temp.textContent = `${hour19TempSrc}°C`
  hour20Temp.textContent = `${hour20TempSrc}°C`
  hour21Temp.textContent = `${hour21TempSrc}°C`
  hour22Temp.textContent = `${hour22TempSrc}°C`
  hour23Temp.textContent = `${hour23TempSrc}°C`
}