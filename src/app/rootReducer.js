import { configureStore } from '@reduxjs/toolkit'
import missionSlice from '../features/missions/missionsSlice';

export default configureStore({
  reducer: {
    missions: missionSlice,
  }
})