import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import movieReducer from './movieSlice';
import cricketReducer from "./cricketSlice"

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    movies: movieReducer,
    cricket: cricketReducer
  },
});

export default store;
