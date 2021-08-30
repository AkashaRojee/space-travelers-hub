import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spacexdata.com/v3'
})



export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    add: state => {
      state.push(
        {
          id: 'rocketid',
          title: 'rockettitle',
          description: 'rocketdescription',
          image: 'https://imgur.com/DaCfMsj.jpg'
        });
    }
  }
})

// Action creators are generated for each case reducer function
export const { add } = rocketSlice.actions

export default rocketSlice.reducer