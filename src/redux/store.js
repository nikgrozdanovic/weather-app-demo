import { configureStore } from '@reduxjs/toolkit'
import weatherDataSliceReducer from './features/WeatherDataSlice'

export const store = configureStore({
  reducer: {
    weatherData: weatherDataSliceReducer,
  },
})
