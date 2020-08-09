import { SET_LOCATION } from '../actions/location_actions.js';
// Manages location slice of application state

export default function(state = null, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { lat: action.payload.coords.latitude, lon: action.payload.coords.longitude }
    default:
      return state;
  }
}