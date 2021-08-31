const api = (store) => (next) => (action) => {
  console.log('MIDDLEWARE IS HERE');
  next(action);
};

export default api;
