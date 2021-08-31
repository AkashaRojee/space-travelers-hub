import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import api from '../features/dragons/store/middleware/api';

const store = configureStore({
  rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export default store;
