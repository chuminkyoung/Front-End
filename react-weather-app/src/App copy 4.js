import './App.css';
import './script';
import { useState } from 'react';

function App() {

  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM'

  return (
    <>
      <div class="container">
        <div class="current-info">

            <div class="place-container">s
                <div class="time-zone" id="time-zone">Asia/krea</div>
                <div id="COUNTRY" class="country">KR</div>
            </div>
        </div>

    </div>

    <div class="future-forecast">
        <div class="today" id="current-temp">
            <div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon"/>
                <div class="temp">
                    25.6&#176;
                </div>
                <div class="city" id="city">
                    
                </div>
            </div>

            <div class="other">
                <div class="time" id="time">
                    12:30 <span id="am-pm">${ampm}</span>
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
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon"/>
                <div class="temp">25.6&#176; / 35.6&#176;</div>
            </div>
            <div class="weather-forecast-item">
                <div class="day">Wed</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon"/>
                <div class="temp">25.6&#176; / 35.6&#176;</div>
            </div>
            <div class="weather-forecast-item">
                <div class="day">Thur</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon"/>
                <div class="temp">25.6&#176; / 35.6&#176;</div>
            </div>
            <div class="weather-forecast-item">
                <div class="day">Fri</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon"/>
                <div class="temp">25.6&#176; / 35.6&#176;</div>
            </div>
            <div class="weather-forecast-item">
                <div class="day">Sat</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="w-icon"/>
                <div class="temp">25.6&#176; / 35.6&#176;</div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
