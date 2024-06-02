import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMusicDataApi } from '../api/MusicAPI';

export const fetchMusicData = createAsyncThunk('music/fetchMusicData', async () => {
  const data = await fetchMusicDataApi();
  return data.feed.results;
});

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusicData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMusicData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMusicData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default musicSlice.reducer;
