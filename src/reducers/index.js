import { combineReducers  } from 'redux';
import mode from './mode_reducer';

const rootReducer = combineReducers({ mode });
export default rootReducer;