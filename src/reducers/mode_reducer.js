import { CHANGE_MODE } from '../actions/mode_actions.js';
// Manages UI slice of state

export default function(state = 1, action){
  switch (action.type){
    case CHANGE_MODE:
      return state === 1 ? 2 : 1;
    default:
      return state;
  }
}