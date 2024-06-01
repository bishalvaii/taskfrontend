// cricketSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCricketMatches }  from '../api/CricMatchesAPI';


export const fetchCricketMatchesData = 
createAsyncThunk('cricket/fetchCricketMatchesData', async () => {
  try {
    const response = await fetchCricketMatches();
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

const cricketSlice = createSlice({
  name: 'cricket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCricketMatchesData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCricketMatchesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCricketMatchesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cricketSlice.reducer;
