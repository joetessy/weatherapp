import React from 'react';
import DailyForecast from './DailyForecast';

const WeeklyForecast = ({ data }) => {
  if ( data && data.list ) {
    let forecasts = data.list.map((forecast, idx) => {
      let data = formatDataForDailyForecast(forecast);
      return (
        <DailyForecast data={data} key={idx}/>
      )
    })
    return (
      <div>
        <h2>{data.city.name}, {data.city.country}</h2>
        {forecasts}
      </div>
    );
  } else {
    return ( <div>Loading...</div>);
  }
};


// Formats the weekly forcast information returned byb the API to be recieved by the DailyForecast component
const formatDataForDailyForecast = (forecast) => {
  return { 
    weather: [{ icon: forecast.weather[0].icon }],
    main: { 
      temp: forecast.temp.day, 
      temp_min: forecast.temp.min, 
      temp_max: forecast.temp.max 
    }
  }
}
export default WeeklyForecast;
