import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchWeatherData from '../api/WeatherAPI';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
  const response = await fetchWeatherData();
  return response;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { data: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default weatherSlice.reducer;
