/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMissions = createAsyncThunk('/missions/getMissions', async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
  return data;
});

export const joinMission = createAction('joinMission');
export const leaveMission = createAction('leaveMission');

const missionSlice = createSlice({
  name: 'missons',
  initialState: {
    missions: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getMissions.fulfilled, (state, payload) => {
      state.missions = payload.payload;
      state.status = 'success';
    });
    builder.addCase(getMissions.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(joinMission, (state, payload) => {
      const missions = [...state.missions];
      missions.find((mission) => mission.mission_id === payload.payload).joined = true;
    });
    builder.addCase(leaveMission, (state, payload) => {
      const missions = [...state.missions];
      missions.find((mission) => mission.mission_id === payload.payload).joined = false;
    });
  },
});

export default missionSlice.reducer;
