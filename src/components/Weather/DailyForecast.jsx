import React from 'react';

const DailyForecast = ({ data, type }) => {
  const iconUrl = "https://openweathermap.org/img/w/" + data.icon + ".png";

  return (
    <div className="weather-info">
      <div id="icon"><img src={iconUrl} alt="Weather icon"/></div>
      { type === 'one_day' ? <div>Temp: {data.temp}&deg;</div>  : '' }
      { type === 'weekly' ? <div>High: {data.temp_max}&deg;</div> : '' }
      { type === 'weekly' ? <div>Low: {data.temp_min}&deg;</div> : '' }
      <br/>
    </div>
  );
};

export default DailyForecast;