/* global kakao */
import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  Component,
  FunctionComponent,
} from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";
import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";


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
        <KakaoMap weatherData={data}/> //kakaoMap ???????????? ??????
  )
}

function KakaoMap(props) {
  // ?????? ?????? ?????????
  const list = props.weatherData;
  const data = [
    {
      title: "??????",
      latlng: { lat: 37.5666805, lng: 126.9784147 },
      temp_min: list[0].main.temp_min,
      temp_max: list[0].main.temp_max,
      windSpeed: list[0].wind.speed,
      humidity: list[0].main.humidity,
      weather: list[0].weather[0].main,
      icon: list[0].weather[0].icon
    },
    {
      title: "??????",
      latlng: { lat: 37.4562557, lng: 126.7052062 },
      temp_min: list[1].main.temp_min,
      temp_max: list[1].main.temp_max,
      windSpeed: list[1].wind.speed,
      humidity: list[1].main.humidity,
      weather: list[1].weather[0].main,
      icon: list[1].weather[0].icon
    },
    {
      title: "??????",
      latlng: { lat: 35.1595454, lng: 126.8526012 },
      temp_min: list[2].main.temp_min,
      temp_max: list[2].main.temp_max,
      windSpeed: list[2].wind.speed,
      humidity: list[2].main.humidity,
      weather: list[2].weather[0].main,
      icon: list[2].weather[0].icon
    },
    {
      title: "??????",
      latlng: { lat: 35.1795543, lng: 129.0756416 },
      temp_min: list[3].main.temp_min,
      temp_max: list[3].main.temp_max,
      windSpeed: list[3].wind.speed,
      humidity: list[3].main.humidity,
      weather: list[3].weather[0].main,
      icon: list[3].weather[0].icon
    },
    {
      title: "??????",
      latlng: { lat: 35.8714354, lng: 128.601445 },
      temp_min: list[4].main.temp_min,
      temp_max: list[4].main.temp_max,
      windSpeed: list[4].wind.speed,
      humidity: list[4].main.humidity,
      weather: list[4].weather[0].main,
      icon: list[4].weather[0].icon
    },
    {
      title: "??????",
      latlng: { lat: 36.3504119, lng: 127.3845475 },
      temp_min: list[5].main.temp_min,
      temp_max: list[5].main.temp_max,
      windSpeed: list[5].wind.speed,
      humidity: list[5].main.humidity,
      weather: list[5].weather[0].main,
      icon: list[5].weather[0].icon
    },
    {
      title: "??????",
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
        position={position} // ????????? ????????? ??????
        // @ts-ignore
        image={{
          src : `icons/${icon}.svg`, // ?????????????????? ???????????????
          size: {
            width: 60,
            height: 60,
          }, // ?????????????????? ???????????????
          options: {
            offset: {
              x: 35,
              y: 33,
            }, // ?????????????????? ???????????????. ????????? ????????? ???????????? ????????? ???????????? ????????? ???????????????.
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
             <li>????????????: {Math.min(tempMin, tempMax)}</li>
             <li>????????????: {Math.max(tempMin, tempMax)}</li>
             <li>??????: {windSpeed}</li>
             <li>??????: {humidity}</li>
             <li>??????: {weather}</li>
           </ul>
         </div>
        )}

      </MapMarker>
    )
  }

  return (
     <Map // ????????? ????????? Container
      center={{
        // ????????? ????????????
        lat: 36.2504119,
        lng: 127.3845475,
      }}

      style={{
        // ????????? ??????
        width: "450px",
        height: "450px",
      }}
      level={15} // ????????? ?????? ??????
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




const apiKey = "4fcaac8b610bc6ced5f4f237234080dd";

function fetchData(data) {
  
  console.log(data);

  const CityData = data

      
    // ?????? ??????
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CityData}&&units=metric&appid=${apiKey}`;
  
  const promise = fetch(url).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });

  return promise;
}

// ?????? on ??????
function buttonStateChange(e) {
  const selectCityEls = document.getElementsByClassName("selectCity");
  for (const el of selectCityEls) {
    el.classList.remove("on");
  }

  const el = e.currentTarget;
  el.classList.add("on");
}
// ?????? on ?????? end
  

function App() {
  
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
    <>
      <div class="layout-content">
        <div class="layout-menu">

          <div class="main-inner">
            {/* {currentWeather && <CurrentWeather data={currentWeather} />} */}
            <TodayMain data={data} />
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
                  src="img/seoul.webp"
                  alt=""
                  width="300px"
                  height="250px"
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
            <button className="selectCity on" onClick={(e) => { 
                buttonStateChange(e);
                return setCity("Seoul"); }}>SEOUL</button>
            <button className="selectCity" onClick={(e) => {
               buttonStateChange(e);
              return setCity("Incheon"); }}>INCHEON</button>
            <button className="selectCity" onClick={(e) => { 
               buttonStateChange(e);
              return setCity("Gwangju"); }}>GWANGJU</button>
            <button className="selectCity" onClick={(e) => { 
               buttonStateChange(e);
              return setCity("Daejeon"); }}>DAEJEON</button>
            <button className="selectCity" onClick={(e) => {
               buttonStateChange(e);
              return setCity("Daegu"); }}>DAEGU</button>
            <button className="selectCity" onClick={(e) => { 
               buttonStateChange(e);
              return setCity("Busan"); }}>BUSAN</button>
            <button className="selectCity" onClick={(e) => { 
               buttonStateChange(e);
              return setCity("Jeju"); }}>JEJU</button>
            <div class="today-text">
              <Datetext data={data} />
            </div>
          </div>

          <div class="content-wrapper">
            <div class="row">
              <div class="item1">
                {/* {forecast && <Forecast data={forecast} />} */}
                <WeatherTop data={data} />
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
                  <Rechart data={data} city={city} />
                </div>

                <div class="blank4">&nbsp; </div>
                <h3 class="map-text2">Map</h3>

                <div class="item4">
                  <Kmap/>
                </div>
                <div class="blank5"></div>
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
  console.log(props);

  const list = props.data.list;

  console.log(list);

  const data = [
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
    {
      name: moment(list[8].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[16].main.temp),
      Today: Math.round(list[8].main.temp),
      amt: 22,
    },
    {
      name: moment(list[9].dt_txt).format("HH:mm"),
      Tomorrow: Math.round(list[17].main.temp),
      Today: Math.round(list[9].main.temp),
      amt: 22,
    },
  ];
  
  const CustomizedLabel: FunctionComponent<any> = (props: any) => {
    const { x, y, stroke, value } = props;
    
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={16} textAnchor="middle">
        {value}??
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
      <YAxis unit="??" />
      <Tooltip />
      <Legend />
      <Line
        isAnimationActive={false}
        type="monotone"
        dataKey="Today"
        stroke="#0077cc"
        unit="??C"
      >
        <LabelList content={<CustomizedLabel />} />
      </Line>
      <Line type="monotone" dataKey="Tomorrow" stroke="#bbb" unit="??C" />
    </LineChart>
  );
}

// ??????
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
      reveal={Math.round(list[3].main.humidity)} // ?????????
      lineWidth={18}
      background="#f3f3f3"
      lengthAngle={360}
      rounded
      animate
      label={({ dataEntry }) => dataEntry.value + "%"}
    />
  );
};

// ??????
const WindStatus = (props) => {
  console.log(props)

  const list = props.data.list;

  console.log(list);

  return (
    <div className="wind">
      <h2 className="wind-text">{list[3].wind.speed}km/h</h2>
      <h2 className="wind-text">{list[3].wind.deg}??</h2>
    </div>
  )
}


// ?????? ?????? ?????????
const TodayMain = (props) => {

  console.log(props)

  const list = props.data.list;

  console.log(list);

  const todayTime = () => {
    let now = new Date(); // ?????? ?????? ??? ??????
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dayOfWeek = week[now.getDay()];

    return dayOfWeek + ", "; // + todayYear + '.' + todayMonth + '.' + todayDate
  };

  // ??????
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
  // ?????? end

  return (
    <>
      <div className="top">
        <div className="todayimg">
          <img className="todayicon" src={`icons/${list[2].weather[0].icon}.svg`}/>
        </div>
        <h1 className="todayh1">{Math.round(list[2].main.temp)}??C</h1>
        <p className=""></p>
      </div>
      <div className="bottom">
        <p class="today">
          {todayTime()}
          {timer}
        </p>
      </div>
    </>
  )
}

// ?????? ??????

const WeatherTop = (props) => {

  console.log(props)

  const list = props.data.list;

  console.log(list);

  return (
    <>
        <div className="daily-item">
          <div className="daily-0">
            <h3>{moment(list[2].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[2].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[2].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[2].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-1">
            <h3>{moment(list[3].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[3].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[3].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[3].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-2">
            <h3>{moment(list[4].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[4].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[4].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[4].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-3">
            <h3>{moment(list[5].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[5].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[5].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[5].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-4">
            <h3>{moment(list[6].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[6].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[6].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[6].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-5">
            <h3>{moment(list[7].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[7].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[7].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[7].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-6">
            <h3>{moment(list[8].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[8].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[8].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[8].main.feels_like)}??</p>
            </div> 
          </div>
          <div className="daily-7">
            <h3>{moment(list[9].dt_txt).format("HH:mm")}</h3>
            <img className="icon-small" src={`icons/${list[9].weather[0].icon}.svg`}/>
            <div className="temp-text">
              <p className="temp">{Math.round(list[9].main.temp)}??</p>
              <p>&nbsp;</p>
              <p className="feels-like">{Math.round(list[9].main.feels_like)}??</p>
            </div> 
          </div>
        </div>
    </>
  )

}



export default App;
