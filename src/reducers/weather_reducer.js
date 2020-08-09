import { FETCH_DAILY_FORECAST, FETCH_WEEKLY_FORECAST } from '../actions/weather_actions.js';
// Manages weather slice of state 

import merge from 'lodash/merge';
export default function(state = { dailyForecast: null }, action) {
  switch (action.type) {
    case FETCH_DAILY_FORECAST:
      return merge({ dailyForecast: action.payload.data });
    case FETCH_WEEKLY_FORECAST:
      return merge({ weeklyForecast: action.payload.data }, state)
    default:
      return state;
  }
}