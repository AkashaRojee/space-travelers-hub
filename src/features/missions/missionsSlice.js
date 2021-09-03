import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('/missions/getMissions', async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
  return data;
});

export const joinMission = createAction('joinMission');
export const leaveMission = createAction('leaveMission');

const missionsSlice = createSlice({
  name: 'missons',
  initialState: {
    missions: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
      state.status = 'success';
    });
    builder.addCase(getMissions.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(joinMission, (state, action) => {
      const missions = [...state.missions];
      missions.find((mission) => mission.mission_id === action.payload).joined = true;
    });
    builder.addCase(leaveMission, (state, action) => {
      const missions = [...state.missions];
      missions.find((mission) => mission.mission_id === action.payload).joined = false;
    });
  },
});

export default missionsSlice.reducer;
