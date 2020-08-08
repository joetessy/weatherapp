import { combineReducers  } from 'redux';
import mode from './mode_reducer';
import weather from './weather_reducer';
import location from './location_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({ mode, location, weather, errors });
export default rootReducer;