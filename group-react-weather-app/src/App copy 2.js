/* global kakao */
import React, {useState, useContext, useEffect, useRef, Component, FunctionComponent,} from "react";

import "./App.css";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList,
} from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";
import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a1cb2c6c06ebd31765e0e78e52f467a6"></script>

function Kmap(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=seoul&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=incheon&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=gwangju&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=busan&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=daegu&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=daejeon&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=jeju city&units=metric&appid=7cfb4fd4d5e9110ac1b68b623f95f08b`),
    ])
    .then(([res1, res2, res3, res4, res5, res6, res7]) => {
      return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json()])
    })
    .then(([data1, data2, data3, data4, data5, data6, data7]) => {

      setData([...data, data1, data2, data3, data4, data5, data6, data7])
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])
    

  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching data...</p>
  }

  return(
        <KakaoMap weatherData={data}/> //kakaoMap 컴포넌트 호출
  )
}

function KakaoMap(props) {
  // 마커 찍을 포지션
  const list = props.weatherData;
  const data = [
    {
      title: "서울",
      latlng: { lat: 37.5666805, lng: 126.9784147 },
      temp_min: list[0].main.temp_min,
      temp_max: list[0].main.temp_max,
      windSpeed: list[0].wind.speed,
      humidity: list[0].main.humidity,
      weather: list[0].weather[0].main,
      icon: list[0].weather[0].icon
    },
    {
      title: "인천",
      latlng: { lat: 37.4562557, lng: 126.7052062 },
      temp_min: list[1].main.temp_min,
      temp_max: list[1].main.temp_max,
      windSpeed: list[1].wind.speed,
      humidity: list[1].main.humidity,
      weather: list[1].weather[0].main,
      icon: list[1].weather[0].icon
    },
    {
      title: "광주",
      latlng: { lat: 35.1595454, lng: 126.8526012 },
      temp_min: list[2].main.temp_min,
      temp_max: list[2].main.temp_max,
      windSpeed: list[2].wind.speed,
      humidity: list[2].main.humidity,
      weather: list[2].weather[0].main,
      icon: list[2].weather[0].icon
    },
    {
      title: "부산",
      latlng: { lat: 35.1795543, lng: 129.0756416 },
      temp_min: list[3].main.temp_min,
      temp_max: list[3].main.temp_max,
      windSpeed: list[3].wind.speed,
      humidity: list[3].main.humidity,
      weather: list[3].weather[0].main,
      icon: list[3].weather[0].icon
    },
    {
      title: "대구",
      latlng: { lat: 35.8714354, lng: 128.601445 },
      temp_min: list[4].main.temp_min,
      temp_max: list[4].main.temp_max,
      windSpeed: list[4].wind.speed,
      humidity: list[4].main.humidity,
      weather: list[4].weather[0].main,
      icon: list[4].weather[0].icon
    },
    {
      title: "대전",
      latlng: { lat: 36.3504119, lng: 127.3845475 },
      temp_min: list[5].main.temp_min,
      temp_max: list[5].main.temp_max,
      windSpeed: list[5].wind.speed,
      humidity: list[5].main.humidity,
      weather: list[5].weather[0].main,
      icon: list[5].weather[0].icon
    },
    {
      title: "제주",
      latlng: { lat: 33.4996213, lng: 126.5311884 },
      temp_min: list[6].main.temp_min,
      temp_max: list[6].main.temp_max,
      windSpeed: list[6].wind.speed,
      humidity: list[6].main.humidity,
      weather: list[6].weather[0].main,
      icon: list[6].weather[0].icon
    },

  ]

  const EventMarkerContainer = ({ position, content, tempMin, tempMax, windSpeed, humidity, weather, icon}) => {
    // const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        image={{
          src : `icons/${icon}.svg`, // 마커이미지의 주소입니다
          size: {
            width: 60,
            height: 60,
          }, // 마커이미지의 크기입니다
          options: {
            offset: {
              x: 35,
              y: 33,
            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          },
        }}
        // image={src}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && (
           <div style={{width: "145px", padding: "10px 30px 0 0", color: "#000" , textAlign: "center"}}>
            <div style={{color: "blue"}}>
              {content}
            </div>
           <ul style={{listStyleType: "none", textAlign: "left", color: "#5f5f5f"}}>
             <li>최저온도: {Math.min(tempMin, tempMax)}</li>
             <li>최고온도: {Math.max(tempMin, tempMax)}</li>
             <li>풍속: {windSpeed}</li>
             <li>습도: {humidity}</li>
             <li>날씨: {weather}</li>
           </ul>
         </div>
        )}

      </MapMarker>
    )
  }

  return (
     <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 36.2504119,
        lng: 127.3845475,
      }}

      style={{
        // 지도의 크기
        width: "450px",
        height: "450px",
      }}
      level={15} // 지도의 확대 레벨
    >
      {data.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          position={value.latlng}
          content={value.title}
          tempMin={value.temp_min}
          tempMax={value.temp_max}
          windSpeed={value.windSpeed}
          humidity={value.humidity}
          weather={value.weather}
          icon={value.icon}
        />
      ))}
    </Map>
  )
}


// 민경
let isLoaded = false;

// 지역 버튼
const Search = ({ onSearchChange }) => {
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
            };
          }),
        };
      })
      .catch((err) => console.error(err))
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

    let searchData = {};
    switch (city) {
      case "Incheon":
        searchData = { label: "Incheon", value: "37.463888888 126.648611111" };
        break;
      case "Jeju":
        searchData = { label: "Jeju", value: "33.1127 126.0843" };
        break;
      case "Busan":
        searchData = { label: "Busan", value: "35.1795543 129.0756416" };
        break;
      case "Gwangju":
        searchData = { label: "Gwangju", value: "35.1595454 126.8526012" };
        break;
      case "Daegu":
        searchData = { label: "Daegu", value: "35.8714354 128.601445" };
        break;
      case "Daejeon":
        searchData = { label: "Daejeon", value: "36.3504119 127.3845475" };
        break;
      default:
        searchData = { label: "Seoul", value: "37.56 126.99" };
    }
    setSearch(searchData);
    onSearchChange(searchData);
    
    // 차트
    const CityData = "Seoul"

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

  
  console.log(search)

  return (
    <div class="button_box">
      <button id="case1"
        type="button"
        className="on selectCity"
        data-city="
       "
        onClick={handleOnClick}
      >
        SEOUL
      </button>
      <button id="case2" className="selectCity" type="button" data-city="Incheon" onClick={handleOnClick}>
        INCHEON
      </button>
      <button id="case3" className="selectCity" type="button" data-city="Gwangju" onClick={handleOnClick}>
        GWANGJU
      </button>
      <button id="case4" className="selectCity" type="button" data-city="Busan" onClick={handleOnClick}>
        BUSAN
      </button>
      <button id="case5" className="selectCity" type="button" data-city="Daegu" onClick={handleOnClick}>
        DAEGU
      </button>
      <button id="case6" className="selectCity" type="button" data-city="Daejeon" onClick={handleOnClick}>
        DAEJEON
      </button>
      <button id="case7" className="selectCity" type="button" data-city="Jeju" onClick={handleOnClick}>
        JEJU
      </button>
    </div>
  );
};
// 지역 버튼 end

// 요일
const WEEK_DAYS = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <div className="daily-box">
        {data.list.splice(0, 7).map((item, idx) => (
          <div className="daily-item">
            <p className="day">{forecastDays[idx]}</p>
            <p className="img">
              <img
                src={`icons/${item.weather[0].icon}.svg`}
                className="icon-small"
                alt="weather"
              />
            </p>
            {/* <label className="description">{item.weather[0].description}</label> */}
            <div className="min-max">
              <p className="max">{Math.round(item.main.feels_like)}°</p> /{" "}
              <p className="min">{Math.round(item.main.temp_min)}°</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
// 요일 end

// 상단 날씨
const CurrentWeather = ({ data }) => {
  console.log(data)
  const todayTime = () => {
    let now = new Date(); // 현재 날짜 및 시간
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayOfWeek = week[now.getDay()];

    return dayOfWeek + ", "; // + todayYear + '.' + todayMonth + '.' + todayDate
  };

  // 시간
  const [timer, setTimer] = useState("00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();
  // 시간 end

  return (
    <div className="weather">
      {/* <p className="city_name">{String(data.city)} 날씨</p> */}

      <div className="top">
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.svg`}
        />
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

};
// 상단 날씨 end



