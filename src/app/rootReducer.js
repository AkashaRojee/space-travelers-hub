import { combineReducers } from 'redux';
import dragonsReducer from '../features/dragons/dragonsSlice';
import rocketsReducer from '../features/rockets/rocketsSlice';
import missionsReducer from '../features/missions/missionsSlice';

export default combineReducers({
  dragons: dragonsReducer,
  rockets: rocketsReducer,
  missions: missionsReducer,
});
