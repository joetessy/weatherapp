// Actions are received by the location_reducer.js
export const SET_LOCATION = 'SET_LOCATION';
export const LOCATION_ERROR = 'LOCATION_ERROR';

// User location coordinates
export const setLocation = (position) => ({
  type: SET_LOCATION,
  payload: position
});

// Error message when user blocks location tracking
export const receiveLocationError = () => ({
  type: LOCATION_ERROR,
  payload: 'Could not receive location data'
});
