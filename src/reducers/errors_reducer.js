import { LOCATION_ERROR } from '../actions/location_actions.js';

export default function(state = { locationError: null }, action){
  switch (action.type){
    case LOCATION_ERROR:
      return { locationError: 'Could not receive location' };
    default:
      return state;
  }
}