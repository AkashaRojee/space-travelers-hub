import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    reserve: (state, action) => {
      state.find((rocket) => rocket.id === action.payload).reserved = true;
    },
    cancel: (state, action) => {
      state.find((rocket) => rocket.id === action.payload).reserved = false;
    },
  },
});

export const { add, reserve, cancel } = rocketSlice.actions;

export const getRockets = () => async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/rockets');
  data.forEach((rocket) => {
    dispatch(add({
      id: rocket.rocket_id,
      title: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    }));
  });
};

export default rocketSlice.reducer;