const apiKey = "4fcaac8b610bc6ced5f4f237234080dd";

function fetchData(data) {
  
  console.log(data);

  const CityData = data

      
    // 변수 넣기
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CityData}&&units=metric&appid=${apiKey}`;
  
  const promise = fetch(url).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });

  return promise;
}
  
function App() {
  // 민경
  useEffect(() => {
    try {
      if (!isLoaded) {
        handleOnSearchChange({ label: "Seoul", value: "37.56 126.99" });
        isLoaded = true;
      }
    } catch (err) {}
  });

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("Seoul");
  
  console.log(data);
  
  useEffect(() => {

    fetchData(city)
    .then(data => {
      setData(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [city])

  if (error) {
    return <p>failed to fetch</p>;
  }
  if (!isLoaded) {
    return <p>fetching data...</p>;
  }
  return (
    // <div style={{ margin: "1rem" }}>
    //   <div>
    //     <h2>Chart</h2>
    //     <div style={{ height: "200px" }}>
    //       <Rechart data={data} />
    //       {/* {data.list[0].main.temp} */}
    //     </div>
    //   </div>

    //   <div style={{
    //     paddingTop: '200px',
    //     width: '200px',
    //     height: '200px',
    //   }}>
    //     <Chart />
    //   </div>
    // </div>
    <>
      <div class="layout-content">
        <div class="layout-menu">

          <div class="main-inner">
            {currentWeather && <CurrentWeather data={currentWeather} />}

            <hr />

            <ul class="weather-text">
              <li>
                <img src="img/rainy-5.svg" alt="" />
                <span>Yoo Hyun Jung</span>
              </li>
              <li>
                <img src="img/day.svg" alt="" />
                <span>Chu Min Kyoung</span>
              </li>
              <li>
                <img src="img/night.svg" alt="" />
                <span>Kim Chan Mi</span>
              </li>
            </ul>

            <div class="city-box">
              <div class="city-img">
                <img
                  src="../../img/seoul.webp"
                  alt=""
                  width="300px"
                  height="300px"
                />
              </div>
              <div class="city-text">
                <p>Weather of Korea</p>
              </div>
            </div>
          </div>
        </div>

        <div class="layout-page">
          <div class="top-item">
            <Search onSearchChange={handleOnSearchChange} />
            <div class="today-text">
              <Datetext data={data} />
            </div>
          </div>

          <div class="content-wrapper">
            <div class="row">
              <div class="item1">
                {forecast && <Forecast data={forecast} />}
              </div>

              <div class="blank2">&nbsp; </div>

              <div class="item2-2">
                <p>Wind Status</p>
                <WindStatus class="windspeed" data={data}/>
              </div>

              <div class="blank3">&nbsp; </div>
              
              <div class="item2">
                <p>Humidity</p>
                <Chart class="humidity" data={data}/>
              </div>



              <div class="blank">
                <h3>Today's Chart</h3>
                <h3 class="map-text">Map</h3>
              </div>

              <div class="down">
                <div class="item3">
                  <Rechart data={data} />
                </div>

                <div class="blank2">&nbsp; </div>

                <div class="item4">
                  {/* 지도 넣기 */}
                  <Kmap/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div class="footer-content">
            <div class="project-text"></div>
            <div class="project-name"></div>
          </div>
        </footer>
      </div>
    </>
  );
}

function Datetext(props) {
  const list = props.data.list;

  return <p>{moment(list[1].dt_txt).format(" YYYY.MM.DD")}</p>;
}

// CHART
function Rechart(props) {

  const list = props.data.list;

  // list[0].dt_txt

  // list[0].name = "Heineken"

  // name: list[1].dt_txt,

  // time = moment().format('HH:mm')

  const data = [
    {
      name: moment(list[0].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[8].main.temp),
      Today: Math.round(list[0].main.temp),
      amt: 22,
    },
    {
      name: moment(list[1].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[9].main.temp),
      Today: Math.round(list[1].main.temp),
      amt: 22,
    },
    {
      name: moment(list[2].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[10].main.temp),
      Today: Math.round(list[2].main.temp),
      amt: 20,
    },
    {
      name: moment(list[3].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[11].main.temp),
      Today: Math.round(list[3].main.temp),
      amt: 21,
    },
    {
      name: moment(list[4].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[12].main.temp),
      Today: Math.round(list[4].main.temp),
      amt: 25,
    },
    {
      name: moment(list[5].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[13].main.temp),
      Today: Math.round(list[5].main.temp),
      amt: 21,
    },
    {
      name: moment(list[6].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[14].main.temp),
      Today: Math.round(list[6].main.temp),
      amt: 21,
    },
    {
      name: moment(list[7].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[15].main.temp),
      Today: Math.round(list[7].main.temp),
      amt: 24,
    },
  ];

  const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={16} textAnchor="middle">
        {value}°
      </text>
    );
  };

  const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <LineChart
      width={850}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
      <YAxis unit="°" />
      <Tooltip />
      <Legend />
      <Line
        isAnimationActive={false}
        type="monotone"
        dataKey="Today"
        stroke="#0077cc"
        unit="°C"
      >
        <LabelList content={<CustomizedLabel />} />
      </Line>
      <Line type="monotone" dataKey="Tomorrow" stroke="#bbb" unit="°C" />
    </LineChart>
  );
}

// 습도
const Chart = (props) => {
  
  console.log(props)

  const list = props.data.list;

  console.log(list);
  
  return (
    <PieChart
      width={150}
      height={150}
      data={[
        {
          value: Math.round(list[3].main.humidity),
          color: "#3d94ec",
          name: "name1",
        },
      ]}
      reveal={Math.round(list[3].main.humidity)} // 퍼센트
      lineWidth={18}
      background="#f3f3f3"
      lengthAngle={360}
      rounded
      animate
      label={({ dataEntry }) => dataEntry.value + "%"}
    />
  );
};

// 풍속
const WindStatus = (props) => {
  console.log(props)

  const list = props.data.list;

  console.log(list);

  return (
    <div className="wind">
      <h2 className="wind-text">{list[3].wind.speed}km/h</h2>
      <h2 className="wind-text">{list[3].wind.deg}°</h2>
    </div>
  )
}

// 민경
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "af7623efffmsh7adfbde82f65247p1206b9jsn7841b45f062e",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "7cfb4fd4d5e9110ac1b68b623f95f08b";
// api end

export default App;
