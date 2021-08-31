import { combineReducers } from 'redux';
import dragonReducer from '../features/dragons/store/dragonsSlice';

export default combineReducers({
  dragons: dragonReducer,
});
