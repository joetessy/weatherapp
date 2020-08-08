import axios from 'axios';
export const FETCH_DAILY_FORECAST = 'FETCH_DAILY_FORECAST';
export const FETCH_WEEKLY_FORECAST = 'FETCH_WEEKLY_FORECAST';
// actions are received by weather_reducer.js

const API_KEY = '65399758448a1fec3cbd4e8a6af1972c';
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/';

// fetches data from openweather.org api for both UI states using location coordinates and mode
export const fetchWeather = ({lat, lon }, mode) => {
  let type = mode === 'weather' ? FETCH_DAILY_FORECAST : FETCH_WEEKLY_FORECAST
  let url = `${ROOT_URL}${mode}?units=imperial&lat=${lat}&lon=${lon}&cnt=5&apiKey=${API_KEY}`;
  const request = axios.get(url);
  
  return {
    type,
    payload: request
  };
}