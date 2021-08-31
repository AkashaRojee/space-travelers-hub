import * as apiActions from './api';

// ACTION TYPES
const DRAGONS_REQUESTED = 'dragons/request';
const DRAGONS_LOADED = 'dragons/load';
const DRAGON_RESERVED = 'dragon/:id/reserve';
const DRAGON_UNRESERVED = 'dragon/:id/unreserve';

// ACTION CREATORS
export const loadDragons = () => (dispatch, getState) => {
  const {
    dragons: { lastFetched },
  } = getState();
  return lastFetched
    ? getState()
    : dispatch(
        apiActions.requestAPICall({
          url: 'https://api.spacexdata.com/v3/dragons',
          onStart: DRAGONS_REQUESTED,
          onSuccess: DRAGONS_LOADED,
        })
      );
};
export const reserveDragon = (id) => ({
  type: DRAGON_RESERVED,
  payload: { id },
});
export const unReserveDragon = (id) => ({
  type: DRAGON_UNRESERVED,
  payload: { id },
});

// REDUCER
const initialState = {
  list: [],
  isLoading: false,
  lastFetched: null,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === DRAGONS_REQUESTED) return { ...state, isLoading: true };
  if (type === DRAGONS_LOADED) {
    return {
      ...state,
      lastFetched: Date.now(),
      isLoading: false,
      list: payload.map(({ id, name, type, flickr_images: [imgSrc] }) => ({
        id,
        name,
        type,
        imgSrc,
        isReserved: false,
      })),
    };
  }
  if (type === DRAGON_RESERVED) {
    return {
      ...state,
      list: state.list.map((dragon) =>
        dragon.id === payload.id ? { ...dragon, isReserved: true } : dragon
      ),
    };
  }
  if (type === DRAGON_UNRESERVED) {
    return {
      ...state,
      list: state.list.map((dragon) =>
        dragon.id === payload.id ? { ...dragon, isReserved: false } : dragon
      ),
    };
  }
  return state;
};

export default reducer;
