import { combineReducers } from 'redux';
import dragonReducer from '../features/dragons/store/dragonsSlice';
import rocketsReducer from '../features/rockets/rocketSlice';
import missionSlice from '../features/missions/missionSlice';

export default combineReducers({
  dragons: dragonReducer,
  rockets: rocketsReducer,
  missions: missionSlice,
});
