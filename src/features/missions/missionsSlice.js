import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

export const getMissions = createAsyncThunk('/missions/getMissions', async () => {
    const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
      return data
});

  const missionSlice =  createSlice({
    name: 'missons',
    initialState: {
      missions: [],
      status: null,
    },
    extraReducers: {
      [getMissions.pending]: (state) => {
        state.status = 'loading';
      },
      [getMissions.fulfilled]: (state, { payload }) => {
        state.missions = payload;
        state.status = 'sucess';
      },
      [getMissions.rejected]: (state) => {
        state.status = 'failed';
      },
    }
  });
  
  
  export default missionSlice.reducer;