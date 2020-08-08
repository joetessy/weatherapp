import axios from 'axios';
const API_KEY = '65399758448a1fec3cbd4e8a6af1972c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = () => {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);
  debugger;
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}