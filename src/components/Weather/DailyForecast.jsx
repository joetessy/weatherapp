import React from 'react';

const DailyForecast = ({ data, type }) => {
  if (data) {
    const iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    return (
      <div>
        { type === 'one_day' &&
          <div>
            <h2> {data.name}, {data.sys.country}
            </h2>
            <div>Temp: {data.main.temp}</div>
          </div>
        }
        <div>High: {data.main.temp_max}</div>
        <div>Low: {data.main.temp_min}</div>
        <div id="icon">
          <img src={iconUrl} alt="Weather icon"/>
        </div>
        <br/>
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
};

export default DailyForecast;