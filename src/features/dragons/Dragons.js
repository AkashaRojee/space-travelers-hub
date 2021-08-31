import React from 'react';
import Dragon from './Dragon';
import * as dragonActions from './store/dragonsSlice';
import './Dragons.css';
import { useSelector, useDispatch } from 'react-redux';
import { StaticRouter } from 'react-router';

const Dragons = () => {
  const { list: dragonsList, isLoading } = useSelector(
    (state) => state.dragons
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(dragonActions.loadDragons());
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <p className="loading">LOADING......</p>
      ) : (
        <>
          {' '}
          {dragonsList.map((dragon) => (
            <Dragon key={dragon.id} data={dragon} />
          ))}
        </>
      )}
    </div>
  );
};

export default Dragons;
