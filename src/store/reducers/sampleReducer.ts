import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sampleData: [],
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    addSampleData(state, action) {
      state.sampleData.push(action.payload);
    },
  },
});

export const { addSampleData } = sampleSlice.actions;
export default sampleSlice.reducer;
