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
                  console.log(response.json())
              })
              .catch(err => {
                console.error(err);
              });
        })

  })
  .catch(error => {
    console.error('Error fetching IP:', error);
  });

function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}