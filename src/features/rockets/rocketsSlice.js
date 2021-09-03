import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('/rockets/get', async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/rockets');
  return data;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    reserve: (state, action) => {
      state.find((rocket) => rocket.id === action.payload).reserved = true;
    },
    cancel: (state, action) => {
      state.find((rocket) => rocket.id === action.payload).reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      action.payload.forEach((rocket) => {
        state.push({
          id: rocket.rocket_id,
          title: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        });
      });
    });
  },
});

export const { reserve, cancel } = rocketsSlice.actions;

export default rocketsSlice.reducer;
