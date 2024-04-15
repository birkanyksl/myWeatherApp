import { configureStore, createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    forecastedData: null,
    isLoading: false,
    error: null,
  },
  reducer: {
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    setForecastData(state, action) {
      state.forecastedData = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setWeatherData, setForecastData, setLoading, setError } =
  weatherSlice.actions;

export const selectWeatherData = (state) => state.weather.weatherData;
export const selectForecastData = (state) => state.weather.forecastData;
export const selectIsLoading = (state) => state.weather.isLoading;
export const selectError = (state) => state.weather.error;

const reducer = {
  weather: weatherSlice.reducer,
};

const store = configureStore({
  reducer,
});
export default store;
