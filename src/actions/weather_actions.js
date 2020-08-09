import axios from 'axios';
export const FETCH_DAILY_FORECAST = 'FETCH_DAILY_FORECAST';
export const FETCH_WEEKLY_FORECAST = 'FETCH_WEEKLY_FORECAST';
export const WEATHER_ERROR = 'WEATHER_ERROR';

// actions are received by weather_reducer.js

const API_KEY = '65399758448a1fec3cbd4e8a6af1972c';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/';

// fetches data from openweather.org api for both UI states using location coordinates and mode
export const fetchWeather = ({ lat, lon }, mode) => dispatch => {
  let type = mode === 'weather' ? FETCH_DAILY_FORECAST : FETCH_WEEKLY_FORECAST
  let url = `${ROOT_URL}${mode}?units=imperial&lat=${lat}&lon=${lon}&cnt=5&apiKey=${API_KEY}`;

  return axios.get(url).then((data) => {
    dispatch(receiveWeather({ data, type }))
  }).catch(() =>  {
    dispatch(receiveWeatherError());
  });
}

// Weather data
const receiveWeather = ({ data, type }) => {
  return {
    type,
    payload: data
  };
};

// Error message request to fetch data fails
const receiveWeatherError = () => {
  return {
    type: WEATHER_ERROR,
    payload: 'Could not receive weather data'
  }; 
}