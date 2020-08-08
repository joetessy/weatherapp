import { FETCH_DAILY_FORECAST, FETCH_WEEKLY_FORECAST } from '../actions/weather_actions.js';
import merge from 'lodash/merge';

export default function(state = { dailyForecast: null, weeklyForecast: null }, action){
  switch (action.type){
    case FETCH_DAILY_FORECAST:
      return merge({ dailyForecast: action.payload.data }, state)
    case FETCH_WEEKLY_FORECAST:
      return merge({ weekyForecast: action.payload.data }, state)
    default:
      return state;
  }
}