import { combineReducers } from "redux";
import { musicReducer } from '../routes/Home/modules';

export default combineReducers({
  music: musicReducer
});