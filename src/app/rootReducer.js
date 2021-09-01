import { combineReducers } from 'redux';
import dragonReducer from '../features/dragons/store/dragonsSlice';
import rocketsReducer from '../features/rockets/rocketSlice';

export default combineReducers({
  dragons: dragonReducer,
  rockets: rocketsReducer,
});
