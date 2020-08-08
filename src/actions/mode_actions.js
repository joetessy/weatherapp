export const CHANGE_MODE = 'CHANGE_MODE';
// actions are received by mode_reducer.js

// Handles application UI state
export const changeMode = () =>  {
  return { type: CHANGE_MODE }
}