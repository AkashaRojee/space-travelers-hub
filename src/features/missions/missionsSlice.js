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
    extraReducers:(builder) => {
      builder.addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      } )
      builder.addCase(getMissions.fulfilled, (state, payload) => {
        state.missions = payload.payload;
        state.status = 'success';
      } )
      builder.addCase(getMissions.rejected, (state) => {
        state.status = 'failed';
      })
    }
  });
  
  
  export default missionSlice.reducer;