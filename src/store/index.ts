import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherSlice';
import movieReducer from '../slices/movieSlice';
import cricketReducer from "../slices/cricketSlice"
import musicReducer from "../slices/musicSlice"

const store = configureStore({
  
  reducer: {
    weather: weatherReducer,
    movies: movieReducer,
    cricket: cricketReducer,
    music: musicReducer
  },
});

export default store;
