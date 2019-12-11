import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import selectedBoothReducer from './selectedBoothReducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  selectedBooth: selectedBoothReducer
});