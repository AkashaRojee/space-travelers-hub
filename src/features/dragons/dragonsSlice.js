import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDragons = createAsyncThunk('/dragons/get', async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/dragons');
  return data;
});

export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    reserve: (state, action) => {
      state.find((dragon) => dragon.id === action.payload).reserved = true;
    },
    cancel: (state, action) => {
      state.find((dragon) => dragon.id === action.payload).reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDragons.fulfilled, (state, action) => {
      action.payload.forEach((dragon) => {
        state.push({
          id: dragon.id,
          title: dragon.name,
          type: dragon.type,
          image: dragon.flickr_images[0],
        });
      });
    });
  },
});

export const { reserve, cancel } = dragonsSlice.actions;

export default dragonsSlice.reducer;
