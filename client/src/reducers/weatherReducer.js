import { 
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL
} from "../constants/weatherConstants"

export const fetchWeatherReducer = (state = { weather: {} }, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return { loading: true };
      case FETCH_WEATHER_SUCCESS:
        return { loading: false, weather: action.payload.weatherReport };
      case FETCH_WEATHER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };