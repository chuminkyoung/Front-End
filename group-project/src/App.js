/*
# GROUP PROJECT

# API Server
- 공공데이터포털
https://www.data.go.kr/index.do

# Map API
- KakaoMap
https://apis.map.kakao.com/
- React-KakaoMap
https://react-kakao-maps-sdk.jaeseokim.dev/

# Chart library
- Rechart
https://recharts.org/en-US

# Deploy
- Github pages
https://github.com/gitname/react-gh-pages

# tailwind react
https://tailwindcss.com/docs/guides/create-react-app

# Sample
https://tvvmvn.github.io/react-gh-pages/
*/


import React, { useState, useContext, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';


/*
// 강사님꺼 복붙
function fetchData(searchYearCd) {
  const url = "https://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=OyfIz4dyXiKWDiSd0F9QRSyAEDoNbZNbj8IUw6mpuLocJnQWUo2aIAXNJIQQviyxFJT%2FR0jO1k4zsqvo9jLj9Q%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=20100101&endDt=20100601&stnIds=108"
  const promise = fetch(url)
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })

  return promise;
}
*/

export default App;

const apiKey = "5c7a12498a887e710f277c8408dc5d33";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&lang=kr`;
 

function App() {
  //const [error, setError] = useState(null);
  //const [isLoaded, setIsLoaded] = useState(false);
  //const [data, setData] = useState(null);
  //const [searchYearCd, setSearchYearCd] = useState(2015);

  //console.log(data);
/*
  useEffect(() => {
    // setIsLoaded(false);

    fetchData(searchYearCd)
    .then(data => {
      setData(data);
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [searchYearCd])


  if (error) {
    return <p>failed to fetch</p>
  }
  if (!isLoaded) {
    return <p>fetching data...</p>
  }
*/








/*
  // 강사님이랑 했던 내용
  // style
  const style = {

    weather_box: {
      display: "flex",
    },

    weather_list: {

    }

  }


  //   {data.response.body.items.item[i].tm}
  //   {data.response.body.items.item[i].stnNm}
  //   {data.response.body.items.item[i].minTa}
  //   {data.response.body.items.item[i].maxTa}


  //const items = data.response.body.items.item;

  return (
    <div style={{ margin: "1rem"}} className="">
      <ul style={style.weather_box}>
        {items.map(item => (
          <li style={style.weather_list}>
              <p>{item.tm}</p>
              <p>{item.stnNm}</p>
              <p>{item.minTa}</p>
              <p>{item.maxTa}</p>
          </li>
        ))}
      </ul>
    </div>
  )
*/

}






// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5c7a12498a887e710f277c8408dc5d33

import React from 'react';
import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;






