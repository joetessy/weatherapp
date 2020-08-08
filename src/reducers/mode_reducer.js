import { CHANGE_MODE } from '../actions/mode_actions.js';

export default function(state = 1, action){
  switch (action.type){
    case CHANGE_MODE:
      return state === 1 ? 2 : 1;
    default:
      return state;
  }
}