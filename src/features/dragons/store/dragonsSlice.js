// ACTION TYPES

const DRAGONS_REQUESTED = 'dragons/request';
const DRAGONS_LOADED = 'dragons/load';
const DRAGON_RESERVED = 'dragon/:id/reserve';
const DRAGON_UNRESERVED = 'dragon/:id/unreserve';

// REDUCER

const initialState = {
  list: [],
  loading: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === DRAGONS_REQUESTED) return { ...state, loading: true };
  return state;
};

export default reducer;
