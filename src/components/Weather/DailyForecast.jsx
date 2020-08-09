import React from 'react';

const DailyForecast = ({ data, type }) => {
  if (data) {
    const iconUrl = "http://openweathermap.org/img/w/" + data.icon + ".png";
    return (
      <div>
        { type === 'one_day' &&
          <div>
            <h2> {data.city}, {data.country}
            </h2>
            <div>Temp: {data.temp}&deg;</div>
          </div>
        }
        <div>High: {data.temp_max}&deg;</div>
        <div>Low: {data.temp_min}&deg;</div>
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