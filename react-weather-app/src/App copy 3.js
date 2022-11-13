import './App.css';
import { useState } from 'react';

function App() {
  
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  
  const API_KEY = '5c7a12498a887e710f277c8408dc5d33';
  
  setInterval(() => {
      // const time = new Date();
      // const month = time.getMonth();
      // const date = time.getDate();
      // const day = time.getDay();
      // const hour = time.getHours();
      // const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
      // const minutes = time.getMinutes();
      // const ampm = hour >= 12 ? 'PM' : 'AM'
  
      //timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + '' + `<span id="am-pm">${ampm}</span>`
  
      //dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]
  
  
  }, 1000);
  
  
  // 현재 위도 경도
  getWeatherData()
  function getWeatherData() {
      navigator.geolocation.getCurrentPosition((success) => {
  
          let {latitude, longitude} = success.coords;
  
          fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
              
              console.log(data)
              showWeatherData(data);
  
          })
      })   
  }
  
  function showWeatherData (data){
      let otherDayForcast = ''
      data.daily.forEach((day, idx) => {
          if(idx == 0){
  
          }else{
              showWeatherData += `
              <div class="weather-forecast-item">
                  <div class="day">Sat</div>
                  <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="weather icon" class="w-icon">
                  <div class="temp">${data.main.temp}&#176; / ${data.main.temp}&#176;</div>
              </div>
              `
          }
      })
  }



  return (
    <>
      <div class="future-forecast">
          <div class="today" id="current-temp">
              <div>
                  <div class="temp">
                      25.6&#176;
                  </div>
                  <div class="city" id="city">
                    {/* {city.name} */}
                  </div>
              </div>

              <div class="other">
                  <div class="time" id="time">
                      12:30 <span id="am-pm">PM</span>
                  </div>
                  <div class="date" id="date">
                      Monday, 24 May
                  </div>

                  <div class="temp">25.6&#176; / 35.6&#176;</div>
              </div>
          </div>

          <div class="weather-forecast" id="weather-forecast">
              <div class="weather-forecast-item">
                  <div class="day">Tue</div>
                  {/* <img alt="weather" className="weather-icon" src={`icons/${[0].icon}.svg`} /> */}
                  <div class="temp">25.6&#176; / 35.6&#176;</div>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
