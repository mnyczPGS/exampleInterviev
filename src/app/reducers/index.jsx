import { combineReducers } from 'redux';
import alertReducer from './alertReducer';

const counterApp = combineReducers({
  alertReducer
})

export default counterApp;