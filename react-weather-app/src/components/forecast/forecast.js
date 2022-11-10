import React from "react";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      <label className="title">Daily</label>
     
        {data.list.splice(0, 7).map((item, idx) => (
          
            <div className="daily-item">
                <img src={`icons/${item.weather[0].icon}.svg`} className="icon-small" alt="weather" />
                <label className="day">{forecastDays[idx]}</label>
                <label className="description">{item.weather[0].description}</label>
                <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
            </div>

        ))}
   
    </>
  );
};

export default Forecast;