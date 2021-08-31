import * as apiActions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  console.log(action);
  console.log(action.type);
  // debugger;
  if (action.type !== apiActions.API_REQUESTED) return next(action);

  next(action);
  const {
    payload: {
      url, method = 'GET', body, onStart, onSuccess, onError,
    },
  } = action;
  if (onStart) dispatch({ type: onStart });
  try {
    const response = await fetch(url, {
      method,
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    dispatch(apiActions.onAPICallSuccess());
    if (onSuccess) dispatch({ type: onSuccess, payload: data });
  } catch (error) {
    dispatch(apiActions.onAPICallFail());
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
