import * as apiActions from './api';
// ACTION TYPES

const DRAGONS_REQUESTED = 'dragons/request';
const DRAGONS_LOADED = 'dragons/load';
const DRAGON_RESERVED = 'dragon/:id/reserve';
const DRAGON_UNRESERVED = 'dragon/:id/unreserve';

// ACTION CREATORS
export const loadDragons = () => apiActions.requestAPICall({
  url: 'https://api.spacexdata.com/v3/dragons',
  onStart: DRAGONS_REQUESTED,
  onSuccess: DRAGONS_LOADED,
});
// REDUCER
const initialState = {
  list: [],
  isLoading: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === DRAGONS_REQUESTED) return { ...state, isLoading: true };
  if (type === DRAGONS_LOADED) {
    return {
      ...state,
      isLoading: false,
      list: payload.map(({
        id, name, type, flickr_images: [imgSrc],
      }) => ({
        id,
        name,
        type,
        imgSrc,
      })),
    };
  }
  return state;
};

export default reducer;
