// store/movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovieData } from '../api/MovieAPI';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  try {
    const response = await fetchMovieData();
    return response;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  status: 'idle',
  data: [],
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
