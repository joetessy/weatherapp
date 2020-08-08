export const SET_LOCATION = 'SET_LOCATION';
export const LOCATION_ERROR = 'LOCATION_ERROR';


export const setLocation = (position) => {
  return {
    type: SET_LOCATION,
    payload: position
  }
}

export const receiveLocationError = () => {
  return {
    type: LOCATION_ERROR,
    payload: 'Could not receive location'
  }
}
