// REDUCER

const initialState = {
  list: [],
  loading: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  return 'let there be light';
};

export default reducer;
