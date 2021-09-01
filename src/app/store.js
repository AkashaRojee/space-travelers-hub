import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from '../features/rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
