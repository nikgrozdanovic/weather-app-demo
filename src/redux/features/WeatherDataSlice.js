import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
  weather: {},
}

export const weatherDataSlice = createSlice({
  name: 'weatherData',
  initialState: { value: initialValue },
  reducers: {
    getWeatherData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getWeatherData } = weatherDataSlice.actions
export default weatherDataSlice.reducer
