import React from "react";

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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

export default Forecast;