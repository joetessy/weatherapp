export const SET_LOCATION = 'SET_LOCATION';
export const LOCATION_ERROR = 'LOCATION_ERROR';
// actions are received by the location_reducer.js

// User location coordinates
export const setLocation = (position) => {
  return {
    type: SET_LOCATION,
    payload: position
  }
}

// Error message when user blocks location tracking
export const receiveLocationError = () => {
  return {
    type: LOCATION_ERROR,
    payload: 'Could not receive location data'
  }
}
