import './App.css';

import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

let isLoaded = false;



// 지역 버튼
const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);
  // Seoul, KR

  const loadOptions = (inputValue) => {
      return fetch(
          `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
          geoApiOptions
      )
      
      .then((response) => response.json())
      .then((response) => {
          return {
              options: response.data.map((city) => {
                  return {
                      value: `${city.latitude} ${city.longitude}`,
                      label: `${city.name}, ${city.countryCode}`,
                  }
              })
          }
      })
      .catch((err) => console.error(err));
  };

  const handleOnchange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData);
  };
 const handleOnClick = (e) => {
      const selEls = document.getElementsByClassName("selectCity");
      for(const el of selEls){
        el.classList.remove("on");
      }

      const el = e.currentTarget;
      el.classList.add("on");

      const city = el.dataset.city;

      // 버튼 효과
      // setCurrentClick(e.target.id);
      // console.log(e.target.id);
      // 버튼 효과 end

       let searchData = {};
       switch (city) {
          case "인천" : 
             searchData = { label : "인천",  value : "37.463888888 126.648611111" };
             break;
          // case "강원도" : 
          //    searchData = { label : "강원도", value : "37.8813153 127.7299707"};
          //    break;
          case "제주" : 
             searchData = { label : "제주", value : "33.1127 126.0843"};
             break;
          case "부산" : 
             searchData = { label : "부산", value : "35.1795543 129.0756416"};
             break;
          // case "일산" : 
          //    searchData = { label : "일산", value : "37.6486290 126.7588420"};
          //    break;
          case "광주" : 
             searchData = { label : "광주", value : "35.1595454 126.8526012"};
             break;
          case "대구" : 
             searchData = { label : "대구", value : "35.8714354 128.601445"};
             break;
          case "대전" : 
             searchData = { label : "대전", value : "36.3504119 127.3845475"};
             break;
          // case "울산" : 
          //    searchData = { label : "울산", value : "35.5936 129.352"};
          //    break;
          default : 
             searchData = { label : "서울",  value : "37.56 126.99"};
       }
       setSearch(searchData);
       onSearchChange(searchData);

 };

 // 버튼 on 효과
 const [currentClick, setCurrentClick] = React.useState(null);
 const [prevClick, setPrevClick] = React.useState(null);


 React.useEffect(
  (e) => {
    const btn_on = document.querySelector("#case1");
    
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      console.log(current);
      current.className = "on";
    }

    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.className = " ";
    }
    setPrevClick(currentClick);
  },
  [currentClick]
);
 // 버튼 on 효과 end


  return (
    <div class="button_box">
       <button className='selectCity on' type="button" data-city="서울" id="case1" onClick={handleOnClick}>서울</button>
       <button className='selectCity' type="button" data-city="인천" id="case2" onClick={handleOnClick}>인천</button>
       <button className='selectCity' type="button" data-city="광주" id="case3" onClick={handleOnClick}>광주</button>
       <button className='selectCity' type="button" data-city="부산" id="case4" onClick={handleOnClick}>부산</button>
       <button className='selectCity' type="button" data-city="대구" id="case5" onClick={handleOnClick}>대구</button>
       <button className='selectCity' type="button" data-city="대전" id="case6" onClick={handleOnClick}>대전</button>
       <button className='selectCity' type="button" data-city="제주" id="case7" onClick={handleOnClick}>제주</button>
    </div>
  )
}
// 지역 버튼 end



// 요일
const WEEK_DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <div className="daily-box">
        {data.list.splice(0, 7).map((item, idx) => (
          <div className="daily-item">
              <p className="day">{forecastDays[idx]}</p>
              <p className="img">
                <img src={`icons/${item.weather[0].icon}.svg`} className="icon-small" alt="weather" />
              </p>
              {/* <label className="description">{item.weather[0].description}</label> */}
              <div className="min-max">
                <p className="max">{Math.round(item.main.feels_like)}°</p> / <p className="min">{Math.round(item.main.temp_min)}°</p>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};
// 요일 end



// 상단 날씨
const CurrentWeather = ({data}) => {
    
  const todayTime = () => {
      let now = new Date();  // 현재 날짜 및 시간
      // let todayYear = now.getFullYear(); 
      // let todayMonth = now.getMonth() + 1;
      // let todayDate = now.getDate();
      const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      let dayOfWeek = week[now.getDay()];

      return dayOfWeek + ', ' // + todayYear + '.' + todayMonth + '.' + todayDate
  }


  // 시간
  const [timer, setTimer] = useState("00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()
  // 시간 end

  return (
      <div className="weather">
          {/* <p className="city_name">{data.city} 날씨</p> */}
          
          <div className="top">
              <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.svg`} />
          </div>
          <div className="bottom">
              <p className="temperature">{Math.round(data.main.feels_like)}°C</p>
              <p class="today">
                  {todayTime()}
                  {timer}
              </p>
          </div>
      </div>
  );
}
// 상단 날씨 end


// App
function App() {
  useEffect(() => {
    try {
      if (!isLoaded) {
        handleOnSearchChange({ label : "서울",  value : "37.56 126.99"});
        isLoaded = true;
      }
    } catch (err) {
      
    } 
  });
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label , ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
// App end


// api
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'af7623efffmsh7adfbde82f65247p1206b9jsn7841b45f062e',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "f451e9583414c9934f28387f4f854acf";
// api end


export default App;

// // 내꺼
// 5c7a12498a887e710f277c8408dc5d33

// // 찬미씨꺼
// f451e9583414c9934f28387f4f854acf