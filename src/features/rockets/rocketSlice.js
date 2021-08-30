import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getRockets = () => async (dispatch) => {
  try {
    const {data} = await axios.get('https://api.spacexdata.com/v3/rockets');
    data.forEach((rocket) => {
      dispatch(add(rocket));
    })
  } catch (error) {
    console.log(error);
  }
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const {rocket_id, rocket_name, description, flickr_images} = action.payload;
      state.push(
        {
          id: rocket_id,
          title: rocket_name,
          description: description,
          image: flickr_images[0]
        });
    }
  }
})

// Action creators are generated for each case reducer function
export const { add } = rocketSlice.actions

export default rocketSlice.reducer