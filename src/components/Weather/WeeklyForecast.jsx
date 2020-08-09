import React from 'react';
import DailyForecast from './DailyForecast';

const WeeklyForecast = ({ data }) => {
    let forecasts = data.list.map((forecast, idx) => formatDataForDailyForecast(forecast, idx));
    return (
      <div>
        <h2>{data.city.name}, {data.city.country}</h2>
        {forecasts}
      </div>
    );
};

// Formats the weekly forcast information returned by the API and returns the component
const formatDataForDailyForecast = (forecast, idx) => {
  let data = { 
    icon: forecast.weather[0].icon,
    temp: forecast.temp.day,
    temp_min: forecast.temp.min,
    temp_max: forecast.temp.max
  }
  return <DailyForecast data={data} key={idx} type="weekly"/>;
}

export default WeeklyForecast;