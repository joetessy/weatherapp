import { LOCATION_ERROR } from '../actions/location_actions.js';
import { WEATHER_ERROR } from '../actions/weather_actions.js';
// Manages errors slice of application state

export default function(state = { locationError: null, weatherError: null }, action){
  switch (action.type){
    case LOCATION_ERROR:
      return { locationError: action.payload };
    case WEATHER_ERROR:
      return { weatherError: action.payload }
    default:
      return state;
  }
}