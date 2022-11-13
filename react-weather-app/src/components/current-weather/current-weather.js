
// 상단 날씨
const CurrentWeather = ({data}) => {
    
    const todayTime = () => {
        let now = new Date();  // 현재 날짜 및 시간
        let todayYear = now.getFullYear(); 
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        let dayOfWeek = week[now.getDay()];

        return dayOfWeek + ', ' + todayYear + '.' + todayMonth + '.' + todayDate
    }

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
                </p>
            </div>
        </div>
    );
}

export  default CurrentWeather;