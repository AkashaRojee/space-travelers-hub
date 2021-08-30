import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

const getMissions = createAsyncThunk('/missions/getMissions', async () => {
    const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
      return data
  });
