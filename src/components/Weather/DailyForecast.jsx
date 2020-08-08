import React from 'react';

const DailyForecast = ({ data }) => {
  if (data) {
    return (
      <div>
        <h2> {data.name}, {data.sys.country} </h2>
        <div> Temp: {data.main.temp} </div>
      </div>
    );
  } else {
    return (
      <div>Loading...</div>
    );
  }
};

export default DailyForecast;