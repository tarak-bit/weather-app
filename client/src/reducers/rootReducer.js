import { combineReducers } from "redux";
import { fetchWeatherReducer } from "./weatherReducer";


export default combineReducers({
  weather:fetchWeatherReducer
});