import axios from 'axios'
import { 
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAIL
} from "../constants/weatherConstants"

export const fetchWeather = (city='',lat=0, lon=0) => async dispatch => {
    const url = city ? `/api/v1/weather?q=${city}`: lat && lon ? `/api/v1/weather?lat=${lat}&lon=${lon}`:null
    if(!url) return
    try {
        dispatch({ type: FETCH_WEATHER_REQUEST });
        const { data } = await axios.get(url);
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: FETCH_WEATHER_FAIL,
          payload:
            error.response.data && error.response.data.message
              ? error.response.data.message
              : error.response.data,
        });
      }
}

export const fetchWeatherByIp = () => async dispatch => {
    try {
        dispatch({ type: FETCH_WEATHER_REQUEST });
        const { data } = await axios.get(`/api/v1/weather/ip`);
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: FETCH_WEATHER_FAIL,
          payload:
            error.response.data && error.response.data.message
              ? error.response.data.message
              : error.response.data,
        });
      }
}